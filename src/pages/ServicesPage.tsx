import { motion, type Variants } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  Brain,
  MessageSquare,
  Hand,
  Activity,
  BookOpen,
  Users,
  CheckCircle2,
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

const services = [
  {
    id: 'psicologia',
    title: 'Psicologia (ABA)',
    icon: Brain,
    color: 'bg-abah-blue-50',
    borderColor: 'border-abah-blue-100',
    iconColor: 'text-abah-blue-500',
    description: [
      'Nossa intervenção em Psicologia é fundamentada na Análise do Comportamento Aplicada (ABA). Trabalhamos para compreender e modificar comportamentos, ampliando o repertório de habilidades sociais, acadêmicas e de vida diária da criança.',
      'O foco não é "curar" ou mascarar traços, mas sim promover autonomia, reduzir comportamentos que tragam prejuízo ao indivíduo e construir bases sólidas para a aprendizagem contínua, sempre em parceria com a família.'
    ],
    benefits: [
      'Desenvolvimento de habilidades sociais e comunicação',
      'Redução de comportamentos desafiadores',
      'Maior autonomia nas atividades de vida diária (AVDs)',
      'Treinamento e empoderamento parental'
    ],
    image: '/3salaterapia.webp' // Placeholder, ideal is to have a specific image
  },
  {
    id: 'fonoaudiologia',
    title: 'Fonoaudiologia',
    icon: MessageSquare,
    color: 'bg-abah-pink-50',
    borderColor: 'border-abah-pink-100',
    iconColor: 'text-abah-pink-500',
    description: [
      'A Fonoaudiologia na ABAH foca no desenvolvimento pleno da linguagem, fala e comunicação (seja ela verbal ou alternativa/aumentativa). Avaliamos e intervimos nas dificuldades de expressão, compreensão e articulação.',
      'Além da comunicação, nossos especialistas atuam em questões de seletividade alimentar e motricidade orofacial, garantindo que a criança possa se alimentar com segurança e prazer, superando barreiras sensoriais ou motoras.'
    ],
    benefits: [
      'Estímulo à fala e linguagem compreensiva/expressiva',
      'Implementação de Comunicação Alternativa (CAA)',
      'Tratamento de seletividade e recusa alimentar (Terapia Alimentar)',
      'Melhora na articulação e clareza da fala'
    ],
    image: '/2recepcao.webp' // Placeholder
  },
  {
    id: 'terapia-ocupacional',
    title: 'Terapia Ocupacional',
    icon: Hand,
    color: 'bg-abah-green-50',
    borderColor: 'border-abah-green-100',
    iconColor: 'text-abah-green-500',
    description: [
      'A Terapia Ocupacional com Abordagem de Integração Sensorial de Ayres® ajuda a criança a processar, organizar e interpretar as informações que recebe do ambiente e do próprio corpo (tato, movimento, audição, visão).',
      'Em nossa sala de integração sensorial de ponta, trabalhamos de forma lúdica desafios motores, coordenação, brincar e a regulação emocional, permitindo que a criança participe de suas ocupações diárias com conforto e independência.'
    ],
    benefits: [
      'Regulação sensorial e emocional',
      'Desenvolvimento da coordenação motora fina e grossa',
      'Independência em atividades como vestir-se, comer e higiene',
      'Aprimoramento das habilidades do brincar'
    ],
    image: '/4sensorial.webp'
  },
  {
    id: 'fisioterapia',
    title: 'Fisioterapia',
    icon: Activity,
    color: 'bg-abah-yellow-50',
    borderColor: 'border-abah-yellow-100',
    iconColor: 'text-abah-yellow-500',
    description: [
      'A Fisioterapia Neurofuncional/Pediátrica avalia e trata alterações motoras, buscando otimizar o movimento, a postura e o equilíbrio. Atuamos desde os primeiros meses para corrigir e estimular marcos do desenvolvimento motor.',
      'Através de exercícios direcionados e lúdicos, fortalecemos a musculatura, melhoramos o controle postural e proporcionamos maior liberdade de movimento, o que impacta diretamente na exploração do ambiente e na cognição.'
    ],
    benefits: [
      'Alcance de marcos motores (sentar, engatinhar, andar)',
      'Melhora do tônus muscular flexibilidade e força',
      'Aprimoramento do equilíbrio e coordenação global',
      'Prevenção de deformidades ósseas e articulares'
    ],
    image: '/5convivencia.webp' // Placeholder
  },
  {
    id: 'psicopedagogia',
    title: 'Psicopedagogia',
    icon: BookOpen,
    color: 'bg-abah-blue-50', // Reusing some colors or creating new ones
    borderColor: 'border-abah-blue-100',
    iconColor: 'text-abah-blue-500',
    description: [
      'A Psicopedagogia atua na interseção entre a aprendizagem e os processos cognitivos/emocionais. Investigamos como a criança aprende e quais são os obstáculos que dificultam esse processo no ambiente escolar e familiar.',
      'Desenvolvemos estratégias personalizadas para superar dificuldades de atenção, memória, leitura, escrita e raciocínio lógico, sempre em constante diálogo com a escola e adaptação de materiais quando necessário.'
    ],
    benefits: [
      'Superação de dificuldades de aprendizagem (dislexia, TDAH, etc)',
      'Desenvolvimento de métodos de estudo adequados ao perfil do aluno',
      'Estímulo das funções executivas (atenção, planejamento)',
      'Orientação escolar e adaptação curricular'
    ],
    image: '/2recepcao.webp' // Placeholder
  },
  {
    id: 'supervisao',
    title: 'Supervisão Clínica',
    icon: Users,
    color: 'bg-abah-pink-50',
    borderColor: 'border-abah-pink-100',
    iconColor: 'text-abah-pink-500',
    description: [
      'Além do atendimento direto, a Clínica ABAH é um polo de formação e excelência. Oferecemos Supervisão Clínica para terapeutas e profissionais da equipe escolar que buscam aprimorar suas práticas analítico-comportamentais e neuromotoras.',
      'Nossos especialistas seniores conduzem discussões de casos, análise de dados e revisão de programas de ensino, garantindo que outros profissionais apliquem intervenções baseadas em evidências com alto rigor técnico e ético.'
    ],
    benefits: [
      'Aprimoramento técnico e prático de profissionais',
      'Alinhamento de condutas baseadas em ciência (Práticas Baseadas em Evidência)',
      'Discussão aprofundada de casos complexos',
      'Garantia de qualidade no serviço prestado por equipes externas'
    ],
    image: '/3salaterapia.webp' // Placeholder
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
            Acreditamos que o desenvolvimento infantil é plural. Por isso, nossas terapias não ocorrem de forma isolada; elas se conversam. Nossa equipe trabalha de modo transdisciplinar, focada inteiramente na evolução global da criança e na qualidade de vida da família.
          </p>
        </motion.div>
      </section>

      {/* Lista Detalhada de Modalidades (Alternating Layout) */}
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
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-white leading-tight">
              A importância da <span className="text-transparent bg-clip-text bg-gradient-to-r from-abah-yellow-300 to-abah-pink-300">Intervenção Precoce</span>
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
