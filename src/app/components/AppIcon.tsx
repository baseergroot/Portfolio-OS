import { LucideIcon } from 'lucide-react'
import { useState } from 'react'

interface AppIconProps {
  icon: LucideIcon
  name: string
  color: string
  onClick: () => void
}

export default function AppIcon({ icon: Icon, name, color, onClick }: AppIconProps) {
  const [isClicked, setIsClicked] = useState(false)

  const handleClick = () => {
    setIsClicked(true)
    setTimeout(() => setIsClicked(false), 200)
    onClick()
  }

  return (
    <button
      onClick={handleClick}
      className="flex flex-col items-center mx-auto gap-2 w-24 group focus:outline-none"
      onDoubleClick={handleClick}
    >
      <div className={`relative ${isClicked ? 'scale-90' : 'group-hover:scale-110'} transition-transform duration-200`}>
        <div className="absolute inset-0 bg-white/10 rounded-xl blur-md opacity-0 group-hover:opacity-100 transition-opacity"></div>
        <div className={`p-4 rounded-xl bg-gray-800/50 border border-gray-700 relative ${color} backdrop-blur-sm`}>
          <Icon size={32} />
        </div>
      </div>
      <span className="text-sm text-gray-300 group-hover:text-white transition-colors">
        {name}
      </span>
      <div className="w-1 h-1 rounded-full bg-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
    </button>
  )
}