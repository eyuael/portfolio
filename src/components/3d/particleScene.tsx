import { useRef, useEffect } from 'react'
import { useFrame, Canvas, useThree } from '@react-three/fiber'
import * as THREE from 'three'

const WavePlane = () => {
  const meshRef = useRef<THREE.Mesh>(null)
  const { viewport } = useThree()
  const uniforms = useRef({
    time: { value: 0 },
    color1: { value: new THREE.Color(0x666666) }, // Dark grey
    color2: { value: new THREE.Color(0xaaaaaa) }  // Light grey
  })

  // Update plane size when viewport changes
  useEffect(() => {
    if (meshRef.current) {
      meshRef.current.scale.set(viewport.width, viewport.height, 1)
    }
  }, [viewport])

  useFrame(({ clock }) => {
    if (meshRef.current) {
      uniforms.current.time.value = clock.getElapsedTime() * 0.5
    }
  })

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <planeGeometry args={[viewport.width, viewport.height, 256, 256]} />
      <shaderMaterial
        uniforms={uniforms.current}
        vertexShader={`
          uniform float time;
          varying vec3 vPosition;

          void main() {
            vec3 pos = position;
            
            // Full-screen wave pattern
            float waveX = sin(pos.x * 2.0 + time * 2.0) * 0.5;
            float waveY = cos(pos.y * 1.5 + time * 1.7) * 0.3;
            float waveZ = sin(pos.x * 0.8 + pos.y * 1.2 + time * 1.3) * 0.4;
            
            pos.z += (waveX + waveY + waveZ) * 0.5;
            vPosition = pos;
            
            gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
          }
        `}
        fragmentShader={`
          uniform vec3 color1;
          uniform vec3 color2;
          varying vec3 vPosition;
          
          void main() {
            // Gradient based on depth
            float depth = smoothstep(-0.5, 0.5, vPosition.z);
            vec3 color = mix(color1, color2, depth);
            
            // Increased transparency
            float alpha = smoothstep(0.0, 0.5, abs(vPosition.z)) * 0.4;
            
            gl_FragColor = vec4(color, alpha);
          }
        `}
        transparent
        blending={THREE.AdditiveBlending}
        side={THREE.DoubleSide}
      />
    </mesh>
  )
}

export default WavePlane