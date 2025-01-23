import { motion } from 'framer-motion'

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center"
    >
      <h1 className="text-6xl font-bold text-white mb-4">Eyuael Berhe</h1>
      <p className="text-xl text-gray-300">Full Stack Developer</p>
    </motion.div>
  )
}

export default Home