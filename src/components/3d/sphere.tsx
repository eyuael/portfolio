'use client'
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const Sphere = () => {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01
      meshRef.current.rotation.y += 0.01
    }
  })

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial color="#96031A" metalness={0.5} roughness={0.2} />
    </mesh>
  )
}

export default Sphere