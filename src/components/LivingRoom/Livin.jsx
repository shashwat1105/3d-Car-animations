import { Environment, OrbitControls, PerspectiveCamera, useGLTF, useTexture } from '@react-three/drei'
import { useFrame, useLoader } from '@react-three/fiber';
import React, { useMemo, useRef } from 'react'
import { useControls } from 'leva';

const Livin = () => {
const ref=useRef();
const gltf=useGLTF('public/models/dinning_room/scene.gltf');


const texture=useTexture('public/models/dinning_room/textures/laminate3.png');
// console.log(gltf.scene.children[0].children[0].children[0].children[3]);
// gltf.scene.getObjectByName('table').children[0].material.color;
console.log(gltf.scene.getObjectByName('table').children[0].material.emissive.setHex='#ff4100');
gltf.scene.getObjectByName('table').children[0].material.map=texture;
// gltf.scene.getObjectByName('table').children[0].material.emissive=texture;
gltf.scene.getObjectByName('table').children[0].material.map.needsUpdate=true;
// gltf.scene.getObjectByName('IKEA_seat').children[0].material.map.name='public/models/dinning_room/textures/laminate3.png';
// gltf.scene.getObjectByName('IKEA_seat').children[0].material.map.isRenderTargetTexture=true;
const {nodes,materials}=gltf;
// console.log(nodes);

useFrame((state,delta)=>{
    // console.log(ref.state.position.x);
    // console.log(state.camera.position);

    window.addEventListener('mouseup',()=>{
      // console.log(state.camera.position);
      // console.log(state.camera.rotation);
    })
})

  return (
    <primitive ref={ref}  object={gltf.scene} position={[0,0,0]}/>
  )
}



function LivinRoom(){

    // window.addEventListener('mouseup',(event)=>{
    //     console.log(event);
    // });

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
    return(

        <>
        <PerspectiveCamera makeDefault position={[p.x,p.y,p.z]}/>
    <OrbitControls target={[0,0,0]} maxPolarAngle={1.45} enableDamping={false} />
    <ambientLight args={['white',0.5]}/>
    <Environment preset='apartment'/>
    <Livin/>

        </>
    )
}

//position for chair 0.159,1.6249,2.4566
//position for table -0.259,1.9249,2.2566
//position of cabinet -0.9,2.4,7.3


export default LivinRoom