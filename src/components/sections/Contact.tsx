'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [commandOutput, setCommandOutput] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setCommandOutput('Sending message...\n')
    
    // Simulate sending
    setTimeout(() => {
      setCommandOutput(prev => prev + 'Message queued successfully!\n')
      setTimeout(() => {
        setCommandOutput(prev => prev + 'Delivery confirmed ✓\n')
        setIsSubmitting(false)
        setFormData({ name: '', email: '', message: '' })
      }, 1000)
    }, 1500)
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="absolute inset-0 flex items-center justify-center p-4"
    >
      <div className="terminal-window max-w-4xl w-full">
        <div className="terminal-header">
          <span>eyuael@portfolio:~$ ./contact.sh --interactive</span>
        </div>
        <div className="terminal-content terminal-scrollbar max-h-96 overflow-y-auto">
          <div className="space-y-6">
            <div>
              <p className="terminal-prompt">$ whoami</p>
              <div className="ml-4 terminal-text">
                <p>eyuael@portfolio</p>
              </div>
            </div>

            <div>
              <p className="terminal-prompt">$ cat /etc/contact-info</p>
              <div className="ml-4 terminal-text space-y-1">
                <p>EMAIL=eyuael.berhe@gmail.com</p>
                <p>LOCATION=London, UK</p>
                <p>TIMEZONE=GMT+0</p>
                <p>AVAILABILITY=Open to opportunities</p>
              </div>
            </div>

            <div>
              <p className="terminal-prompt">$ netstat -an | grep LISTEN</p>
              <div className="ml-4 terminal-text-muted text-sm space-y-1">
                <p>tcp   0.0.0.0:80     LISTEN    # Web Portfolio</p>
                <p>tcp   github.com:22  LISTEN    # Code Repository</p>
                <p>tcp   linkedin.com:443 LISTEN  # Professional Network</p>
                <p>tcp   email:25       LISTEN    # Direct Contact</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <p className="terminal-prompt">$ mail -s "New Message" eyuael@portfolio</p>
                <form onSubmit={handleSubmit} className="terminal-form space-y-4 ml-4">
                  <div>
                    <label className="terminal-text-muted text-sm">From:</label>
                    <input
                      type="text"
                      placeholder="your-name"
                      className="w-full terminal-input"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="terminal-text-muted text-sm">Reply-To:</label>
                    <input
                      type="email"
                      placeholder="your-email@domain.com"
                      className="w-full terminal-input"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="terminal-text-muted text-sm">Message body:</label>
                    <textarea
                      placeholder="Type your message here..."
                      className="w-full terminal-input h-24 resize-none"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="terminal-button w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message [Ctrl+X]'}
                  </button>
                </form>

                {commandOutput && (
                  <div className="ml-4 mt-4">
                    <p className="terminal-prompt">$ echo "Status:"</p>
                    <pre className="terminal-text text-sm whitespace-pre-wrap">
                      {commandOutput}
                    </pre>
                  </div>
                )}
              </div>
              
              <div className="space-y-4">
                <div>
                  <p className="terminal-prompt">$ curl -s api.social/links</p>
                  <div className="ml-4 terminal-text space-y-2">
                    <a
                      href="https://github.com/eyuael"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="terminal-link block hover:bg-green-400 hover:text-black px-2 py-1 transition-colors"
                    >
                      └── github.com/eyuael
                    </a>
                    <a
                      href="https://www.linkedin.com/in/eyuael-berhe-73a5941a5/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="terminal-link block hover:bg-green-400 hover:text-black px-2 py-1 transition-colors"
                    >
                      └── linkedin.com/in/eyuael-berhe
                    </a>
                    <a
                      href="mailto:eyuael.berhe@gmail.com"
                      className="terminal-link block hover:bg-green-400 hover:text-black px-2 py-1 transition-colors"
                    >
                      └── mailto:eyuael.berhe@gmail.com
                    </a>
                  </div>
                </div>

                <div>
                  <p className="terminal-prompt">$ uptime</p>
                  <p className="ml-4 terminal-text-muted text-sm">
                    System online: Always available for new opportunities
                  </p>
                </div>

                <div>
                  <p className="terminal-prompt">$ ping response-time.local</p>
                  <div className="ml-4 terminal-text-muted text-sm">
                    <p>PING response-time.local: 64 bytes</p>
                    <p>Response time: Usually within 24 hours</p>
                    <p>Packet loss: 0% - Always responsive</p>
                  </div>
                </div>

                <div>
                  <p className="terminal-prompt">$ cat /proc/availability</p>
                  <div className="ml-4 terminal-success">
                    <p>Status: Available for:</p>
                    <p>├── Full-time opportunities</p>
                    <p>├── Contract work</p>
                    <p>├── Consulting projects</p>
                    <p>└── Collaboration discussions</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <p className="terminal-prompt">$ tail -f /var/log/contact.log</p>
              <p className="ml-4 terminal-text-muted text-sm">
                Monitoring for new connections...
                <span className="terminal-cursor">█</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Contact