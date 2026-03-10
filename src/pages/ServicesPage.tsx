import { motion, type Variants } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  Brain,
  MessageSquare,
  Hand,
  Activity,
  BookOpen,
  CheckCircle2,
  ArrowRight,
  Heart,
  Footprints,
  Music
} from 'lucide-react'

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
}

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
}

const services = [
  {
    id: 'psicoterapia',
    title: 'Psicoterapia',
    icon: Heart,
    color: 'bg-abah-pink-50',
    borderColor: 'border-abah-pink-100',
    iconColor: 'text-abah-pink-500',
    description: [
      'A Psicoterapia oferece um espaço seguro para explorar emoções, pensamentos e comportamentos no seu tempo.',
      'Trabalhamos no enfrentamento de desafios emocionais e no desenvolvimento de habilidades de regulação.'
    ],
    benefits: [
      'Promoção do autoconhecimento',
      'Acolhimento e orientação familiar',
      'Estratégias para ansiedade',
      'Fortalecimento da autoestima'
    ],
    image: '/foto3.webp'
  },
  {
    id: 'psicologia',
    title: 'Psicologia com abordagem em Análise do Comportamento Aplicada (ABA)',
    icon: Brain,
    color: 'bg-abah-blue-50',
    borderColor: 'border-abah-blue-100',
    iconColor: 'text-abah-blue-500',
    description: [
      'Nossa intervenção em Psicologia é fundamentada na Análise do Comportamento Aplicada (ABA). Trabalhamos para modificar comportamentos.',
      'O foco é promover autonomia, reduzir comportamentos prejudiciais e construir bases para a aprendizagem contínua.'
    ],
    benefits: [
      'Habilidades sociais e comunicação',
      'Redução de comportamentos desafiadores',
      'Maior autonomia nas Atividades de Vida Diária',
      'Empoderamento parental'
    ],
    image: '/foto1.webp'
  },
  {
    id: 'fonoaudiologia',
    title: 'Fonoaudiologia',
    icon: MessageSquare,
    color: 'bg-abah-yellow-50',
    borderColor: 'border-abah-yellow-100',
    iconColor: 'text-abah-yellow-500',
    description: [
      'A Fonoaudiologia na ABAH foca no desenvolvimento da linguagem, fala e comunicação (verbal ou alternativa/aumentativa).',
      'Além da comunicação, nossos especialistas atuam em questões de seletividade alimentar e motricidade orofacial.'
    ],
    benefits: [
      'Estímulo à fala e linguagem',
      'Implementação de Comunicação Alternativa (CAA)',
      'Terapia Alimentar',
      'Melhora na clareza da fala'
    ],
    image: '/foto6.webp'
  },
  {
    id: 'terapia-ocupacional',
    title: 'Terapia Ocupacional com abordagem em Integração Sensorial de Ayres, incluindo desenvolvimento de autonomia nas Atividades de Vida Diária (AVD) e Atividades de Vida Prática (AVP)',
    icon: Hand,
    color: 'bg-abah-green-50',
    borderColor: 'border-abah-green-100',
    iconColor: 'text-abah-green-500',
    description: [
      'A Terapia Ocupacional ajuda o paciente a processar, organizar e interpretar as informações que recebe do ambiente e do próprio corpo.',
      'Trabalhamos de forma lúdica os desafios motores, o brincar e a regulação emocional para promover a independência.'
    ],
    benefits: [
      'Regulação sensorial e emocional',
      'Coordenação motora fina e grossa',
      'Independência em AVDs e AVPs',
      'Aprimoramento do brincar'
    ],
    image: '/foto4.webp'
  },
  {
    id: 'fisioterapia',
    title: 'Fisioterapia',
    icon: Activity,
    color: 'bg-abah-blue-50',
    borderColor: 'border-abah-blue-100',
    iconColor: 'text-abah-blue-500',
    description: [
      'A Fisioterapia Pediátrica avalia e trata alterações motoras, buscando otimizar o movimento, a postura e o equilíbrio.',
      'Através de exercícios direcionados e lúdicos, fortalecemos a musculatura e melhoramos o controle postural.'
    ],
    benefits: [
      'Alcance de marcos motores',
      'Melhora do tônus e flexibilidade',
      'Aprimoramento do equilíbrio e coordenação',
      'Prevenção de deformidades articulares'
    ],
    image: '/foto5.webp'
  },
  {
    id: 'psicopedagogia',
    title: 'Psicopedagogia',
    icon: BookOpen,
    color: 'bg-abah-pink-50',
    borderColor: 'border-abah-pink-100',
    iconColor: 'text-abah-pink-500',
    description: [
      'A Psicopedagogia atua na interseção entre a aprendizagem e os processos cognitivos/emocionais no ambiente escolar e familiar.',
      'Desenvolvemos estratégias personalizadas para superar dificuldades de atenção, memória, leitura, escrita e raciocínio lógico.'
    ],
    benefits: [
      'Superação de dificuldades de aprendizagem',
      'Métodos de estudo adequados',
      'Estímulo das funções executivas',
      'Orientação escolar'
    ],
    image: '/foto1.webp'
  },
  {
    id: 'psicomotricidade',
    title: 'Psicomotricidade',
    icon: Footprints,
    color: 'bg-abah-green-50',
    borderColor: 'border-abah-green-100',
    iconColor: 'text-abah-green-500',
    description: [
      'A Psicomotricidade atua na integração entre movimento, intelecto e afeto. O paciente expressa sentimentos e aprende sobre si.',
      'Nossas sessões estimulam o esquema corporal, noções de ritmo, espaço e lateralidade através de vivências lúdicas.'
    ],
    benefits: [
      'Melhora do esquema corporal',
      'Desenvolvimento da organização espaço-temporal',
      'Aprimoramento do equilíbrio global',
      'Fortalecimento da expressividade emocional'
    ],
    image: '/foto4.webp'
  },
  {
    id: 'musicoterapia',
    title: 'Musicoterapia',
    icon: Music,
    color: 'bg-abah-yellow-50',
    borderColor: 'border-abah-yellow-100',
    iconColor: 'text-abah-yellow-500',
    description: [
      'A Musicoterapia utiliza a música e seus elementos para facilitar e promover a comunicação, relação, aprendizagem e mobilização.',
      'É uma ferramenta terapêutica para trabalhar a regulação emocional e o desenvolvimento sensoriomotor de forma lúdica.'
    ],
    benefits: [
      'Estímulo à comunicação verbal e não-verbal',
      'Regulação emocional e redução de ansiedade',
      'Aprimoramento da atenção auditiva',
      'Desenvolvimento da criatividade'
    ],
    image: '/foto5.webp'
  }
]

