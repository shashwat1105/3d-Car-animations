import { Canvas } from "@react-three/fiber"
import { Suspense } from "react";
import CanvasLoader from './components/CanvasLoader'
import Car from "./components/Car";

export default function App() {
  return (
     
    
<Canvas shadows style={{ height:window.innerHeight, width:window.innerWidth}}>
<Suspense fallback={CanvasLoader} >
<Car/>
</Suspense>
</Canvas>
    
  )
}