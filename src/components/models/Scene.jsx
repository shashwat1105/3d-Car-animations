 
import React, { useMemo, useRef } from 'react'
import { Decal, useGLTF, useTexture } from '@react-three/drei'
import * as THREE from 'three';
 
import {floorObj,cabinObj,chairObj,tableObj} from '../../../public/models/dinning_room/secondary_materials'

export default function Model({Color,componentSelect,textureSelect,...props}) {
  const { nodes, materials } = useGLTF('public/models/dinning_room/scene.gltf');
const floorRef=useRef();
 
console.log("texture",textureSelect);

  //  const texture = useMemo(() => {
  //   const textureSource = floorObj[textureSelect >= 0 && componentSelect == 0 ? textureSelect : 0];
  //   return useTexture(textureSource);
  // }, [componentSelect, textureSelect]);

  const textureSource = floorObj[textureSelect >= 0 && componentSelect == 0 ? textureSelect : 0];
const texture=useTexture(textureSource);
   texture.wrapS = THREE.RepeatWrapping;
   texture.wrapT = THREE.RepeatWrapping;
   texture.repeat.set(5, 5); // Adjust the values to control the tiling density
 console.log("t: ",texture)
 

// const cabTex = useMemo(() => {
//   const textureSource = cabinObj[textureSelect >= 0 && componentSelect == 3 ? textureSelect : 0];
//   return useTexture(textureSource);
// }, [componentSelect, textureSelect]);

const textureSource1 = cabinObj[textureSelect >= 0 && componentSelect == 3 ? textureSelect : 0];
const cabTex=useTexture(textureSource1) 
cabTex.wrapT = THREE.RepeatWrapping;
cabTex.wrapS = THREE.RepeatWrapping;
cabTex.repeat.set(1, 1);

 
// const chairTex = useMemo(() => {
//   const textureSource = chairObj[textureSelect >= 0 && componentSelect == 1 ? textureSelect : 0];
//   return useTexture(textureSource);
// }, [componentSelect, textureSelect]);

const textureSource2 = chairObj[textureSelect >= 0 && componentSelect == 1 ? textureSelect : 0];
const chairTex=useTexture(textureSource2)
chairTex.wrapT = THREE.RepeatWrapping;
chairTex.wrapS = THREE.RepeatWrapping;
chairTex.repeat.set(20, 2);

 
// const tableTex = useMemo(() => {
//   const textureSource = tableObj[textureSelect >= 0 && componentSelect == 2 ? textureSelect : 0];
//   return useTexture(textureSource);
// }, [componentSelect, textureSelect]);

const textureSource3 = tableObj[textureSelect >= 0 && componentSelect == 2 ? textureSelect : 0];
const tableTex=useTexture(textureSource3)
tableTex.wrapT = THREE.RepeatWrapping;
tableTex.wrapS = THREE.RepeatWrapping;
tableTex.repeat.set(2, 1);

  return (
    <group {...props}  dispose={null}>
      <group scale={0.01}>
        <group position={[388.469, 117.552, -211.434]} rotation={[-Math.PI / 2, 0.148, 0]} scale={[2.712, 31.279, 31.279]} castShadow >
          <mesh geometry={nodes.painting_Material010_0.geometry} material={materials['Material.010']} castShadow 
          >

            </mesh>
          <mesh geometry={nodes.painting_Material011_0.geometry} material={materials['Material.011']} castShadow receiveShadow>

</mesh>

        </group>
        <group position={[366.217, 115.97, -143.771]} rotation={[-Math.PI / 2, 0, 0]} scale={3.789} castShadow receiveShadow>
          <mesh geometry={nodes.candle_Material013_0.geometry} material={materials['Material.013']} />
          <mesh geometry={nodes.candle_Material008_0.geometry} material={materials['Material.008']} />
          <mesh geometry={nodes.candle_Material007_0.geometry} material={materials['Material.007']} />
        </group>
        <group position={[85.821, 88.279, 64.486]} rotation={[-Math.PI / 2, 0, 0]} scale={100} castShadow receiveShadow>
          <mesh geometry={nodes.flower_leaf2_0.geometry} material={materials.leaf2} />
          <mesh geometry={nodes.flower_leaf1_0.geometry} material={materials.leaf1} />
        </group>
        <group position={[188.831, 243.457, -26.58]} rotation={[-Math.PI / 2, 0, 0]} scale={[2.688, 2.688, 23.024]}>
          <mesh geometry={nodes.lighting_Material001_0.geometry} material={materials['Material.001']} castShadow receiveShadow >
          <meshStandardMaterial  color={'black'}/>
            </mesh>
          <mesh geometry={nodes.lighting_Material003_0.geometry} material={materials['Material.003']} castShadow receiveShadow >
          <meshStandardMaterial  color={'black'}/>

            </mesh>
          <mesh geometry={nodes.lighting_Material014_0.geometry} material={materials['Material.014']} castShadow receiveShadow>
          <meshStandardMaterial  color={'black'}/>

            </mesh>
        </group>
        <group position={[81.651, 59.793, -127.726]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]} scale={[25.257, 25.257, 2.667]}>
          <mesh geometry={nodes.seat_Leather_0.geometry} material={materials.Leather} >
            <meshStandardMaterial  map={chairTex}/>
            </mesh>

          <mesh geometry={nodes.seat_Material5_0.geometry} material={materials.Material5} >

            </mesh>
        </group>
        <mesh geometry={nodes.house_Material009_0.geometry}
         material={materials['Material.009']} position={[0, 151.309, -0.282]} rotation={[-Math.PI / 2, 0, 0]} scale={[396.176, 396.176, 150]} >
<meshStandardMaterial color={Color}  />
          </mesh>
        <mesh geometry={nodes.cabinet_Material015_0.geometry}
         material={materials['Material.015']} position={[367.527, 300.186, 45.941]} rotation={[-Math.PI / 2, 0, 0]} scale={[34.407, 249.171, 3.605]} >
<meshStandardMaterial map={cabTex}/>
          </mesh>
      
        <mesh geometry={nodes.window_Material016_0.geometry} material={materials['Material.016']} rotation={[-Math.PI / 2, 0, 0]} scale={100} >

          </mesh>
        <mesh geometry={nodes.table_Material5001_0.geometry}
         material={materials['Material5.001']} position={[83.1, 65.739, 24.667]} 
         rotation={[-Math.PI / 2, 0, 0]} scale={[80.747, 80.747, 10.763]} >
<meshStandardMaterial map={tableTex}/>

         </mesh>
       
        <mesh ref={floorRef} geometry={nodes.floor_floor_0.geometry} 
         material={materials.floor} rotation={[-Math.PI / 2, 0, 0]} scale={100}  dispose={null}>
 
{ textureSelect>=0?(<meshStandardMaterial scale={10}  map={texture} />):null }

          </mesh>




        <mesh geometry={nodes.jar4_Material017_0.geometry} material={materials['Material.017']} position={[377.036, 94.34, 219.292]} rotation={[-Math.PI / 2, 0, 0]} scale={7.771} />
        <mesh geometry={nodes.jar3_Material002_0.geometry} material={materials['Material.002']} position={[383.419, 94.983, 239.01]} rotation={[-Math.PI / 2, 0, 0]} scale={8.337} />
        <mesh geometry={nodes.vase_grey001_0.geometry} material={materials['grey.001']} position={[85.258, 86.332, 64.115]} rotation={[-Math.PI / 2, 0, 0]} scale={8.337} />
        <mesh geometry={nodes.faucet_Material006_0.geometry} material={materials['Material.006']} position={[392.071, 95.046, 141.652]} rotation={[-Math.PI / 2, 0, 0]} scale={[0.204, 0.204, 1.555]} />
        <mesh geometry={nodes.bowl_grey_0.geometry} material={materials.grey} position={[372.827, 99.081, 270.913]} rotation={[-Math.PI / 2, 0, 0]} scale={[16.524, 16.524, 12.674]} />
        <mesh geometry={nodes.IKEA_seat_wood__0.geometry} material={materials.wood} position={[363.595, 31.995, -331.439]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]} scale={[17.536, 15.514, 15.514]} />
        <mesh geometry={nodes.carpet_Carpet__0.geometry} material={materials.Carpet} position={[81.578, 2.411, 26.536]} rotation={[-Math.PI / 2, 0, 0]} scale={[190.768, 245.015, 0.524]} />
        <mesh geometry={nodes.chopping_board1_Material1_0.geometry} material={materials.Material1} position={[388.318, 97.913, 187.245]} rotation={[-1.593, -1.28, -0.023]} scale={[1.332, 1.546, 1.332]} />
        <mesh geometry={nodes.chopping_board2_Material2_0.geometry} material={materials.Material2} position={[391.595, 98.773, 194.446]} rotation={[-1.6, -1.347, -0.03]} scale={[1.399, 1.586, 1.399]} />
        <mesh geometry={nodes.jar1_Material3_0.geometry} material={materials.Material3} position={[375.22, 92.792, -108.769]} rotation={[-Math.PI / 2, 0, -1.875]} scale={0.898} />
        <mesh geometry={nodes.jar2_Material4_0.geometry} material={materials.Material4} position={[372.586, 97.235, -121.78]} rotation={[-Math.PI / 2, 0, -1.247]} scale={0.824} />
      </group>
    </group>
  )
}

useGLTF.preload('public/models/dinning_room/scene.gltf')
