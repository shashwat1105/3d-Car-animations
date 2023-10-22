import { MeshReflectorMaterial } from '@react-three/drei'
import { useLoader } from '@react-three/fiber'
import React, { useEffect } from 'react'
import { RepeatWrapping, TextureLoader } from 'three'

const Ground = () => {

    const [roughness,normal]=useLoader(TextureLoader,[
        "public/textures/terrain-roughness.jpg",
        "public/textures/terrain-normal.jpg"
    ]);


    useEffect(()=>{
        [normal,roughness].forEach((t)=>{
            t.wrapS=RepeatWrapping;
            t.wrapT=RepeatWrapping;
            t.repeat.set(5,5);
        })

        // normal.encoding=LinearEncoding;
    },[normal,roughness])
  return (
    <mesh rotateX={-Math.PI*0.5} castShadow receiveShadow>
<planeGeometry args={[30,30]}/>
<MeshReflectorMaterial
envMapIntensity={0}
dithering={[0.015,0.015,0.015]}
roughness={0.7}
blur={[1000,400]}
mixBlur={30}
roughnessMap={roughness}
normalMap={normal}
mixStrength={80}
mixContrast={1}
resolution={1024}
mirror={0}
depthScale={0.01}
minDepthThreshold={0.9}
maxDepthThreshold={1}
depthToBlurRatioBias={0.25}
debug={0}
reflectorOffset={0.2}

/>


    </mesh>
  )
}

export default Ground