export default function ServicesPage() {
  return (
    <div className="bg-abah-offwhite min-h-screen pt-24 pb-16">
      {/* Hero Section Interno */}
      <section className="container-abah py-16 text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-abah-blue-100/50 text-abah-blue-500 font-medium text-sm mb-6">
            <Activity size={16} />
            Especialidades
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-abah-gray-800 tracking-tight mb-6">
            Cuidado Integrado e <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-abah-blue-400 via-abah-green-400 to-abah-yellow-400">
              Multidisciplinar
            </span>
          </h1>
          <p className="text-lg md:text-xl text-abah-gray-600 font-body leading-relaxed max-w-3xl mx-auto">
            Acreditamos que o desenvolvimento de nossos pacientes é plural. Por isso, nossas terapias não ocorrem de forma isolada; elas se conversam. Nossa equipe trabalha de modo transdisciplinar, focada inteiramente na evolução global do paciente e na qualidade de vida da família.
          </p>
        </motion.div>
      </section>

      {/* Lista Detalhada de Especialidades (Alternating Layout) */}
      <section className="container-abah py-12">
        <div className="space-y-24 md:space-y-32">
          {services.map((service, index) => {
            const isEven = index % 2 === 0
            const Icon = service.icon

            return (
              <motion.div
                key={service.id}
                id={service.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-100px' }}
                variants={staggerContainer}
                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-20 items-center`}
              >
                {/* Image Side */}
                <motion.div variants={fadeInUp} className="w-full lg:w-1/2 relative">
                  <div className={`absolute inset-0 ${service.color} rounded-[2.5rem] transform ${isEven ? '-rotate-3 translate-x-4' : 'rotate-3 -translate-x-4'} scale-105 z-0 transition-transform duration-500`}></div>
                  <div className="relative z-10 rounded-3xl overflow-hidden aspect-[4/3] shadow-elevated border border-white">
                    <img 
                      src={service.image} 
                      alt={`Ambiente para ${service.title}`} 
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </div>
                </motion.div>

                {/* Content Side */}
                <motion.div variants={fadeInUp} className="w-full lg:w-1/2 space-y-8">
                  <div className="space-y-4">
                    <div className={`w-16 h-16 rounded-2xl ${service.color} border ${service.borderColor} flex items-center justify-center mb-6`}>
                      <Icon className={service.iconColor} size={32} />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-abah-gray-800">
                      {service.title}
                    </h2>
                  </div>

                  <div className="space-y-4 text-abah-gray-600 text-lg leading-relaxed">
                    {service.description.map((paragraph, i) => (
                      <p key={i}>{paragraph}</p>
                    ))}
                  </div>

                  <div className="bg-white rounded-2xl p-6 md:p-8 shadow-soft border border-abah-gray-100">
                    <h3 className="font-heading font-semibold text-abah-gray-800 text-lg mb-4">Principais Benefícios:</h3>
                    <ul className="space-y-3">
                      {service.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle2 className={`shrink-0 mt-0.5 ${service.iconColor}`} size={20} />
                          <span className="text-abah-gray-700">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </motion.div>
            )
          })}
        </div>
      </section>

      {/* Banner de Intervenção Precoce */}
      <section className="container-abah py-20">
        <motion.div
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true, margin: '-50px' }}
           variants={fadeInUp}
           className="relative overflow-hidden bg-abah-gray-800 rounded-3xl p-8 md:p-16 text-center shadow-elevated"
        >
          {/* Decorative shapes */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-abah-blue-500/20 rounded-full blur-3xl -translate-y-1/4 translate-x-1/4"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-abah-pink-500/20 rounded-full blur-3xl translate-y-1/4 -translate-x-1/4"></div>
          
          <div className="relative z-10 max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-5xl font-heading font-bold leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-abah-yellow-300 to-abah-pink-300">
                A importância da Intervenção Precoce
              </span>
            </h2>
            <p className="text-ahab-gray-200 text-lg md:text-xl text-white/90 font-light leading-relaxed">
              O cérebro infantil possui uma neuroplasticidade impressionante nos primeiros anos de vida. Quanto mais cedo identificamos atrasos no desenvolvimento e iniciamos as terapias fundamentadas em ciência, maiores são as chances de ganho e adaptação. Não espere para ver; aja agora.
            </p>
            <div className="pt-4 flex justify-center">
              <Link 
                to="/#contato" 
                className="inline-flex items-center gap-2 bg-white text-abah-gray-800 hover:bg-abah-offwhite font-heading font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:-translate-y-1 shadow-lg"
              >
                Agendar uma Avaliação
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

    </div>
  )
}
