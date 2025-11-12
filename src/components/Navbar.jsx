import { useState } from 'react'
import { Menu, X, Gamepad2 } from 'lucide-react'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Games', href: '#games' },
  { label: 'About', href: '#about' },
  { label: 'Resume', href: '#resume' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-white/30">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 font-extrabold text-gray-900 tracking-tight">
          <Gamepad2 className="w-6 h-6 text-red-500" />
          <span>Dev Portfolio</span>
        </a>
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-sm font-semibold text-gray-800 hover:text-red-500 transition-colors">
              {item.label}
            </a>
          ))}
          <a href="#contact" className="bg-red-500 hover:bg-red-600 text-white text-sm font-semibold px-4 py-2 rounded-md shadow">
            Get in touch
          </a>
        </nav>
        <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded hover:bg-black/5">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-white/30 bg-white/80">
          <div className="max-w-6xl mx-auto px-4 py-4 grid gap-3">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="text-sm font-semibold text-gray-800 hover:text-red-500">
                {item.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="bg-red-500 hover:bg-red-600 text-white text-sm font-semibold px-4 py-2 rounded-md w-max">
              Get in touch
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
