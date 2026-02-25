import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { School, FileCheck, MessageSquare, ArrowRight } from 'lucide-react'

const benefits = [
  {
    icon: FileCheck,
    title: 'Relatórios Técnicos',
    description: 'Laudos detalhados para apoiar o processo de inclusão escolar.',
  },
  {
    icon: MessageSquare,
    title: 'Comunicação Direta',
    description: 'Canal aberto entre nossa equipe e os profissionais da escola.',
  },
  {
    icon: School,
    title: 'Capacitação Escolar',
    description: 'Workshops para educadores sobre manejo comportamental e inclusão.',
  },
]

export default function Schools() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="escolas" className="section-padding bg-white relative">
      <div className="container-abah" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-block text-abah-yellow-500 text-xs font-semibold font-heading uppercase tracking-widest mb-4"
            >
              Espaço para Escolas
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl md:text-4xl font-heading font-bold text-abah-gray-800 mb-5"
            >
              Parceria que fortalece a{' '}
              <span className="text-abah-yellow-500">inclusão</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-abah-gray-500 text-lg leading-relaxed font-light mb-10"
            >
              A ABAH é referência em parcerias com escolas que buscam excelência
              no processo de inclusão.
            </motion.p>

            <div className="space-y-6">
              {benefits.map((benefit, i) => {
                const Icon = benefit.icon
                return (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-abah-yellow-50 flex items-center justify-center">
                      <Icon size={22} className="text-abah-yellow-500" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-base text-abah-gray-800 mb-1">{benefit.title}</h3>
                      <p className="text-abah-gray-500 text-sm leading-relaxed">{benefit.description}</p>
                    </div>
                  </motion.div>
                )
              })}
            </div>

            <motion.a
              href="#contato"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="group inline-flex items-center gap-2 text-abah-yellow-500 font-heading font-semibold mt-10 hover:gap-3 transition-all duration-300"
            >
              Quero ser escola parceira
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </motion.a>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden border border-abah-gray-100">
              <img
                src="/7crianca.png"
                alt="Criança em ambiente de inclusão escolar"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -top-4 -right-4 grid grid-cols-3 gap-2">
              {Array.from({ length: 9 }).map((_, i) => (
                <div key={i} className="w-2 h-2 rounded-full bg-abah-yellow-200" />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
