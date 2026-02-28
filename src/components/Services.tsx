import { MessageCircle, Brain, Activity, Hand, BookOpen, GraduationCap } from 'lucide-react'
import ScrollStack, { ScrollStackItem } from '@/components/ScrollStack'

const services = [
  {
    icon: MessageCircle,
    title: 'Fonoaudiologia',
    description:
      'Avaliação e intervenção em linguagem, fala, comunicação e funções orofaciais, promovendo autonomia comunicativa.',
    gradient: 'linear-gradient(135deg, #FFF0F3 0%, #FFD6E0 100%)',
    iconBg: '#FFB3C6',
    iconColor: '#D45D74',
    accentColor: '#E8738A',
  },
  {
    icon: Activity,
    title: 'Fisioterapia',
    description:
      'Desenvolvimento motor global, equilíbrio, coordenação e habilidades funcionais com enfoque lúdico e motivador.',
    gradient: 'linear-gradient(135deg, #EEFBF3 0%, #D1F5DD 100%)',
    iconBg: '#A8E6C3',
    iconColor: '#3DA874',
    accentColor: '#5BBF8E',
  },
  {
    icon: Brain,
    title: 'Psicologia',
    description:
      'Suporte comportamental e emocional baseado em evidências, incluindo ABA aplicada e orientação parental.',
    gradient: 'linear-gradient(135deg, #EEF4FF 0%, #D4E4FF 100%)',
    iconBg: '#AECBFF',
    iconColor: '#4A7FD4',
    accentColor: '#6699EE',
  },
  {
    icon: Hand,
    title: 'Terapia Ocupacional',
    description:
      'Promoção da independência nas atividades do dia a dia, integração sensorial e desenvolvimento de habilidades adaptativas.',
    gradient: 'linear-gradient(135deg, #FFFBEB 0%, #FFF3C4 100%)',
    iconBg: '#FFE58F',
    iconColor: '#D4A83A',
    accentColor: '#F2C14E',
  },
  {
    icon: BookOpen,
    title: 'Psicopedagogia',
    description:
      'Avaliação e intervenção nos processos de aprendizagem, respeitando o ritmo e o perfil cognitivo de cada criança.',
    gradient: 'linear-gradient(135deg, #FFF0F3 0%, #EEF4FF 100%)',
    iconBg: '#FFB3C6',
    iconColor: '#D45D74',
    accentColor: '#E8738A',
  },
  {
    icon: GraduationCap,
    title: 'Supervisão Profissional',
    description:
      'Orientação avançada e capacitação sob medida para profissionais de saúde e educação, focada em práticas baseadas em evidências.',
    // Let's use a subtle sophisticated Purple color for Professionals to distinguish from kids 
    gradient: 'linear-gradient(135deg, #F4F0FF 0%, #E6D9FF 100%)',
    iconBg: '#CAB8FF',
    iconColor: '#7B52D5',
    accentColor: '#9B74F6',
  },
]

export default function Services() {
  return (
    <section id="modalidades" className="relative bg-abah-offwhite">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-abah-yellow-100 opacity-20 blur-3xl pointer-events-none" />

      {/* Section header */}
      <div className="text-center max-w-2xl mx-auto pt-20 pb-4 px-6 relative z-10">
        <span className="inline-block text-abah-blue-400 text-xs font-semibold font-heading uppercase tracking-widest mb-4">
          Modalidades
        </span>
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-abah-gray-800 mb-5">
          Cuidado integrado,{' '}
          <span className="text-abah-blue-400">resultado real</span>
        </h2>
        <p className="text-abah-gray-500 text-lg leading-relaxed font-light">
          Nossa equipe multidisciplinar trabalha de forma integrada,
          garantindo que cada intervenção seja complementar e potencialize
          os resultados do desenvolvimento da criança.
        </p>
      </div>

      <ScrollStack
        useWindowScroll={true}
        itemDistance={100}
        itemScale={0.03}
        itemStackDistance={30}
        stackPosition="20%"
        scaleEndPosition="10%"
        baseScale={0.85}
        blurAmount={0}
        className="scroll-stack-services"
      >
        {services.map((service) => {
          const Icon = service.icon
          return (
            <ScrollStackItem key={service.title} itemClassName="service-stack-card">
              <div
                className="service-card-inner"
                style={{ background: service.gradient }}
              >
                {/* Accent bar */}
                <div
                  className="service-card-accent"
                  style={{ backgroundColor: service.accentColor }}
                />

                <div className="service-card-content">
                  {/* Icon */}
                  <div
                    className="service-card-icon"
                    style={{ backgroundColor: service.iconBg }}
                  >
                    <Icon size={28} color={service.iconColor} strokeWidth={1.8} />
                  </div>

                  {/* Text */}
                  <div className="service-card-text">
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                  </div>
                </div>
              </div>
            </ScrollStackItem>
          )
        })}
      </ScrollStack>
    </section>
  )
}
