import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { MessageCircle, Brain, Activity, Hand, BookOpen } from 'lucide-react'

const services = [
  {
    icon: MessageCircle,
    title: 'Fonoaudiologia',
    description: 'Avaliação e intervenção em linguagem, fala, comunicação e funções orofaciais, promovendo autonomia comunicativa.',
    color: 'pink',
    bgClass: 'from-abah-pink-50 to-abah-pink-100',
    iconColor: 'text-abah-pink-400',
    borderColor: 'border-abah-pink-200',
  },
  {
    icon: Activity,
    title: 'Fisioterapia',
    description: 'Desenvolvimento motor global, equilíbrio, coordenação e habilidades funcionais com enfoque lúdico e motivador.',
    color: 'green',
    bgClass: 'from-abah-green-50 to-abah-green-100',
    iconColor: 'text-abah-green-400',
    borderColor: 'border-abah-green-200',
  },
  {
    icon: Brain,
    title: 'Psicologia',
    description: 'Suporte comportamental e emocional baseado em evidências, incluindo ABA aplicada e orientação parental.',
    color: 'blue',
    bgClass: 'from-abah-blue-50 to-abah-blue-100',
    iconColor: 'text-abah-blue-400',
    borderColor: 'border-abah-blue-200',
  },
  {
    icon: Hand,
    title: 'Terapia Ocupacional',
    description: 'Promoção da independência nas atividades do dia a dia, integração sensorial e desenvolvimento de habilidades adaptativas.',
    color: 'yellow',
    bgClass: 'from-abah-yellow-50 to-abah-yellow-100',
    iconColor: 'text-abah-yellow-400',
    borderColor: 'border-abah-yellow-200',
  },
  {
    icon: BookOpen,
    title: 'Psicopedagogia',
    description: 'Avaliação e intervenção nos processos de aprendizagem, respeitando o ritmo e o perfil cognitivo de cada criança.',
    color: 'pink',
    bgClass: 'from-abah-pink-50 to-abah-blue-50',
    iconColor: 'text-abah-pink-400',
    borderColor: 'border-abah-pink-200',
  },
]

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="modalidades" className="section-padding bg-abah-offwhite relative">
      {/* Subtle background accent */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-abah-yellow-100 opacity-20 blur-3xl pointer-events-none" />

      <div className="container-abah relative z-10" ref={ref}>
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block text-abah-blue-400 text-xs font-semibold font-heading uppercase tracking-widest mb-4"
          >
            Modalidades
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl font-heading font-bold text-abah-gray-800 mb-5"
          >
            Cuidado integrado,{' '}
            <span className="text-abah-blue-400">resultado real</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-abah-gray-500 text-lg leading-relaxed font-light"
          >
            Nossa equipe multidisciplinar trabalha de forma integrada, 
            garantindo que cada intervenção seja complementar e potencialize 
            os resultados do desenvolvimento da criança.
          </motion.p>
        </div>

        {/* Service Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                className={`group relative bg-white rounded-2xl p-8 border ${service.borderColor} hover:shadow-card transition-all duration-500 hover:-translate-y-1`}
              >
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.bgClass} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon size={24} className={service.iconColor} />
                </div>

                {/* Content */}
                <h3 className="font-heading font-semibold text-lg text-abah-gray-800 mb-3">
                  {service.title}
                </h3>
                <p className="text-abah-gray-500 text-sm leading-relaxed">
                  {service.description}
                </p>

                {/* Subtle gradient on hover */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.bgClass} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500`} />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
