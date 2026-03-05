import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Award, BookOpen, Building2, Star, Linkedin } from 'lucide-react'

const credentials = [
  { icon: Award, label: 'Especialistas Qualificados' },
  { icon: Building2, label: 'Abordagem Multidisciplinar' },
  { icon: BookOpen, label: 'Intervenção com Evidência' },
  { icon: Star, label: 'Referência Regional' },
]

export default function Authority() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="autoridade" className="section-padding bg-abah-offwhite relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-abah-blue-100 opacity-15 blur-3xl pointer-events-none" />

      <div className="container-abah relative z-10" ref={ref}>
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block text-abah-pink-400 text-xs font-semibold font-heading uppercase tracking-widest mb-4"
          >
            Nossa Equipe
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl font-heading font-bold text-abah-gray-800 mb-5"
          >
            Profissionais{' '}
            <span className="text-abah-blue-400">especializados</span>
          </motion.h2>
          <p className="text-abah-gray-500 font-light text-lg">
            A clínica conta com profissionais especializados nas diferentes áreas do desenvolvimento e intervenção terapêutica multidisciplinar.
          </p>
        </div>

        {/* Profile Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white rounded-3xl shadow-card border border-abah-gray-100 overflow-hidden">
            <div className="grid md:grid-cols-5 gap-0">
              {/* Photo placeholder */}
              <div className="md:col-span-2 overflow-hidden min-h-[300px]">
                <img
                  src="/6barbara.webp"
                  alt="Dra. Bárbara — Diretora Clínica da ABAH"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="md:col-span-3 p-8 md:p-10 flex flex-col justify-center">
                <span className="text-abah-pink-400 text-xs font-semibold font-heading uppercase tracking-widest mb-2">
                  Diretora Clínica
                </span>
                <h3 className="font-heading font-bold text-2xl md:text-3xl text-abah-gray-800 mb-2">
                  Dra. Bárbara
                </h3>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-abah-blue-500 hover:text-abah-blue-600 transition-colors text-sm font-medium mb-4">
                  <Linkedin size={18} />
                  <span>Ver perfil profissional</span>
                </a>
                <p className="text-abah-gray-500 leading-relaxed mb-6">
                  A Dra. Bárbara coordena a equipe clínica da ABAH com rigor 
                  científico e sensibilidade humana. Sua experiência em 
                  neurodivergência infantil e Análise do Comportamento Aplicada (ABA) 
                  garante que o nosso corpo clínico conduza cada protocolo seguindo os mais altos padrões de 
                  qualidade e eficácia no cuidado especializado.
                </p>

                {/* Credentials */}
                <div className="grid grid-cols-2 gap-4">
                  {credentials.map((cred, i) => {
                    const Icon = cred.icon
                    return (
                      <motion.div
                        key={cred.label}
                        initial={{ opacity: 0, y: 10 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
                        className="flex items-center gap-3 bg-abah-cream rounded-xl px-4 py-3"
                      >
                        <Icon size={18} className="text-abah-blue-400 flex-shrink-0" />
                        <span className="text-abah-gray-600 text-sm font-medium">{cred.label}</span>
                      </motion.div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
