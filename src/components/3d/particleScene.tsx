import { useRef, useEffect, useState } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'

const ParticleScene = () => {
  const { size, viewport } = useThree()
  const particlesRef = useRef<THREE.Points>(null)
  const mouse = useRef(new THREE.Vector2(0, 0))
  const isClicked = useRef(false)
  const originalPositions = useRef<Float32Array | null>(null)
  const [particles] = useState(() => {
    // Create particles
    const count = 2000
    const positions = new Float32Array(count * 3)
    
    for (let i = 0; i < count * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 10
      positions[i + 1] = (Math.random() - 0.5) * 10
      positions[i + 2] = (Math.random() - 0.5) * 10
    }
    
    originalPositions.current = positions
    return positions
  })

  useEffect(() => {
    // Mouse move handler
    const handleMouseMove = (event: MouseEvent) => {
      mouse.current.x = (event.clientX / size.width) * 2 - 1
      mouse.current.y = -(event.clientY / size.height) * 2 + 1
    }

    // Mouse click handlers
    const handleMouseDown = () => {
      isClicked.current = true
    }

    const handleMouseUp = () => {
      isClicked.current = false
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mousedown', handleMouseDown)
    window.addEventListener('mouseup', handleMouseUp)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mouseup', handleMouseUp)
    }
  }, [size])

  useFrame((state) => {
    if (!particlesRef.current) return
    
    const positions = particlesRef.current.geometry.attributes.position.array as Float32Array
    const mouse3D = new THREE.Vector3(mouse.current.x, mouse.current.y, 0)
    
    for (let i = 0; i < positions.length; i += 3) {
      const x = positions[i]
      const y = positions[i + 1]
      const z = positions[i + 2]
      
      const particlePos = new THREE.Vector3(x, y, z)
      const originalPos = new THREE.Vector3(
        originalPositions.current![i],
        originalPositions.current![i + 1],
        originalPositions.current![i + 2]
      )

      // Add force when clicked
      if (isClicked.current) {
        const distance = particlePos.distanceTo(mouse3D)
        const force = Math.min(0.1 / distance, 0.02)
        
        const direction = new THREE.Vector3()
        direction.subVectors(particlePos, mouse3D).normalize()
        
        positions[i] += direction.x * force
        positions[i + 1] += direction.y * force
        positions[i + 2] += direction.z * force
      } else {
        // Return to original position
        positions[i] += (originalPos.x - x) * 0.05
        positions[i + 1] += (originalPos.y - y) * 0.05
        positions[i + 2] += (originalPos.z - z) * 0.05
      }
    }

    particlesRef.current.geometry.attributes.position.needsUpdate = true
  })

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particles.length / 3}
          itemSize={3}
          array={particles}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color="#96031A"
        transparent
        opacity={0.8}
        sizeAttenuation
      />
    </points>
  )
}

export default ParticleScene