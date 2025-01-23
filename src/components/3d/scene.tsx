import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import ParticleScene from './particleScene'

const Scene = () => {
  return (
    <Canvas camera={{ position: [0, 0, 5] }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <ParticleScene />
      <OrbitControls enableZoom={false} />
    </Canvas>
  )
}

export default Scene