import { Terminal, FolderOpen, FileText, User, Mail, Github, Linkedin, LucideProps } from 'lucide-react'
import AppIcon from './AppIcon'
import { ForwardRefExoticComponent, Fragment, RefAttributes } from 'react'
import { useRouter } from 'next/navigation'

interface DesktopProps {
  onOpenWindow: (type: 'terminal' | 'projects' | 'resume' | 'about') => void
}

export default function Desktop({ onOpenWindow }: DesktopProps) {
  const router = useRouter()

  const apps: { id: string; name: string; icon: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>; color: string; action?: () => void; href?: string }[] = [
    { id: 'terminal', name: 'Terminal', icon: Terminal, color: 'text-green-400', action: () => onOpenWindow('terminal') },
    { id: 'projects', name: 'Projects', icon: FolderOpen, color: 'text-yellow-400', action: () => onOpenWindow('projects') },
    { id: 'resume', name: 'Resume', icon: FileText, color: 'text-blue-400', action: () => onOpenWindow('resume') },
    { id: 'about', name: 'About Me', icon: User, color: 'text-purple-400', action: () => onOpenWindow('about') },
    { id: 'email', name: 'Email', icon: Mail, color: 'text-red-400', href: 'mailto:baseergroot@gmail.com', action: () => window.open('mailto:baseergroot@gmail.com')  },
    { id: 'github', name: 'GitHub', icon: Github, color: 'text-gray-400', href: 'https://github.com/baseergroot', action: () => window.open('https://github.com/baseergroot', '_blank') },
    { id: 'linkedin', name: 'LinkedIn', icon: Linkedin, color: 'text-blue-500', href: 'https://linkedin.com/in/baseergroot', action: () => window.open('https://linkedin.com/in/baseergroot', '_blank') },
  ]

  // const handleAppClick = (id: string) => {
  //   switch (id) {
  //     case 'terminal':
  //       onOpenWindow('terminal')
  //       break
  //     case 'projects':
  //       onOpenWindow('projects')
  //       break
  //     case 'resume':
  //       onOpenWindow('resume')
  //       break
  //     case 'about':
  //       onOpenWindow('about')
  //       break
  //     case 'email':
  //       window.location.href = 'mailto:baseergroot@gmail.com'
  //       break
  //     case 'github':
  //       window.open('https://github.com/baseergroot', '_blank')
  //       break
  //     case 'linkedin':
  //       window.open('https://linkedin.com/in/baseergroot', '_blank')
  //       break
  //   }
  // }

  return (
    <div className="flex-1 p-8 grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-8 content-start relative">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      {/* Time & Greeting */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 ">
        <div className="text-3xl font-mono">
          {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </div>
        {/* <div className="text-gray-400">Welcome, visitor!</div> */}
      </div>

      {/* App Icons */}
      <section className="flex flex-wrap w-[90vw]">
        {apps.map((app: any) => {
          const icon = (
            <AppIcon
              key={app.id}
              icon={app.icon}
              name={app.name}
              color={app.color}
              onClick={app.action}
            />
          )

          // if (app.href) {
          //   return <a key={app.id} href={app.href} target="_blank" rel="noopener noreferrer">{icon}</a>
          // }

          return <Fragment key={app.id}>{icon}</Fragment>
        })}
      </section>

      {/* Welcome Message */}
      <div className="col-span-full mt-12">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-cyan-300">Baseer</span>
            <span className="text-gray-300"> Afridi</span>
          </h1>
          <p className="text-xl text-gray-400">Full-Stack Web Developer</p>
          {/* <p className="text-gray-500 mt-2">Double-click any icon to begin</p> */}
        </div>
      </div>
    </div>
  )
}