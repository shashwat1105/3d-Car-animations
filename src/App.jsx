import { Canvas } from "@react-three/fiber"
import { Suspense } from "react";
import CanvasLoader from './components/CanvasLoader'
import Car from "./components/Car";
import LivinRoom from "./components/LivingRoom/livin";
import LivingRoom from "./components/models/LivingRoom";
import './App.css'
import { PointerLockControls} from "@react-three/drei";
import { Perf } from "r3f-perf";

export default function App() {
  return (
     
    
<Suspense fallback={CanvasLoader} >
<Canvas shadows style={{ height:window.innerHeight, width:window.innerWidth}}>
{/* <Car/> */}
<LivingRoom/>
{/* <Stats /> */}

{/* <Perf position="top-left" /> */}
</Canvas>
</Suspense>
    
  )
}