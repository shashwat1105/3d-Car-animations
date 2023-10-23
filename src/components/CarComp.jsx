import { useGLTF } from "@react-three/drei"
import { useFrame } from "@react-three/fiber";
import { useEffect } from "react";
import { Mesh } from "three";

const CarComp = () => {
const gltf=useGLTF('public/models/car/scene.gltf');

 useFrame((state,delta)=>{
let t=state.clock.getElapsedTime();
let group=gltf.scene.children[0].children[0].children[0];
group.children[0].rotation.x=t*2;
group.children[2].rotation.x=t*2;
group.children[4].rotation.x=t*2;
group.children[6].rotation.x=t*2;
 })

  return (
    <primitive object={gltf.scene} castShadow receiveShadow
    envMapIntensity={20}
    scale={0.005} position={[0,-0.035,0]}/>
  )
}

export default CarComp