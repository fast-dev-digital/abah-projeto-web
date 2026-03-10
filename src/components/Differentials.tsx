import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { HeartHandshake, GraduationCap, CheckCircle2 } from 'lucide-react'

const features = [
  'Capacitação de pais para aplicação de estratégias em casa',
  'Workshops exclusivos sobre desenvolvimento',
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
            Na ABAH, entendemos que a evolução do paciente vai muito além das 
            sessões terapêuticas. Por isso, investimos no treinamento parental 
            e no acolhimento familiar como pilares do nosso tratamento.
          </motion.p>
        </div>

        {/* Destaque Absoluto: Acolhimento e Treinamento */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="relative group bg-gradient-to-r from-abah-yellow-50 via-white to-abah-pink-50 rounded-[2.5rem] p-10 md:p-14 border border-abah-yellow-100 shadow-xl mb-16 overflow-hidden flex flex-col md:flex-row items-center gap-10"
        >
          {/* Decorative backdrop */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-abah-pink-100 rounded-full blur-3xl opacity-40 mix-blend-multiply pointer-events-none group-hover:scale-110 transition-transform duration-1000" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-abah-yellow-100 rounded-full blur-3xl opacity-40 mix-blend-multiply pointer-events-none group-hover:scale-110 transition-transform duration-1000" />

          {/* Icon Area */}
          <div className="relative z-10 shrink-0">
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-[2rem] bg-white shadow-soft flex items-center justify-center relative overflow-hidden group-hover:-translate-y-2 transition-transform duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-abah-pink-100 to-abah-yellow-100 opacity-50" />
              <HeartHandshake size={48} className="text-abah-pink-400 relative z-10" />
            </div>
            {/* Floating Mini Icon */}
            <div className="absolute -bottom-4 -right-4 w-12 h-12 rounded-xl bg-abah-yellow-400 flex items-center justify-center shadow-md animate-bounce">
              <GraduationCap size={24} className="text-white" />
            </div>
          </div>

          {/* Copy Area */}
          <div className="relative z-10 flex-1 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 border border-white/80 backdrop-blur-md mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-abah-pink-400 animate-pulse" />
              <span className="text-abah-pink-500 font-heading font-bold text-xs tracking-widest uppercase">
                O Nosso Maior Diferencial
              </span>
            </div>
            
            <h3 className="font-heading font-bold text-3xl md:text-4xl text-abah-gray-800 mb-6 leading-tight">
              Acolhimento Familiar & <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-abah-pink-400 to-abah-yellow-500">
                Treinamento Parental
              </span>
            </h3>
            
            <p className="text-abah-gray-600 text-lg leading-relaxed max-w-2xl font-light">
              Sabemos que a evolução do seu filho não acontece apenas dentro do consultório. Por isso, oferecemos um <strong className="font-semibold text-abah-pink-500">verdadeiro porto seguro</strong> para a sua família. 
              <br /><br />
              Enquanto nossa equipe cuida do paciente com excelência clínica, equipamos os pais com orientações práticas, suporte emocional e recursos valiosos para lidarem com os desafios do dia a dia, garantindo que o lar seja a extensão mais poderosa do tratamento.
            </p>
          </div>
        </motion.div>

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
