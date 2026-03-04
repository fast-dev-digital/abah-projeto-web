import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import { useScrollSpy } from '@/hooks/useScrollSpy'
const navLinks = [
  { label: 'Início', href: '/#inicio' },
  { label: 'A Clínica', href: '/clinica' },
  { label: 'Modalidades', href: '/modalidades' },
  { label: 'Diferencial', href: '/diferencial' },
  { label: 'Equipe', href: '/#autoridade' },
  { label: 'Escolas', href: '/#escolas' },
  { label: 'Contato', href: '/#contato' },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  // Concatena pathname + hash para entender onde o usuário está exatamente
  const currentPath = location.pathname + location.hash

  const activeSection = useScrollSpy([
    'inicio',
    'clinica',
    'modalidades',
    'diferencial',
    'autoridade',
    'escolas',
    'contato',
  ])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-xl shadow-soft'
          : 'bg-transparent'
      }`}
    >
      <div className="container-abah flex items-center justify-between h-20">
        {/* Logo */}
        <Link to="/#inicio" className="flex items-center gap-3 group">
          <img src="/logo-ABAH.png" alt="Clínica ABAH Logo" className="h-14 md:h-16 w-auto object-contain scale-[1.2] md:scale-[1.4] origin-left transition-transform duration-300 group-hover:scale-[1.25] md:group-hover:scale-[1.45]" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => {
            const isSpecialPage = ['A Clínica', 'Modalidades', 'Diferencial'].includes(link.label)
            
            let isActive = link.href === currentPath || (currentPath === '/' && link.href === '/#inicio')
            if (location.pathname === '/' && activeSection) {
              if (link.href === `/${activeSection}` || link.href === `/#${activeSection}`) {
                isActive = true
              }
            }
            
            return (
              <Link
                key={link.href}
                to={link.href}
                className={`font-body text-sm transition-colors duration-300 relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:bg-abah-pink-300 after:transition-all after:duration-300 ${
                  isActive ? 'after:w-full font-bold' : 'after:w-0 hover:after:w-full font-medium'
                } ${
                  isSpecialPage 
                    ? 'text-transparent bg-clip-text bg-gradient-to-r from-abah-pink-400 to-abah-blue-400 drop-shadow-sm hover:from-abah-pink-500 hover:to-abah-blue-500' : 
                  isActive 
                    ? 'text-abah-gray-800' 
                    : 'text-abah-gray-500 hover:text-abah-gray-800'
                }`}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>

        {/* CTA Desktop */}
        <Link
          to="/#contato"
          className="hidden lg:flex items-center gap-2 bg-abah-green-300 hover:bg-abah-green-400 text-white font-heading font-semibold text-sm px-6 py-2.5 rounded-full transition-all duration-300 hover:shadow-card"
        >
          <Phone size={16} />
          Agendar Consulta
        </Link>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 text-abah-gray-600 hover:text-abah-gray-800 transition-colors"
          aria-label="Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-abah-gray-100 overflow-hidden"
          >
            <nav className="container-abah py-6 flex flex-col gap-2">
              {navLinks.map((link, i) => {
                const isSpecialPage = ['A Clínica', 'Modalidades', 'Diferencial'].includes(link.label)
                
                let isActive = link.href === currentPath || (currentPath === '/' && link.href === '/#inicio')
                if (location.pathname === '/' && activeSection) {
                  if (link.href === `/${activeSection}` || link.href === `/#${activeSection}`) {
                    isActive = true
                  }
                }

                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="last:border-0"
                  >
                    <Link
                      to={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`block font-body text-base py-3 px-4 rounded-xl transition-all duration-300 ${
                        isActive ? 'bg-abah-pink-50/70' : 'hover:bg-abah-gray-50'
                      } ${
                        isSpecialPage 
                          ? 'font-bold text-transparent bg-clip-text bg-gradient-to-r from-abah-pink-400 to-abah-blue-400' : 
                        isActive 
                          ? 'font-bold text-abah-gray-800' 
                          : 'font-medium text-abah-gray-600'
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                )
              })}
              <Link
                to="/#contato"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 bg-abah-green-300 text-white font-heading font-semibold text-sm px-6 py-4 rounded-xl mt-4"
              >
                <Phone size={16} />
                Agendar Consulta
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
