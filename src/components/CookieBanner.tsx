import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Info, X } from 'lucide-react'

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Verifica se o usuário já aceitou os cookies anteriormente
    const hasAccepted = localStorage.getItem('abah_cookies_accepted')
    if (!hasAccepted) {
      // Damos um pequeno delay para não aparecer abruptamente no load da página
      const timer = setTimeout(() => setIsVisible(true), 1500)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('abah_cookies_accepted', 'true')
    setIsVisible(false)
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 260, damping: 20 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
        >
          {/* Main Banner Container */}
          <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-elevated border border-abah-gray-100 p-5 md:p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-5 relative overflow-hidden">
            {/* Subtle gradient accent for aesthetic touch */}
            <div className="absolute top-0 left-0 w-2 h-full bg-abah-green-400" />
            <div className="absolute top-0 right-0 w-64 h-64 bg-abah-green-50 rounded-full blur-3xl opacity-50 mix-blend-multiply pointer-events-none" />

            {/* Content Area */}
            <div className="flex items-start md:items-center gap-4 relative z-10 flex-1">
              <div className="w-10 h-10 rounded-full bg-abah-green-50 flex items-center justify-center shrink-0 hidden md:flex">
                <Info size={20} className="text-abah-green-500" />
              </div>
              <div>
                <h4 className="font-heading font-semibold text-abah-gray-800 text-sm md:text-base mb-1">
                  Respeitamos sua privacidade
                </h4>
                <p className="text-abah-gray-500 text-xs md:text-sm leading-relaxed max-w-3xl">
                  Utilizamos cookies essenciais para oferecer a melhor experiência em nosso site. Ao continuar navegando, você concorda com a nossa política e o uso destas tecnologias.
                </p>
              </div>
            </div>

            {/* Actions Area */}
            <div className="flex items-center gap-3 w-full md:w-auto relative z-10">
              <button
                onClick={() => setIsVisible(false)}
                className="w-10 h-10 flex items-center justify-center rounded-xl bg-abah-gray-50 text-abah-gray-500 hover:bg-abah-gray-100 hover:text-abah-gray-700 transition-colors shrink-0 md:hidden absolute top-0 right-0"
                aria-label="Fechar banner"
              >
                <X size={18} />
              </button>
              
              <button
                onClick={handleAccept}
                className="flex-1 md:flex-none whitespace-nowrap px-6 py-2.5 bg-abah-green-400 hover:bg-abah-green-500 text-white font-heading font-semibold text-sm rounded-xl transition-all duration-300 hover:shadow-md cursor-pointer"
              >
                Aceitar Cookies
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
