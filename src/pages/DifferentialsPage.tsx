import { useState } from 'react'
import { motion, AnimatePresence, type Variants } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  HeartHandshake,
  MessageCircleHeart,
  BookHeart,
  Users,
  Sparkles,
  ChevronDown,
  ArrowRight
} from 'lucide-react'

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
}

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
}

const pillars = [
  {
    title: 'Acolhimento e escuta qualificada',
    description: 'Um espaço seguro sem julgamentos. Validamos seus sentimentos desde o diagnóstico até os desafios do dia a dia.',
    icon: MessageCircleHeart,
    color: 'bg-abah-pink-100',
    iconColor: 'text-abah-pink-500'
  },
  {
    title: 'Treinamento prático',
    description: 'Aprenda estratégias baseadas em ciência para lidar com crises, estender habilidades e criar rotinas previsíveis e calmas em casa.',
    icon: HeartHandshake,
    color: 'bg-abah-yellow-100',
    iconColor: 'text-abah-yellow-600'
  },
  {
    title: 'Orientação familiar',
    description: 'Suporte constante focado em estruturar o ambiente de casa e apoiar familiares para estimular o desenvolvimento com confiança e consistência.',
    icon: Users,
    color: 'bg-abah-blue-100',
    iconColor: 'text-abah-blue-500'
  },
  {
    title: 'Celebração das pequenas conquistas',
    description: 'Cada avanço importa. Celebramos juntos cada novo aprendizado do seu filho, renovando as energias de toda a família.',
    icon: BookHeart,
    color: 'bg-abah-green-100',
    iconColor: 'text-abah-green-500'
  }
]

const faqs = [
  {
    question: 'Eu preciso mesmo participar das sessões ou reuniões?',
    answer: 'Acreditamos que os pais são os maiores especialistas nos seus filhos. A intervenção na clínica dura algumas horas por semana, enquanto vocês estão com eles o tempo todo. Sua participação é o ingrediente secreto para o sucesso terapêutico não ficar apenas na sala de terapia, mas se generalizar para a Vida.'
  },
  {
    question: 'Como funciona esse treinamento prático?',
    answer: 'Não entregamos apenas "manuais". Nossos especialistas realizam simulações, modelam comportamentos na sua frente e, juntos, construímos estratégias contornar crises em casa, estimular a comunicação na hora das refeições, no parquinho e muito mais.'
  },
  {
    question: 'Como a clínica se envolve com a escola do meu filho(a)?',
    answer: 'Não os deixamos sozinhos na escola. Marcamos reuniões regulares com coordenadores e professores, oferecemos orientações práticas em Análise do Comportamento e ajudamos no planejamento de adaptações curriculares quando necessário (PEI).'
  },
  {
    question: 'E se eu já estiver esgotado(a)?',
    answer: 'O esgotamento parental é real e normal. É justamente por isso que o nosso primeiro pilar é o Acolhimento. Cuidar de você é o primeiro passo para cuidar do seu filho de forma sustentável.'
  }
]

