import { motion } from 'framer-motion'

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="absolute inset-0 flex items-center justify-center p-4"
    >
      <div className="terminal-window max-w-5xl w-full">
        <div className="terminal-header">
          <span>eyuael@portfolio:~$ ./about.sh --verbose</span>
        </div>
        <div className="terminal-content terminal-scrollbar max-h-96 overflow-y-auto">
          <div className="space-y-4">
            <div>
              <p className="terminal-prompt">$ cat /etc/developer-info</p>
              <div className="ml-4 terminal-text">
                <p>Name: Eyuael Berhe</p>
                <p>Role: Full Stack Developer</p>
                <p>Experience: 3+ years</p>
                <p>Location: London, UK</p>
                <p>Status: Available for opportunities</p>
              </div>
            </div>

            <div>
              <p className="terminal-prompt">$ cat README.md</p>
              <div className="ml-4 terminal-text-secondary">
                <p>## About Me</p>
                <p>I'm a full-stack developer with 3+ years of experience creating</p>
                <p>digital experiences. Specializing in modern web technologies and</p>
                <p>mobile applications.</p>
                <p></p>
                <p>Currently focused on building immersive web experiences using</p>
                <p>cutting-edge technologies like React Native.</p>
              </div>
            </div>

            <div>
              <p className="terminal-prompt">$ ls -la /skills/</p>
              <div className="ml-4 font-mono text-sm">
                <p className="terminal-text-muted">total 24</p>
                <p className="terminal-text">drwxr-xr-x  6 eyuael dev 4096 Dec 2024 frontend/</p>
                <p className="terminal-text">drwxr-xr-x  5 eyuael dev 4096 Dec 2024 backend/</p>
                <p className="terminal-text">drwxr-xr-x  4 eyuael dev 4096 Dec 2024 devops/</p>
                <p className="terminal-text">drwxr-xr-x  3 eyuael dev 4096 Dec 2024 tools/</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="terminal-prompt">$ cat /skills/frontend/manifest.json</p>
                <div className="ml-4 terminal-text-secondary text-sm">
                  <p>&#123;</p>
                  <p>  "frameworks": [</p>
                  <p>    "React",</p>
                  <p>    "Next.js",</p>
                  <p>    "React Native"</p>
                  <p>    "Expo"</p>
                  <p>  ],</p>
                  <p>  "languages": [</p>
                  <p>    "TypeScript",</p>
                  <p>    "JavaScript",</p>
                  <p>    "HTML5",</p>
                  <p>    "CSS3"</p>
                  <p>  ],</p>
                  <p>  "tools": [</p>
                  <p>    "TailwindCSS",</p>
                  <p>    "Framer Motion",</p>
                  <p>    "Expo",</p>
                  <p>    "React Native",</p>
                  <p>    "React",</p>
                  <p>    "Next.js",</p>
                  <p>  ]</p>
                  <p>&#125;</p>
                </div>
              </div>

              <div>
                <p className="terminal-prompt">$ cat /skills/backend/config.yml</p>
                <div className="ml-4 terminal-text-secondary text-sm">
                  <p>runtime:</p>
                  <p>  - Node.js</p>
                  <p>  - Python</p>
                  <p>  - Java</p>
                  <p>  - C#</p>
                  <p></p>
                  <p>databases:</p>
                  <p>  - PostgreSQL</p>
                  <p>  - MySQL</p>
                  <p>  - Redis</p>
                  <p>  - SQLite</p>
                  <p></p>
                  <p>apis:</p>
                  <p>  - REST</p>
                  <p>  - Server Sent Events</p>
                  <p>  - WebSockets</p>
                </div>
              </div>
            </div>

            <div>
              <p className="terminal-prompt">$ systemctl status devops-tools</p>
              <div className="ml-4 terminal-text">
                <p>● devops-tools.service - Development Operations Tools</p>
                <p>   Loaded: loaded (/etc/systemd/system/devops-tools.service)</p>
                <p>   Active: <span className="terminal-success">active (running)</span></p>
                <p></p>
                <p className="terminal-text-muted">Process: AWS, Docker, Git, GitHub Actions, Cloudflare, GCP, Vercel</p>
              </div>
            </div>

            <div>
              <p className="terminal-prompt">$ tail -f /var/log/passion.log</p>
              <div className="ml-4 terminal-text-muted text-sm">
                <p>[2024-12-19] Building innovative web experiences...</p>
                <p>[2024-12-19] Solving complex problems with elegant solutions...</p>
                <p>[2024-12-19] Continuously learning and adapting to new technologies...</p>
                <p>[2024-12-19] Collaborating with teams to deliver exceptional results...</p>
                <p className="terminal-cursor">█</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default About