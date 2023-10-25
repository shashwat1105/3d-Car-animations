import { Environment, Html, OrbitControls, PerspectiveCamera } from '@react-three/drei'
import React, { useMemo, useRef, useState } from 'react'
import Scene from './Scene'
import { useControls } from 'leva'
import annotations from './annotations.json'
import { useFrame, useThree } from '@react-three/fiber'
import TWEEN  from '@tweenjs/tween.js'


function Annotations({ controls }) {
    const { camera } = useThree()
    const [selected, setSelected] = useState(-1)
  
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
const ref=useRef();
    const options=useMemo(()=>{
        return{
          x:{value: -7, min: -Math.PI*4, max: Math.PI * 4, step: 0.01},
          y: { value: 0, min:  -Math.PI*4, max: Math.PI * 4, step: 0.01 },
          z: { value: 0, min:  -Math.PI*4, max: Math.PI * 4, step: 0.01 },
          visible: true,
          color: { value: 'lime' },
        }
      },[])
          
      const p=useControls('Model dimensions ',options);
  return (
    <>
    <PerspectiveCamera makeDefault position={[p.x,p.y,p.z]}/>
    <OrbitControls target={[0,0,0]} ref={ref} maxPolarAngle={1.45} enableDamping={false} />
    <ambientLight args={['white',0.5]} />
    <Annotations controls={ref}  />
    <Tween />
    <Environment preset='apartment' />
    <Scene position={[0,0,0]}/>

        </>
  )
}

export default LivingRoom