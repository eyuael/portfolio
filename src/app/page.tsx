'use client'

import { useState } from 'react'
import Scene from '../components/3d/scene'
import Home from '../components/sections/Home'
import Navigation from '../components/Navigation'
import Projects from '../components/sections/Projects'
import About from '../components/sections/About'
import Contact from '../components/sections/Contact'

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home')

  return (
    <div className="h-screen w-screen relative">
      <Scene />
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      
      {activeSection === 'home' && <Home />}
      {activeSection === 'projects' && <Projects />}
      {activeSection === 'about' && <About />}
      {activeSection === 'contact' && <Contact />}
    </div>
  )
}

export default Portfolio