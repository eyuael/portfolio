import { motion } from 'framer-motion'
import { FiCode, FiDatabase, FiCloud } from 'react-icons/fi'

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl px-4"
    >
      <div className="bg-black/50 backdrop-blur-lg rounded-2xl p-8 shadow-xl">
        <h2 className="text-4xl font-bold text-white mb-8">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4 text-gray-300">
            <p>
              I'm a full-stack developer with 5+ years of experience creating digital experiences.
              Specializing in modern web technologies and 3D interactive applications.
            </p>
            <p>
              Currently focused on building immersive web experiences using cutting-edge technologies
              like Three.js, React, and Node.js.
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <FiCode className="w-8 h-8 text-secondary" />
              <div>
                <h3 className="text-xl font-semibold text-white">Frontend</h3>
                <p className="text-gray-400">React, TypeScript, Three.js, TailwindCSS</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <FiDatabase className="w-8 h-8 text-secondary" />
              <div>
                <h3 className="text-xl font-semibold text-white">Backend</h3>
                <p className="text-gray-400">Node.js, PostgreSQL, REST API</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <FiCloud className="w-8 h-8 text-secondary" />
              <div>
                <h3 className="text-xl font-semibold text-white">DevOps</h3>
                <p className="text-gray-400">AWS, Docker, Kubernetes, Git, Github Actions</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default About