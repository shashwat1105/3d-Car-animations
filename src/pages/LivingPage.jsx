import React, { Suspense } from 'react'
import LivingRoom from '../components/models/LivingRoom'
import CanvasLoader from '../components/CanvasLoader'
import { Canvas } from '@react-three/fiber'
import { Perf } from 'r3f-perf'

const LivingPage = () => {
  return (
    <Suspense fallback={CanvasLoader} >
<Canvas shadows style={{ height:window.innerHeight, width:window.innerWidth}}>
{/* <Car/> */}
<LivingRoom/>
{/* <Stats /> */}

<Perf position="top-left" />
</Canvas>
</Suspense>
  )
}

export default LivingPage