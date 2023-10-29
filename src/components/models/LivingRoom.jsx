import { Environment, Html, OrbitControls, PerspectiveCamera } from '@react-three/drei'
import React, { useMemo, useRef, useState } from 'react'
import Model from './Scene'
import { useControls } from 'leva'
import annotations from './annotations.json'
import { useFrame, useThree } from '@react-three/fiber'
import TWEEN  from '@tweenjs/tween.js'
import MaterialMenu from './MaterialMenu'


function Annotations({ controls,selected,setSelected }) {
    const { camera } = useThree()
  console.log("annotationss",selected);
    return (
      <>
        {annotations.map((a, i) => {
          return (
            <Html key={i} position={[a.lookAt.x, a.lookAt.y, a.lookAt.z]}>
              <svg height="34" width="34" transform="translate(-16 -16)" style={{ cursor: 'pointer' }}>
                <circle
                  cx="17"
                  cy="17"
                  r="16"
                  stroke="white"
                  strokeWidth="2"
                  fill="rgba(0,0,0,.66)"
                  onPointerUp={() => {
                    setSelected(i)
                    // change target
                    new TWEEN.Tween(controls.current.target)
                      .to(
                        {
                          x: a.lookAt.x,
                          y: a.lookAt.y,
                          z: a.lookAt.z
                        },
                        1000
                      )
                      .easing(TWEEN.Easing.Cubic.Out)
                      .start()
  
                    // change camera position
                    new TWEEN.Tween(camera.position)
                      .to(
                        {
                          x: a.camPos.x,
                          y: a.camPos.y,
                          z: a.camPos.z
                        },
                        1000
                      )
                      .easing(TWEEN.Easing.Cubic.Out)
                      .start()
                  }}
                />
                <text x="12" y="22" fill="white" fontSize={17} fontFamily="monospace" style={{ pointerEvents: 'none' }}>
                  {i + 1}
                </text>
              </svg>
              {a.description && i === selected && (
                <div id={'desc_' + i} className="annotationDescription" dangerouslySetInnerHTML={{ __html: a.description }} />
              )}
            </Html>
          )
        })}
      </>
    )
  }
  
  function Tween() {
    useFrame(() => {
      TWEEN.update()
    })
  }


const LivingRoom = () => {

  const [selected, setSelected] = useState(-1)
const [textureSelect,setTextureSelect]=useState(-1);
const [componentSelect,setComponentSelect]=useState(-1);

const ref=useRef();
    const options=useMemo(()=>{
        return{
          x:{value: -7, min: -Math.PI*4, max: Math.PI * 4, step: 0.01},
          y: { value: 0, min:  -Math.PI*4, max: Math.PI * 4, step: 0.01 },
          z: { value: 0, min:  -Math.PI*4, max: Math.PI * 4, step: 0.01 },
          visible: true,
          color: { value: 'white' },
        }
      },[])

      const options2=useMemo(()=>{
        return{
        
          Floor: false,
          Chair: false,
          Table: false,
          Cabinet:false
        }
      },[])


          console.log("room",selected);
      const p=useControls('Model dimensions ',options);
      const p2=useControls("Texture Change",options2);
let sexyPointer=-1;

 
      if(p2.Floor==true){
        p2.Table=false;
        p2.Cabinet=false;
        p2.Chair=false;
        sexyPointer=0;

      }
       else if(p2.Chair==true){
        p2.Table=false;
        p2.Cabinet=false;
        p2.Floor=false;
        sexyPointer=1;

      }else if(p2.Table==true){
        p2.Cabinet=false;
        p2.Floor=false;
        p2.Chair=false;
        sexyPointer=2;
        
      }else if(p2.Cabinet==true){
        p2.Floor=false;
        p2.Chair=false;
        p2.Table=false;
        sexyPointer=3;

      }


  useMemo(()=>setComponentSelect(sexyPointer),[setComponentSelect,sexyPointer]);

      console.log("p2 floor:",p2.Floor)
      console.log("p2 chair:",p2.Chair)
      console.log("p2 table:",p2.Table)
      console.log("p2 Cabinet:",p2.Cabinet)
      console.log(componentSelect);
  return (
    <>
    <PerspectiveCamera makeDefault position={[p.x,p.y,p.z]}/>
    <OrbitControls target={[0,0,0]} ref={ref} maxPolarAngle={1.45} enableDamping={false} />
    <ambientLight args={['white',0.5]} />
    <Annotations controls={ref} selected={selected} setSelected={setSelected} />
    <Tween />
    {
     componentSelect>=0? <MaterialMenu setTextureSelect={setTextureSelect} componentSelect={componentSelect} 
     
     />:null

    }
    <Environment preset='apartment' />
    <Model position={[0,0,0]} Color={p.color} componentSelect={componentSelect} textureSelect={textureSelect}/>

        </>
  )
}

export default LivingRoom