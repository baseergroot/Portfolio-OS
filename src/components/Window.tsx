'use client'

import { useEffect, useState } from 'react'
import { X, Minus, Square } from 'lucide-react'

interface WindowProps {
  id: string
  title: string
  children: React.ReactNode
  position: { x: number; y: number }
  onClose: () => void
  onMinimize: () => void
  minimized: boolean
}

export default function Window({ 
  id, title, children, position = { x: 0, y: 0 }, onClose, onMinimize, minimized 
}: WindowProps) {
  const [isDragging, setIsDragging] = useState(false)
  const [offset, setOffset] = useState({ x: 0, y: 0 })
  const [currentPosition, setCurrentPosition] = useState(position)

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true)
    setOffset({
      x: e.clientX - currentPosition.x,
      y: e.clientY - currentPosition.y
    })
  }

  const handleMouseMove = (e: MouseEvent) => {
    if (isDragging) {
      setCurrentPosition({
        x: e.clientX - offset.x,
        y: e.clientY - offset.y
      })
    }
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove)
      document.addEventListener('mouseup', handleMouseUp)
      return () => {
        document.removeEventListener('mousemove', handleMouseMove)
        document.removeEventListener('mouseup', handleMouseUp)
      }
    }
  }, [isDragging])

  if (minimized) return null

  return (
    <div
      className="absolute border border-gray-700 rounded-lg shadow-2xl overflow-hidden flex flex-col bg-gray-900 w-[350px] md:w-[700px] h-[500px]"
      style={{
        left: `${currentPosition.x}px`,
        top: `${currentPosition.y}px`,
        // width: '600px',
        // height: '500px',
        zIndex: 50
      }}
    >
      {/* Window Title Bar */}
      <div 
        className="bg-gray-800 px-4 py-3 flex items-center justify-between cursor-move select-none"
        onMouseDown={handleMouseDown}
      >
        <div className="flex items-center gap-3">
          {/* <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-400 cursor-pointer" onClick={onClose}></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-400 cursor-pointer" onClick={onMinimize}></div>
            <div className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-400"></div>
          </div> */}
          <span className="text-sm font-medium ml-2">{title}</span>
        </div>
        
        <div className="flex items-center gap-2">
          <button onClick={onMinimize} className="p-1 hover:bg-gray-700 rounded">
            <Minus size={16} />
          </button>
          <button onClick={onClose} className="p-1 hover:bg-gray-700 rounded">
            <X size={16} />
          </button>
        </div>
      </div>
      
      {/* Window Content */}
      <div className="flex-1 overflow-auto">
        {children}
      </div>
    </div>
  )
}