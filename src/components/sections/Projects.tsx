import { motion } from 'framer-motion'

const Projects = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center"
    >
      <h2 className="text-4xl font-bold text-white mb-8">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Add project cards here */}
      </div>
    </motion.div>
  )
}

export default Projects