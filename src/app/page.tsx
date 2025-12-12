'use client'

import { useState } from 'react'
import Desktop from './components/Desktop'
import Window from './components/Window'
import Taskbar from './components/Taskbar'

export default function Home() {
  const [windows, setWindows] = useState<Array<{
    id: string
    title: string
    type: 'terminal' | 'projects' | 'resume' | 'about'
    minimized: boolean
    position: { x: number; y: number }
  }>>([])

  const openWindow = (type: 'terminal' | 'projects' | 'resume' | 'about'):void => {
    const newWindow = {
      id: `${type}-${Date.now()}`,
      title: getWindowTitle(type),
      type,
      minimized: false,
      position: { x: 100 + windows.length * 30, y: 50 + windows.length * 30 }
    }
    setWindows([...windows, newWindow])
  }

  const closeWindow = (id: string) => {
    setWindows(windows.filter(w => w.id !== id))
  }

  const minimizeWindow = (id: string) => {
    setWindows(windows.map(w => 
      w.id === id ? { ...w, minimized: !w.minimized } : w
    ))
  }

  const getWindowTitle = (type: string) => {
    switch(type) {
      case 'terminal': return 'bash — Terminal'
      case 'projects': return 'Projects Explorer'
      case 'resume': return 'resume.pdf — PDF Viewer'
      case 'about': return 'About Me'
      default: return 'Window'
    }
  }

  return (
    <div className="h-svh flex flex-col bg-gradient-to-br from-gray-900 to-gray-800 overflow-hidden">
      {/* Desktop with Icons */}
      <Desktop onOpenWindow={openWindow} />
      
      {/* Open Windows */}
      {windows.map((window) => (
        <Window
          key={window.id}
          id={window.id}
          title={window.title}
          position={window.position}
          onClose={() => closeWindow(window.id)}
          onMinimize={() => minimizeWindow(window.id)}
          minimized={window.minimized}
        >
          {window.type === 'terminal' && <TerminalContent />}
          {window.type === 'projects' && <ProjectsContent />}
          {window.type === 'resume' && <ResumeContent />}
          {window.type === 'about' && <AboutContent />}
        </Window>
      ))}
      
      {/* Taskbar */}
      <Taskbar 
        windows={windows}
        onOpenWindow={openWindow}
        onMinimize={minimizeWindow}
      />
    </div>
  )
}


// Content Components
const TerminalContent = () => (
  <div className="p-4 font-mono bg-black h-full overflow-auto">
    <div className="text-green-400">$ whoami</div>
    <div className="mb-2">baser-afridi@portfolio:~$</div>
    
    <div className="text-green-400">$ skills</div>
    <div className="grid grid-cols-2 gap-2 mt-2">
      <span className="text-cyan-300">• Next.js</span>
      <span className="text-cyan-300">• React</span>
      <span className="text-cyan-300">• TypeScript</span>
      <span className="text-cyan-300">• Tailwind CSS</span>
      <span className="text-cyan-300">• MongoDB</span>
      <span className="text-cyan-300">• Node.js</span>
      <span className="text-cyan-300">• Express.js</span>
      <span className="text-cyan-300">• Git</span>
      <span className="text-cyan-300">• Github</span>

      <span className="text-cyan-300">• Vercel</span>
      <span className="text-cyan-300">• Shopify</span>
      <span className="text-cyan-300">• Stripe</span>
      <span className="text-cyan-300">• Cloudinary</span>
      <span className="text-cyan-300">• GraphQL (Query Basic)</span>
      <span className="text-cyan-300">• MongoDB (Mongoose)</span>
      <span className="text-cyan-300">• PostgreSQL (Prisma)</span>
      <span className="text-cyan-300">• Prisma</span>
      <span className="text-cyan-300">• Linux</span>
      <span className="text-cyan-300">• Better Auth</span>

    </div>
    
    <div className="text-green-400 mt-4">$ cat experience.txt</div>
    <pre className="text-sm mt-2">
{`Full-Stack Developer (2023-Present)
• Built production web apps with React/Next.js
• Integrated Shopify, Stripe, Cloudinary APIs
• Deployed on Vercel with 99.9% uptime`}
    </pre>
    
    <div className="text-green-400 mt-4">$ projects --list</div>
    <div className="mt-2">
      <div>1. Nextgram — Social Media Platform</div>
      <div>2. Headless E-commerce Store</div>
      <div>3. Grootly — URL Shortner </div>
    </div>
    
    {/* <div className="mt-4">
      <div className="text-green-400"> <span className="text-gray-400">Type "help" for commands</span></div>
    </div> */}
  </div>
)

