import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    // Se a rota não tiver um hash (ex: #contato), rola para o topo
    if (!hash) {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      })
    } else {
      // Se houver hash, tenta rolar suavemente até o elemento após um pequeno delay
      // para garantir que a página renderizou (útil ao mudar de página para uma âncora)
      setTimeout(() => {
        const id = hash.replace('#', '')
        const element = document.getElementById(id)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100)
    }
  }, [pathname, hash])

  return null
}
