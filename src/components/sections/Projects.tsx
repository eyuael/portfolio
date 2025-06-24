// src/sections/Projects.tsx
import { motion } from 'framer-motion'

const Projects = () => {
  const projects = [
    {
      name: 'sourced-it',
      description: 'A mobile app that allows you to source the best deals on vinted',
      tech: ['TypeScript', 'React Native', 'Expo', 'Cloudflare Workers'],
      status: 'Active',
      lastCommit: '2 days ago',
      link: '',
      github: ''
    },
    {
      name: 'portfolio-terminal',
      description: 'Interactive terminal-themed portfolio website',
      tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      status: 'Active',
      lastCommit: 'just now',
      link: '',
      github: ''
    },
    {
      name: 'web-scraper-api',
      description: 'High-performance web scraping API with rate limiting',
      tech: ['Node.js', 'Express', 'Puppeteer', 'Redis'],
      status: 'Maintained',
      lastCommit: '1 week ago',
      link: '',
      github: ''
    }
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="absolute inset-0 flex items-center justify-center p-4"
    >
      <div className="terminal-window max-w-6xl w-full">
        <div className="terminal-header">
          <span>eyuael@portfolio:~$ ls -la ~/projects/ && git status</span>
        </div>
        <div className="terminal-content terminal-scrollbar max-h-96 overflow-y-auto">
          <div className="space-y-6">
            <div>
              <p className="terminal-prompt">$ find ~/projects -type d -name "*.git" | wc -l</p>
              <p className="ml-4 terminal-text">{projects.length} repositories found</p>
            </div>

            <div>
              <p className="terminal-prompt">$ ls -la ~/projects/</p>
              <div className="ml-4 font-mono text-sm space-y-1">
                <p className="terminal-text-muted">total {projects.length * 4}</p>
                {projects.map((project, index) => (
                  <motion.div
                    key={project.name}
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <p className="terminal-text">
                      drwxr-xr-x 8 eyuael dev 4096 Dec 19 2024 {project.name}/
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {projects.map((project, index) => (
              <motion.div
                key={project.name}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: (index + 1) * 0.2 }}
                className="border-l-2 border-green-400 pl-4 space-y-2"
              >
                <div>
                  <p className="terminal-prompt">$ cd ~/projects/{project.name} && cat README.md</p>
                  <div className="ml-4 space-y-1">
                    <p className="terminal-text text-lg font-bold"># {project.name}</p>
                    <p className="terminal-text-secondary">{project.description}</p>
                  </div>
                </div>

                <div>
                  <p className="terminal-prompt">$ cat package.json | grep dependencies -A5</p>
                  <div className="ml-4 terminal-text-muted text-sm">
                    <p>"dependencies": &#123;</p>
                    {project.tech.map((tech, i) => (
                      <p key={i}>  "{tech.toLowerCase()}": "^latest",</p>
                    ))}
                    <p>&#125;</p>
                  </div>
                </div>

                <div>
                  <p className="terminal-prompt">$ git log --oneline -n 1</p>
                  <p className="ml-4 terminal-text">
                    <span className="terminal-warning">a1b2c3d</span> Latest updates - {project.lastCommit}
                  </p>
                </div>

                <div>
                  <p className="terminal-prompt">$ git status</p>
                  <div className="ml-4 terminal-text">
                    <p>On branch main</p>
                    <p>Your branch is up to date with 'origin/main'.</p>
                    <p>
                      Status: <span className={`${project.status === 'Active' ? 'terminal-success' : 'terminal-text-secondary'}`}>
                        {project.status}
                      </span>
                    </p>
                  </div>
                </div>

                <div className="flex space-x-4 text-sm">
                  <p className="terminal-prompt">$ ./deploy.sh</p>
                  {project.link && (
                    <button className="terminal-button">
                      <span className="terminal-link">View Live Demo</span>
                    </button>
                  )}
                  {project.github && (
                    <button className="terminal-button">
                      <span className="terminal-link">View Source Code</span>
                    </button>
                  )}
                </div>

                {index < projects.length - 1 && (
                  <div className="border-t border-green-400 opacity-30 mt-4 pt-4"></div>
                )}
              </motion.div>
            ))}

            <div>
              <p className="terminal-prompt">$ echo "More projects coming soon..." &gt; future.txt</p>
              <p className="ml-4 terminal-text-muted">
                Stay tuned for more innovative projects!
                <span className="terminal-cursor">█</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Projects