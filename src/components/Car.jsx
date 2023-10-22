import { OrbitControls, PerspectiveCamera } from "@react-three/drei"
import Ground from "./Ground"
// import { Canvas } from "@react-three/fiber"

const Car = () => {
  return (
    <>
    <OrbitControls target={[0,0.35,0]} maxPolarAngle={1.45}/>
    <PerspectiveCamera makeDefault fov={50} position={[3,2,5]}/>

    {/* <mesh>
        <boxGeometry args={[1,1,1]}/>
        <meshBasicMaterial color={"red"}/>
    </mesh> */}
<color args={[0,0,0]} attach='background'/>
<spotLight color={[1,0.25,0.7]}
intensity={1.5}
angle={0.6}
penumbra={0.5}
position={[5,5,0]}
castShadow
shadow-bias={-0.0001}/>


<spotLight color={[0.14,0.5,1]}
intensity={2}
angle={0.6}
penumbra={0.5}
position={[-5,5,0]}
castShadow
shadow-bias={-0.0001}/>

<Ground/>
    </>
  )
}

export default Car