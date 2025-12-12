"use client"
import { LayoutGrid, Terminal, FolderOpen, FileText, User, Mail, Github, Linkedin } from 'lucide-react'
import { useEffect, useState } from 'react'


const MenuBtn = ({ onOpenWindow, windows, onMinimize }: { onOpenWindow: (type: 'terminal' | 'projects' | 'resume' | 'about') => void, windows: Array<{ id: string; title: string; minimized: boolean }>, onMinimize: (id: string) => void}) => {
  const [showMenu, setShowMenu] = useState(false)

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
                onClick={() => onOpenWindow('terminal')}>
                  <Terminal size={18} className="text-green-400" />
                <span>Terminal</span>
                </button>
                
              </li>
              <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer flex items-center gap-3">
                <FolderOpen size={18} className="text-yellow-400" />
                <span>Projects</span>
              </li>
              <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer flex items-center gap-3">
                <FileText size={18} className="text-blue-400" />
                <span>Resume</span>
              </li>
              <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer flex items-center gap-3">
                <User size={18} className="text-purple-400" />
                <span>About Me</span>
              </li>
              <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer flex items-center gap-3">
                <Mail size={18} className="text-red-400" />
                <span>Email</span>
              </li>
              <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer flex items-center gap-3">
                <Github size={18} className="text-gray-300" />
                <span>GitHub</span>
              </li>
              <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer flex items-center gap-3">
                <Linkedin size={18} className="text-blue-500" />
                <span>LinkedIn</span>
              </li>
            </ul>
          </div>
        )
      }
    </>

  )
}

export default MenuBtn