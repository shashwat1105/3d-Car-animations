import { Hud, OrthographicCamera } from '@react-three/drei'
import React from 'react'
import OptionMenu from './OptionMenu'

const OptionTools = ({setComponentSelect,componentSelect}) => {
    console.log("OptionTools",componentSelect)
  return (
    <Hud>
        <OrthographicCamera makeDefault position={[0, 0, 2]} zoom={50} />
    <ambientLight intensity={1}/>
        <OptionMenu setComponentSelect={setComponentSelect} componentSelect={componentSelect}/>
    </Hud>
  )
}

export default OptionTools