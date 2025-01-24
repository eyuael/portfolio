// src/sections/Projects.tsx
import { motion } from 'framer-motion'
import { FiGithub, FiExternalLink } from 'react-icons/fi'
import { SiReact, SiThreedotjs, SiTypescript } from 'react-icons/si'

const Projects = () => {
  const projects = [
    {
      title: '3D Portfolio',
      description: 'Interactive portfolio with Three.js animations and custom shaders',
      tech: [<SiReact />, <SiThreedotjs />, <SiTypescript />],
      link: '#',
      github: '#'
    },
    {
      title: 'Particle System',
      description: 'Real-time particle simulation with mouse interaction physics',
      tech: [<SiThreedotjs />, <SiTypescript />],
      link: '#',
      github: '#'
    },
    {
      title: 'AI Dashboard',
      description: 'Machine learning visualization interface with real-time metrics',
      tech: [<SiReact />, <SiTypescript />],
      link: '#',
      github: '#'
    },
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-6xl px-4"
    >
      <div className="bg-black/50 backdrop-blur-lg rounded-2xl p-8 shadow-xl">
        <h2 className="text-4xl font-bold text-white mb-8">Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-800/50 hover:bg-gray-800/70 transition-all rounded-xl p-6 group"
            >
              <div className="flex flex-col h-full">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4 flex-grow">
                  {project.description}
                </p>
                
                <div className="flex items-center space-x-4 mb-4">
                  {project.tech.map((Icon, i) => (
                    <span key={i} className="text-2xl text-gray-400">
                      {Icon}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
                  >
                    <FiExternalLink />
                    <span>Demo</span>
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
                  >
                    <FiGithub />
                    <span>Code</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default Projects