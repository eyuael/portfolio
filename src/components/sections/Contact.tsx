'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { FiSend, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Add your form submission logic here
    console.log(formData)
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl px-4"
    >
      <div className="bg-black/50 backdrop-blur-lg rounded-2xl p-8 shadow-xl">
        <h2 className="text-4xl font-bold text-white mb-8">Get in Touch</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-300 mb-2">Name</label>
              <input
                type="text"
                className="w-full bg-gray-800 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-secondary"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
            
            <div>
              <label className="block text-gray-300 mb-2">Email</label>
              <input
                type="email"
                className="w-full bg-gray-800 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-secondary"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
            
            <div>
              <label className="block text-gray-300 mb-2">Message</label>
              <textarea
                className="w-full bg-gray-800 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-secondary h-32"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
            </div>
            
            <button
              type="submit"
              className="w-full bg-secondary text-white py-3 rounded-lg flex items-center justify-center space-x-2 hover:bg-opacity-90 transition-colors"
            >
              <FiSend />
              <span>Send Message</span>
            </button>
          </form>
          
          <div className="flex flex-col items-center justify-center space-y-6">
            <div className="space-y-4 text-center">
              <h3 className="text-xl font-semibold text-white">Or find me here:</h3>
              <div className="flex space-x-6 justify-center">
                <a
                  href="https://github.com/eyuael"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-secondary transition-colors"
                >
                  <FiGithub className="w-8 h-8" />
                </a>
                <a
                  href="https://www.linkedin.com/in/eyuael-berhe-73a5941a5/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-secondary transition-colors"
                >
                  <FiLinkedin className="w-8 h-8" />
                </a>
                <a
                  href="mailto:eyuael.berhe@gmail.com"
                  className="text-gray-300 hover:text-secondary transition-colors"
                >
                  <FiMail className="w-8 h-8" />
                </a>
              </div>
            </div>
            
            <div className="w-full h-px bg-gray-700" />
            
            <div className="text-center space-y-2">
              <p className="text-gray-300">Based in:</p>
              <p className="text-white">London, UK</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Contact