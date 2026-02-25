import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Shield, Eye, Users } from 'lucide-react'

const values = [
  {
    icon: Shield,
    title: 'Base Científica',
    description: 'Todas as nossas intervenções seguem protocolos validados pela comunidade científica internacional.',
    color: 'abah-blue',
  },
  {
    icon: Eye,
    title: 'Atenção Individualizada',
    description: 'Cada plano terapêutico é desenhado para as necessidades específicas de cada criança.',
    color: 'abah-pink',
  },
  {
    icon: Users,
    title: 'Família no Centro',
    description: 'Acreditamos que a evolução acontece quando a família participa ativamente do processo terapêutico.',
    color: 'abah-green',
  },
]

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="clinica" className="section-padding bg-white relative">
      <div className="container-abah" ref={ref}>
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block text-abah-green-400 text-xs font-semibold font-heading uppercase tracking-widest mb-4"
          >
            A Clínica
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl font-heading font-bold text-abah-gray-800 mb-5"
          >
            Um espaço pensado para o{' '}
            <span className="text-abah-pink-400">acolhimento</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-abah-gray-500 text-lg leading-relaxed font-light"
          >
            A Clínica ABAH foi concebida para ser muito mais do que um espaço terapêutico. 
            Cada detalhe do nosso ambiente foi projetado para transmitir segurança, conforto 
            e confiança — tanto para as crianças quanto para as famílias.
          </motion.p>
        </div>

        {/* Grid layout: images + values */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Grid Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="aspect-[3/4] rounded-2xl bg-gradient-to-br from-abah-pink-50 to-abah-blue-50 border border-abah-gray-100 flex items-center justify-center">
              <p className="text-abah-gray-400 text-xs font-medium text-center px-4">Foto da Recepção</p>
            </div>
            <div className="aspect-[3/4] rounded-2xl bg-gradient-to-br from-abah-green-50 to-abah-yellow-50 border border-abah-gray-100 mt-8 flex items-center justify-center">
              <p className="text-abah-gray-400 text-xs font-medium text-center px-4">Sala de Terapia</p>
            </div>
            <div className="aspect-[3/4] rounded-2xl bg-gradient-to-br from-abah-yellow-50 to-abah-pink-50 border border-abah-gray-100 -mt-8 flex items-center justify-center">
              <p className="text-abah-gray-400 text-xs font-medium text-center px-4">Espaço Sensorial</p>
            </div>
            <div className="aspect-[3/4] rounded-2xl bg-gradient-to-br from-abah-blue-50 to-abah-green-50 border border-abah-gray-100 flex items-center justify-center">
              <p className="text-abah-gray-400 text-xs font-medium text-center px-4">Área de Convivência</p>
            </div>
          </motion.div>

          {/* Values */}
          <div className="space-y-6">
            {values.map((item, i) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + i * 0.15 }}
                  className="group flex gap-5 p-6 rounded-2xl hover:bg-abah-cream transition-colors duration-300"
                >
                  <div className={`flex-shrink-0 w-14 h-14 rounded-xl bg-${item.color}-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <Icon size={24} className={`text-${item.color}-400`} />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg text-abah-gray-800 mb-1">
                      {item.title}
                    </h3>
                    <p className="text-abah-gray-500 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
