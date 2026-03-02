import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export function useScrollSpy(sectionIds: string[], offset: number = 0) {
    const [activeId, setActiveId] = useState<string>('')
    const location = useLocation()

    useEffect(() => {
        // Apenas aplica o spy na página inicial
        if (location.pathname !== '/') {
            setActiveId('')
            return
        }

        const handleIntersect = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const id = entry.target.id
                    setActiveId(id)
                    // Atualiza a URL silenciosamente sem adicionar ao histórico do navegador
                    window.history.replaceState(null, '', `/#${id}`)
                }
            })
        }

        const observer = new IntersectionObserver(handleIntersect, {
            // Dispara quando o elemento atinge 40% do topo da tela
            rootMargin: `-${offset > 0 ? offset : 40}% 0px -40% 0px`
        })

        // Adiciona um pequeno delay para garantir que os elementos foram renderizados
        const timeoutId = setTimeout(() => {
            sectionIds.forEach((id) => {
                const el = document.getElementById(id)
                if (el) observer.observe(el)
            })
        }, 100)

        return () => {
            clearTimeout(timeoutId)
            observer.disconnect()
        }
    }, [location.pathname, sectionIds, offset])

    return activeId
}
