import React from 'react'
import {Html,useProgress} from '@react-three/drei'


const CanvasLoader = () => {
  const {progress}=useProgress();

  return (
    <Html>
      <span className='canvas-loader'></span>
      <p style={{
        fontSize:14,
        color:'yellow',
        fontWeight:800,
        marginTop:40
      }}>{progress.toFixed(2)}</p>
    </Html>
  )
}

export default CanvasLoader