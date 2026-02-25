import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { HeartHandshake, GraduationCap, Users, CheckCircle2 } from 'lucide-react'

const features = [
  'Capacitação de pais para aplicação de estratégias em casa',
  'Workshops exclusivos sobre desenvolvimento infantil',
  'Suporte emocional e orientação contínua para a família',
  'Relatórios detalhados de evolução do tratamento',
  'Canal direto com a equipe terapêutica',
  'Grupo de acolhimento entre famílias',
]

export default function Differentials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="diferencial" className="section-padding bg-white relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-abah-green-100 opacity-20 blur-3xl pointer-events-none" />

      <div className="container-abah relative z-10" ref={ref}>
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block text-abah-yellow-400 text-xs font-semibold font-heading uppercase tracking-widest mb-4"
          >
            Nosso Diferencial
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl font-heading font-bold text-abah-gray-800 mb-5"
          >
            A família como parte{' '}
            <span className="text-abah-green-400">essencial</span> do processo
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-abah-gray-500 text-lg leading-relaxed font-light"
          >
            Na ABAH, entendemos que a evolução da criança vai muito além das 
            sessões terapêuticas. Por isso, investimos no treinamento parental 
            e no acolhimento familiar como pilares do nosso tratamento.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Treinamento Parental */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative group bg-gradient-to-br from-abah-green-50 to-abah-blue-50 rounded-3xl p-10 border border-abah-green-100 hover:shadow-card transition-all duration-500"
          >
            <div className="w-16 h-16 rounded-2xl bg-white/80 backdrop-blur-sm flex items-center justify-center mb-6 shadow-soft group-hover:scale-110 transition-transform duration-300">
              <GraduationCap size={28} className="text-abah-green-400" />
            </div>
            <h3 className="font-heading font-bold text-2xl text-abah-gray-800 mb-4">
              Treinamento Parental
            </h3>
            <p className="text-abah-gray-500 leading-relaxed mb-6">
              Capacitamos os pais com técnicas baseadas em evidências para que 
              possam dar continuidade às intervenções terapêuticas no ambiente 
              doméstico, potencializando os resultados de cada sessão.
            </p>
            <div className="flex items-center gap-2 text-abah-green-400 font-heading font-semibold text-sm">
              <Users size={16} />
              <span>Sessões individuais e em grupo</span>
            </div>
          </motion.div>

          {/* Acolhimento Familiar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="relative group bg-gradient-to-br from-abah-pink-50 to-abah-yellow-50 rounded-3xl p-10 border border-abah-pink-100 hover:shadow-card transition-all duration-500"
          >
            <div className="w-16 h-16 rounded-2xl bg-white/80 backdrop-blur-sm flex items-center justify-center mb-6 shadow-soft group-hover:scale-110 transition-transform duration-300">
              <HeartHandshake size={28} className="text-abah-pink-400" />
            </div>
            <h3 className="font-heading font-bold text-2xl text-abah-gray-800 mb-4">
              Acolhimento Familiar
            </h3>
            <p className="text-abah-gray-500 leading-relaxed mb-6">
              Sabemos que o diagnóstico e o processo terapêutico impactam toda 
              a família. Oferecemos um espaço seguro de escuta, orientação e 
              conexão entre famílias que compartilham experiências semelhantes.
            </p>
            <div className="flex items-center gap-2 text-abah-pink-400 font-heading font-semibold text-sm">
              <HeartHandshake size={16} />
              <span>Apoio emocional contínuo</span>
            </div>
          </motion.div>
        </div>

        {/* Features List */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-abah-cream rounded-3xl p-10"
        >
          <h3 className="font-heading font-semibold text-xl text-abah-gray-800 mb-8 text-center">
            O que sua família recebe na ABAH
          </h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.7 + i * 0.08 }}
                className="flex items-start gap-3"
              >
                <CheckCircle2 size={18} className="text-abah-green-400 mt-0.5 flex-shrink-0" />
                <span className="text-abah-gray-600 text-sm">{feature}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