const ProjectsContent = () => (
  <div className="p-6">
    <h2 className="text-2xl font-bold mb-6">My Projects</h2>
    
    <div className="space-y-6">
      <div className="border border-gray-700 rounded-lg p-4 hover:border-cyan-500 transition">
        <h3 className="text-xl font-bold text-cyan-300">Nextgram</h3>
        <p className="text-gray-300 mt-2">Full-stack social media platform inspired by Instagram</p>
        <div className="flex flex-wrap gap-2 mt-3">
          <span className="px-3 py-1 bg-gray-800 rounded-full text-sm">Next.js</span>
          <span className="px-3 py-1 bg-gray-800 rounded-full text-sm">MongoDB</span>
          <span className="px-3 py-1 bg-gray-800 rounded-full text-sm">Cloudinary</span>
          <span className="px-3 py-1 bg-gray-800 rounded-full text-sm">Tailwind</span>
        </div>
        <a href="https://nextgram-dev.vercel.app" target='blank'>
          <button className="mt-4 px-4 py-2 bg-cyan-600 hover:bg-cyan-700 rounded">
          View Live Demo
        </button>
        </a>
      </div>
      
      <div className="border border-gray-700 rounded-lg p-4 hover:border-green-500 transition">
        <h3 className="text-xl font-bold text-green-300">E-commerce Store</h3>
        <p className="text-gray-300 mt-2">Headless e-commerce with Shopify & Next.js</p>
        <div className="flex flex-wrap gap-2 mt-3">
          <span className="px-3 py-1 bg-gray-800 rounded-full text-sm">Next.js</span>
          <span className="px-3 py-1 bg-gray-800 rounded-full text-sm">Shopify API</span>
          <span className="px-3 py-1 bg-gray-800 rounded-full text-sm">GraphQL</span>
        </div>
        <a href="https://shopify-headless-app.vercel.app" target='blank'>
          <button className="mt-4 px-4 py-2 bg-green-600 hover:bg-green-700 rounded">
          View Live Demo
        </button>
        </a>
      </div>

      <div className="border border-gray-700 rounded-lg p-4 hover:border-blue-500 transition">
        <h3 className="text-xl font-bold text-blue-300">Grootly</h3>
        <p className="text-gray-300 mt-2">URL Shortner</p>
        <div className="flex flex-wrap gap-2 mt-3">
          <span className="px-3 py-1 bg-gray-800 rounded-full text-sm">Next.js</span>
          <span className="px-3 py-1 bg-gray-800 rounded-full text-sm">Tailwind</span>
          <span className="px-3 py-1 bg-gray-800 rounded-full text-sm">MongoDB</span>
        </div>
        <a href="https://grtly.vercel.app" target='blank'>
          <button className="mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded">
          View Live Demo
        </button>
        </a>
      </div>
    </div>
  </div>
)

const ResumeContent = () => (
  <div className="p-6">
    <div className="flex justify-between items-center mb-6">
      <h2 className="text-2xl font-bold">Resume</h2>
      {/* <a 
        href="/resume.pdf" 
        className="px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded flex items-center gap-2"
        download
      >
        📥 Download PDF
      </a> */}
    </div>
    
    <div className="grid md:grid-cols-2 gap-6">
      {/* Left Column */}
      <div>
        <h3 className="text-xl font-bold text-cyan-300 mb-4">Contact</h3>
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <span className="text-gray-400">📧</span>
            <span>baseergroot@gmail.com</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-gray-400">📱</span>
            <span>+92 300 9357066</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-gray-400">📍</span>
            <span>Peshawar, Pakistan</span>
          </div>
        </div>
        
        <h3 className="text-xl font-bold text-cyan-300 mt-6 mb-4">Skills</h3>
        <div className="grid grid-cols-2 gap-2">
          {['Next.js', 'React', 'TypeScript', 'Tailwind', 'MongoDB', 'Node.js', 'Git', 'Vercel', 'Stripe', 'Cloudinary', 'GraphQL (Query Basic)', 'MongoDB (Mongoose)', 'Mongoose', 'Prisma', 'PostgreSQL', 'Linux', 'Better Auth'].map(skill => (
            <div key={skill} className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>{skill}</span>
            </div>
          ))}
        </div>
      </div>
      
      {/* Right Column */}
      <div>
        <h3 className="text-xl font-bold text-cyan-300 mb-4">Experience</h3>
        <div className="space-y-4">
          <div className="border-l-2 border-cyan-500 pl-4">
            <h4 className="font-bold">Full-Stack Developer</h4>
            <p className="text-gray-400 text-sm">2023 — Present</p>
            <p className="text-gray-300 mt-1">Self-taught, building production web applications</p>
          </div>
        </div>
        
        <h3 className="text-xl font-bold text-cyan-300 mt-6 mb-4">Projects</h3>
        <div className="space-y-3">
          <div>
            <h4 className="font-bold">Nextgram</h4>
            <p className="text-gray-300 text-sm">Social media platform with 100+ test users</p>
          </div>
          <div>
            <h4 className="font-bold">Headless E-commerce</h4>
            <p className="text-gray-300 text-sm">Shopify + Next.js store with real products</p>
          </div>
          <div>
            <h4 className="font-bold">Grootly</h4>
            <p className="text-gray-300 text-sm">URL Shortner with JWT basede authentication</p>
          </div>
        </div>
      </div>
    </div>
  </div>
)

const AboutContent = () => (
  <div className="p-6">
    <h2 className="text-2xl font-bold mb-4">About Me</h2>
    <div className="space-y-4">
      <p className="text-gray-300">
        Self-taught full-stack developer from Pakistan with 2+ years of hands-on experience building web applications.
      </p>
      <p className="text-gray-300">
        I specialize in modern React/Next.js ecosystem, focusing on performance, clean code, and real-world results.
      </p>
      <p className="text-gray-300">
        {"When I'm not coding, I'm learning new technologies, or building side projects."}
      </p>
    </div>
    
    <div className="mt-8">
      <h3 className="text-xl font-bold mb-4">Get In Touch</h3>
      <div className="flex gap-4">
        <button className="px-6 py-3 bg-[#0A66C2] hover:bg-[#004182] rounded-lg flex items-center gap-2">
          LinkedIn
        </button>
        <a href="https://github.com/baseergroot" target='blank'>
          <button className="px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center gap-2">
             Github
        </button>
        </a>
      </div>
    </div>
  </div>
)


