"use client"
import { LayoutGrid, Terminal, FolderOpen, FileText, User, Mail, Github, Linkedin } from 'lucide-react'
import { useEffect, useState } from 'react'


const MenuBtn = ({ openWindow, windows, onMinimize }: { openWindow: (type: 'terminal' | 'projects' | 'resume' | 'about') => void, windows: Array<{ id: string; title: string; minimized: boolean }>, onMinimize: (id: string) => void}) => {
  const [showMenu, setShowMenu] = useState(false)
  // console.log('func:', openWindow);

  useEffect(() => {
    const handleClickOutside = () => {
      setShowMenu(false)
    }

    if (showMenu) {
      // Add click listener when menu is open
      document.addEventListener('click', handleClickOutside)
    }

    // Clean up
    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [showMenu])
  return (
    <>
      <button
        onClick={() => setShowMenu(!showMenu)}
        className="px-4 py-2 bg-gray-700  rounded-lg flex items-center gap-2 hover:opacity-90 transition"
      >
        <span className="font-medium">
          <LayoutGrid />
        </span>
      </button>

      {
        showMenu && (
          <div className="absolute bottom-15 left-1 bg-gray-800 border border-gray-700 rounded shadow-lg w-48">
            <ul>

              <li className='px-4 py-2 hover:bg-gray-700 cursor-pointer'>
                <button className=" flex items-center gap-3" 
                onClick={() => openWindow('terminal')}>
                  <Terminal size={18} className="text-green-400" />
                <span>Terminal</span>
                </button>
              </li>

              <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">
                <button className=" flex items-center gap-3" 
                onClick={() => openWindow('projects')}>
                  <FolderOpen size={18} className="text-yellow-400" />
                <span>Projects</span>
                </button>
              </li>

              <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer flex items-center gap-3">
                <button className=" flex items-center gap-3" 
                onClick={() => openWindow('resume')}>
                  <FileText size={18} className="text-blue-400" />
                <span>Resume</span>
                </button>
              </li>

              <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer flex items-center gap-3">
                <button className=" flex items-center gap-3" 
                onClick={() => openWindow('about')}>
                  <User size={18} className="text-purple-400" />
                <span>About Me</span>
                </button>
              </li>
              
              <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer ">
                <a href="mailto:baseergroot@gmail.com" className='flex items-center gap-3'>
                  <Mail size={18} className="text-red-400" />
                <span>Email</span>
                </a>
              </li>

              <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer ">
                <a href="https://github.com/baseergroot" className='flex items-center gap-3' target="_blank" rel="noopener noreferrer"> 
                  <Github size={18} className="text-gray-300" />
                <span>GitHub</span>
                </a>
              </li>

              <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer ">
                <a href="https://www.linkedin.com/in/baseer-afridi-3b1169363" className='flex items-center gap-3' target="_blank" rel="noopener noreferrer">
                  <Linkedin size={18} className="text-blue-500" />
                <span>LinkedIn</span>
                </a>
                {/* https://www.linkedin.com/in/baseer-afridi-3b1169363 */}
              </li>
            </ul>
          </div>
        )
      }
    </>

  )
}

export default MenuBtn