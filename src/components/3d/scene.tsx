'use client'
import { Canvas } from '@react-three/fiber'
import WavePlane from './particleScene'

const Scene = () => {
    return (
      <Canvas 
        camera={{ 
          position: [0, 0, 10], 
          fov: 75,
          near: 0.1,
          far: 100 
        }}
        style={{ 
          background: '#111111',
          width: '100vw',
          height: '100vh' 
        }}
      >
        <WavePlane />
        <ambientLight intensity={0.5} />
      </Canvas>
    )
  }
  
  export default Scene