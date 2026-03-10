import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Award, BookOpen, Building2, Star } from 'lucide-react'

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
            <div className="p-8 md:p-12 flex flex-col items-center text-center">
              <span className="text-abah-pink-400 text-sm font-semibold font-heading uppercase tracking-widest mb-4 border border-abah-pink-200 bg-abah-pink-50 px-4 py-1.5 rounded-full">
                Nossa equipe
              </span>
              <p className="text-abah-gray-600 text-lg leading-relaxed max-w-3xl mb-12">
                Contamos com uma equipe de profissionais especializados, preparados para atuar de forma ética, técnica e humanizada no atendimento das diferentes demandas relacionadas ao desenvolvimento e à saúde emocional.
              </p>

              {/* Credentials */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-5xl">
                {credentials.map((cred, i) => {
                  const Icon = cred.icon
                  return (
                    <motion.div
                      key={cred.label}
                      initial={{ opacity: 0, y: 10 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                      className="flex flex-col items-center text-center gap-3 bg-abah-cream rounded-2xl p-6 transition-transform hover:-translate-y-1 hover:shadow-soft"
                    >
                      <div className="w-12 h-12 rounded-full bg-abah-blue-100 flex items-center justify-center mb-2">
                        <Icon size={24} className="text-abah-blue-500" />
                      </div>
                      <span className="text-abah-gray-800 font-heading font-semibold">{cred.label}</span>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
