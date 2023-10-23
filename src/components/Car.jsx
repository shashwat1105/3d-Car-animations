import { CubeCamera, Environment, OrbitControls, PerspectiveCamera } from "@react-three/drei"
import Ground from "./Ground"
import CarComp from "./CarComp"
import Rings from "./Rings"
import BoxMeshes from "./Boxes"
import { FloatingGrid } from "./FloatingGrid"

const Car = () => {
  return (
    <>
    <OrbitControls target={[0,0.35,0]} maxPolarAngle={1.45}/>
    <PerspectiveCamera makeDefault fov={50} position={[3,2,5]}/>
{/* <ambientLight args={["hotpink",0.1]} /> */}
   
<CubeCamera resolution={256} frames={Infinity}>
{
    (texture)=>(
        <>
        <Environment map={texture}/>
        <CarComp/>
        </>
    )
}
</CubeCamera>


<color args={[0,0,0]} attach='background'/>
{/* <Environment preset="sunset" color='blue' background blur={1}/> */}
<spotLight color={[2,0.25,0.7]}
intensity={70}
angle={0.6}
penumbra={0.5}
position={[5,8,0]}
castShadow
shadow-bias={-0.0001}/>


<spotLight color={[0.14,0.5,1]}
intensity={70}
angle={0.6}
penumbra={0.5}
position={[-5,5,0]}
castShadow
shadow-bias={-0.0001}/>
{/* <CarComp/> */}
<BoxMeshes/>
<Ground/>
{/* <EffectComposer>
    
        <Bloom blendFunction={BlendFunction.ADD}
        intensity={1.3}
        width={300}
        height={300}
        kernelSize={5}
        luminanceThreshold={5}
        luminanceSmoothing={0.025}/>
<ChromaticAberration blendFunction={BlendFunction.NORMAL}
offset={[0.0005,0.0012]}/>
    
</EffectComposer>  */}

<FloatingGrid/>

<Rings/>
    </>
  )
}

export default Car