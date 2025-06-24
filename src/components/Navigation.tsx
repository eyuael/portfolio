import { FiHome, FiUser, FiBriefcase, FiMail } from 'react-icons/fi'

interface NavigationProps {
  activeSection: string
  setActiveSection: (section: string) => void
}

const Navigation = ({ activeSection, setActiveSection }: NavigationProps) => {
  const commands = [
    { id: 'home', cmd: './home.sh', desc: 'Start here' },
    { id: 'about', cmd: './about.sh', desc: 'Who am I?' },
    { id: 'projects', cmd: './projects.sh', desc: 'My work' },
    { id: 'contact', cmd: './contact.sh', desc: 'Reach out' },
  ]

  return (
    <nav className="fixed top-4 left-4 z-50">
      <div className="terminal-window">
        <div className="terminal-header">
          <span>eyuael@portfolio:~$</span>
        </div>
        <div className="terminal-content">
          <div className="space-y-2">
            <div className="terminal-text-muted text-sm">Available commands:</div>
            {commands.map((cmd) => (
              <div key={cmd.id} className="flex items-center space-x-2">
                <button
                  onClick={() => setActiveSection(cmd.id)}
                  className={`terminal-button text-left ${
                    activeSection === cmd.id ? 'active' : ''
                  }`}
                >
                  {cmd.cmd}
                </button>
                <span className="terminal-text-muted text-sm">#{cmd.desc}</span>
              </div>
            ))}
          </div>
          <div className="mt-4 text-xs terminal-text-muted">
            <span className="terminal-prompt">$ </span>
            <span className="terminal-cursor">█</span>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation