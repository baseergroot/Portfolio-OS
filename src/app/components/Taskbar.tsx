import { Home, Terminal, FolderOpen, FileText, User } from 'lucide-react'

interface TaskbarProps {
  windows: Array<{ id: string; title: string; minimized: boolean }>
  onOpenWindow: (type: 'terminal' | 'projects' | 'resume' | 'about') => void
  onMinimize: (id: string) => void
}

export default function Taskbar({ windows, onOpenWindow, onMinimize }: TaskbarProps) {
  const getIcon = (title: string) => {
    if (title.includes('Terminal')) return <Terminal size={20} />
    if (title.includes('Projects')) return <FolderOpen size={20} />
    if (title.includes('Resume')) return <FileText size={20} />
    if (title.includes('About')) return <User size={20} />
    return <Home size={20} />
  }

  return (
    <div className="bg-gray-800/90 backdrop-blur-sm border-t border-gray-700 px-4 flex items-center justify-between py-2">
      {/* Start Button */}
      <button 
        onClick={() => onOpenWindow('about')}
        className="px-4 py-2 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-lg flex items-center gap-2 hover:opacity-90 transition"
      >
        <span>🚀</span>
        <span className="font-medium">Start</span>
      </button>
      
      {/* App Shortcuts */}
      <div className="flex gap-1">
        <button onClick={() => onOpenWindow('terminal')} className="p-2 hover:bg-gray-700 rounded">
          <Terminal size={20} />
        </button>
        <button onClick={() => onOpenWindow('projects')} className="p-2 hover:bg-gray-700 rounded">
          <FolderOpen size={20} />
        </button>
        <button onClick={() => onOpenWindow('resume')} className="p-2 hover:bg-gray-700 rounded">
          <FileText size={20} />
        </button>
      </div>
      
      {/* Open Windows */}
      <div className="flex gap-2">
        {windows.map((window) => (
          <button
            key={window.id}
            onClick={() => onMinimize(window.id)}
            className={`px-3 py-2 rounded flex items-center gap-2 ${window.minimized ? 'bg-gray-700' : 'bg-cyan-900/30'}`}
          >
            {getIcon(window.title)}
            <span className="text-sm max-w-[120px] truncate">{window.title.split(' — ')[0]}</span>
          </button>
        ))}
      </div>
      
      {/* System Tray */}
      <div className="flex items-center gap-4">
        <div className="text-xs text-gray-400">
          {new Date().toLocaleDateString()}
        </div>
        <div className="w-6 h-6 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500"></div>
      </div>
    </div>
  )
}