export default function DifferentialsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  return (
    <div className="bg-abah-offwhite min-h-screen pt-24 pb-16">
      
      {/* Hero Section Interno */}
      <section className="container-abah py-16 md:py-20 text-center relative overflow-hidden">
        {/* Soft background elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-3/4 bg-abah-pink-100/40 rounded-[100%] blur-[100px] -z-10"></div>
        <div className="absolute bottom-0 left-1/4 w-1/2 h-1/2 bg-abah-yellow-100/30 rounded-[100%] blur-[80px] -z-10"></div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="max-w-4xl mx-auto px-4"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-abah-pink-100/60 text-abah-pink-500 font-medium text-sm mb-6 shadow-sm border border-abah-pink-100">
            <HeartHandshake size={16} />
            Treinamento Parental
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-heading font-bold text-abah-gray-800 tracking-tight mb-6">
            Nós cuidamos de <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-abah-pink-400 to-abah-yellow-400">
              quem cuida.
            </span>
          </h1>
          <p className="text-lg md:text-xl text-abah-gray-600 font-body leading-relaxed max-w-2xl mx-auto">
            A clínica ABAH não foca apenas na criança. Focamos na família. Um elo forte é criado quando os pais se sentem seguros, acolhidos e preparados.
          </p>
        </motion.div>
      </section>

      {/* O Problema vs. A Solução */}
      <section className="container-abah py-12 md:py-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={staggerContainer}
          className="bg-white rounded-[2.5rem] p-8 md:p-14 shadow-card border border-abah-gray-100 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center relative overflow-hidden"
        >
          {/* Decorative Divider on Desktop */}
          <div className="hidden lg:block absolute left-1/2 top-14 bottom-14 w-px bg-gradient-to-b from-transparent via-abah-gray-200 to-transparent"></div>

          <motion.div variants={fadeInUp} className="space-y-6">
            <h2 className="text-3xl font-heading font-bold text-abah-gray-700 opacity-80">
              A confusão após o diagnóstico
            </h2>
            <p className="text-abah-gray-500 text-lg leading-relaxed">
              Muitas famílias chegam esgotadas. Um diagnóstico ou a percepção de um atraso no desenvolvimento pode trazer angústia, dúvidas sobre futuro, e uma sensação de solidão imensa perante o volume de terapias e exigências escolares.
            </p>
          </motion.div>

          <motion.div variants={fadeInUp} className="space-y-6">
            <h2 className="text-3xl font-heading font-bold text-abah-gray-800">
              A resposta é a <span className="text-abah-pink-500">Parceria</span>
            </h2>
            <p className="text-abah-gray-600 text-lg leading-relaxed">
              Nosso verdadeiro diferencial, o "pulo do gato", é que estendemos as mãos aos pais. Promovemos o <strong>Treinamento Parental</strong> estruturado. Equipamos você com conhecimento prático para traduzir o que é feito na sala de terapia para a hora do jantar na sua casa. Menos estresse, mais alívio emocional.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Pilares do Treinamento Parental */}
      <section className="container-abah py-16 md:py-24">
        <div className="text-center mb-16">
          <motion.h2 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-heading font-bold text-abah-gray-800 mb-4"
          >
            Nossos Pilares de Apoio Familiar
          </motion.h2>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
        >
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon
            return (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white rounded-3xl p-8 shadow-soft border border-abah-gray-100 hover:shadow-card transition-shadow duration-300 group"
              >
                <div className={`w-14 h-14 rounded-2xl ${pillar.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={pillar.iconColor} size={28} />
                </div>
                <h3 className="text-xl font-heading font-bold text-abah-gray-800 mb-4 leading-tight">
                  {pillar.title}
                </h3>
                <p className="text-abah-gray-600 font-body leading-relaxed text-[15px]">
                  {pillar.description}
                </p>
              </motion.div>
            )
          })}
        </motion.div>
      </section>

      {/* FAQ (Accordion) */}
      <section className="container-abah py-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={fadeInUp}
          className="max-w-3xl mx-auto space-y-10"
        >
          <div className="text-center">
             <h2 className="text-3xl font-heading font-bold text-abah-gray-800 mb-4">
               Dúvidas Frequentes
             </h2>
             <p className="text-abah-gray-600">Perguntas comuns que pais nos fazem logo que chegam à clínica.</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className={`bg-white rounded-2xl border transition-colors duration-300 overflow-hidden ${openFaq === index ? 'border-abah-pink-200 shadow-md' : 'border-abah-gray-200 shadow-sm'}`}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                >
                  <span className="font-heading font-semibold text-lg text-abah-gray-800 pr-8">
                    {faq.question}
                  </span>
                  <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 ${openFaq === index ? 'bg-abah-pink-100 text-abah-pink-500' : 'bg-abah-gray-100 text-abah-gray-500'}`}>
                    <ChevronDown 
                      size={18} 
                      className={`transition-transform duration-300 ${openFaq === index ? 'rotate-180' : 'rotate-0'}`} 
                    />
                  </div>
                </button>
                <AnimatePresence>
                  {openFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="p-6 pt-0 text-abah-gray-600 leading-relaxed border-t border-abah-gray-100 mt-2">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CTA Final */}
      <section className="container-abah py-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={fadeInUp}
          className="bg-gradient-to-br from-abah-pink-100/80 to-abah-yellow-100/80 rounded-[2.5rem] p-10 md:p-16 text-center shadow-card border border-white"
        >
          <Sparkles className="text-abah-pink-400 mx-auto mb-6" size={40} />
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-abah-gray-800 mb-6">
            Não caminhe sozinho.
          </h2>
          <p className="text-abah-gray-700 text-lg md:text-xl max-w-2xl mx-auto mb-10">
            A jornada do neurodesenvolvimento tem seus desafios, mas com o apoio certo, o fardo é mais leve e as conquistas são celebradas em conjunto. Agende um horário para conversarmos.
          </p>
          <Link 
            to="/#contato" 
            className="inline-flex items-center justify-center gap-2 bg-abah-gray-800 hover:bg-abah-gray-700 text-white font-heading font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:-translate-y-1 shadow-lg"
          >
            Agendar uma Conversa
            <ArrowRight size={20} />
          </Link>
        </motion.div>
      </section>

    </div>
  )
}
