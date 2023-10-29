import { useFrame } from '@react-three/fiber'
import { Suspense } from 'react'
import { useRef, useState } from 'react'
import { MathUtils } from 'three'
import CanvasLoader from '../CanvasLoader'

export default function Button({ id, texture, position, roughness, setTextureSelect }) {
  const ref = useRef()
  const [hovered, setHovered] = useState(false)
  useFrame((_, delta) => {
    ref.current.scale.y = ref.current.scale.x = ref.current.scale.z = MathUtils.lerp(ref.current.scale.y, hovered ? 1.5 : 1, 0.25)
    hovered && ref.current.rotateY(delta * 3)
  })
  return (
    <mesh ref={ref} position={position} 
    onPointerOver={() => setHovered(true)}
     onPointerOut={() => setHovered(false)} 
     onPointerDown={() => setTextureSelect(id)}>
        <Suspense fallback={CanvasLoader}>

      <sphereGeometry />
      <meshStandardMaterial map={texture} roughness={roughness} envMapIntensity={1.5} />
      </Suspense>

    </mesh>
  )
}