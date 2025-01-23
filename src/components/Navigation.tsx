import { FiHome, FiUser, FiBriefcase, FiMail } from 'react-icons/fi'

interface NavigationProps {
  activeSection: string
  setActiveSection: (section: string) => void
}

const Navigation = ({ activeSection, setActiveSection }: NavigationProps) => {
  return (
    <nav className="fixed top-1/2 right-8 transform -translate-y-1/2 z-50">
      <div className="flex flex-col space-y-4">
        {[
          { id: 'home', icon: <FiHome /> },
          { id: 'projects', icon: <FiBriefcase /> },
          { id: 'about', icon: <FiUser /> },
          { id: 'contact', icon: <FiMail /> },
        ].map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveSection(item.id)}
            className={`p-3 rounded-full transition-colors ${
              activeSection === item.id
                ? 'bg-secondary text-white'
                : 'bg-gray-800 hover:bg-gray-700 text-gray-300'
            }`}
          >
            {item.icon}
          </button>
        ))}
      </div>
    </nav>
  )
}

export default Navigation