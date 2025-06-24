import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const Home = () => {
  const [displayText, setDisplayText] = useState('')
  const [currentLineIndex, setCurrentLineIndex] = useState(0)
  
  const bootSequence = [
    'Initializing portfolio system...',
    'Loading user profile: Eyuael Berhe',
    'Checking system status... [OK]',
    'Starting services...',
    '  ├── Web Development Skills... [LOADED]',
    '  ├── Full Stack Experience... [LOADED]',
    '  └── Creative Problem Solving... [LOADED]',
    '',
    'System ready. Welcome to my portfolio!',
    '',
  ]

  const asciiArt = `
    ███████╗██╗   ██╗██╗   ██╗ █████╗ ███████╗██╗     
    ██╔════╝╚██╗ ██╔╝██║   ██║██╔══██╗██╔════╝██║     
    █████╗   ╚████╔╝ ██║   ██║███████║█████╗  ██║     
    ██╔══╝    ╚██╔╝  ██║   ██║██╔══██║██╔══╝  ██║     
    ███████╗   ██║   ╚██████╔╝██║  ██║███████╗███████╗
    ╚══════╝   ╚═╝    ╚═════╝ ╚═╝  ╚═╝╚══════╝╚══════╝
  `

  useEffect(() => {
    if (currentLineIndex < bootSequence.length) {
      const timer = setTimeout(() => {
        setDisplayText(prev => prev + bootSequence[currentLineIndex] + '\n')
        setCurrentLineIndex(prev => prev + 1)
      }, 500)
      return () => clearTimeout(timer)
    }
  }, [currentLineIndex, bootSequence])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="absolute inset-0 flex items-center justify-center"
    >
      <div className="terminal-window max-w-4xl w-full mx-4">
        <div className="terminal-header">
          <span>eyuael@portfolio:~$ cd /home && ./welcome.sh</span>
        </div>
        <div className="terminal-content">
          <div className="ascii-art text-center mb-6">
            {asciiArt}
          </div>
          
          <div className="mb-8">
            <pre className="terminal-text whitespace-pre-wrap">
              {displayText}
              <span className="terminal-cursor">█</span>
            </pre>
          </div>

          {currentLineIndex >= bootSequence.length && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <div className="border-t border-green-400 pt-4">
                <h1 className="text-3xl font-bold terminal-text mb-2">
                  Eyuael Berhe
                </h1>
                <p className="terminal-text-secondary text-lg mb-4">
                  Full Stack Developer | Problem Solver | Tech Enthusiast
                </p>
                <div className="terminal-text-muted">
                  <p>$ whoami</p>
                  <p className="ml-4">A passionate developer crafting digital experiences</p>
                  <p>$ pwd</p>
                  <p className="ml-4">/home/portfolio/welcome</p>
                  <p>$ ls -la skills/</p>
                  <p className="ml-4">drwxr-xr-x  React TypeScript Node.js AWS</p>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export default Home