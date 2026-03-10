import { MessageCircle, Brain, Activity, Hand, BookOpen, Heart, Footprints, Music } from 'lucide-react'
import ScrollStack, { ScrollStackItem } from '@/components/ScrollStack'

const services = [
  {
    icon: Heart,
    title: 'Psicoterapia',
    description: 'Acolhimento e suporte emocional focados no bem-estar.',
    gradient: 'linear-gradient(135deg, #F4F0FF 0%, #E6D9FF 100%)',
    iconBg: '#CAB8FF', iconColor: '#7B52D5', accentColor: '#9B74F6',
  },
  {
    icon: Brain,
    title: 'Psicologia com abordagem em Análise do Comportamento Aplicada (ABA)',
    description: 'Suporte comportamental baseado na Análise do Comportamento Aplicada.',
    gradient: 'linear-gradient(135deg, #EEF4FF 0%, #D4E4FF 100%)',
    iconBg: '#AECBFF', iconColor: '#4A7FD4', accentColor: '#6699EE',
  },
  {
    icon: MessageCircle,
    title: 'Fonoaudiologia',
    description: 'Avaliação e intervenção em linguagem, fala e comunicação.',
    gradient: 'linear-gradient(135deg, #FFF0F3 0%, #FFD6E0 100%)',
    iconBg: '#FFB3C6', iconColor: '#D45D74', accentColor: '#E8738A',
  },
  {
    icon: Hand,
    title: 'Terapia Ocupacional com abordagem em Integração Sensorial de Ayres, incluindo desenvolvimento de autonomia nas Atividades de Vida Diária (AVD) e Atividades de Vida Prática (AVP)',
    description: 'Promoção da independência e integração sensorial.',
    gradient: 'linear-gradient(135deg, #FFFBEB 0%, #FFF3C4 100%)',
    iconBg: '#FFE58F', iconColor: '#D4A83A', accentColor: '#F2C14E',
  },
  {
    icon: Activity,
    title: 'Fisioterapia',
    description: 'Desenvolvimento motor global, equilíbrio e coordenação.',
    gradient: 'linear-gradient(135deg, #EEFBF3 0%, #D1F5DD 100%)',
    iconBg: '#A8E6C3', iconColor: '#3DA874', accentColor: '#5BBF8E',
  },
  {
    icon: BookOpen,
    title: 'Psicopedagogia',
    description: 'Avaliação e intervenção nos processos de aprendizagem.',
    gradient: 'linear-gradient(135deg, #FFF0EE 0%, #FFE4DD 100%)',
    iconBg: '#FFC8B8', iconColor: '#D47559', accentColor: '#E88B73',
  },
  {
    icon: Footprints,
    title: 'Psicomotricidade',
    description: 'Estimulação do desenvolvimento motor e afetivo.',
    gradient: 'linear-gradient(135deg, #F0FFF4 0%, #D4FFDE 100%)',
    iconBg: '#A8FFBF', iconColor: '#3DD474', accentColor: '#5BE88B',
  },
  {
    icon: Music,
    title: 'Musicoterapia',
    description: 'Uso reflexivo da música para facilitar a comunicação.',
    gradient: 'linear-gradient(135deg, #FFF0F3 0%, #EEF4FF 100%)',
    iconBg: '#FFB3C6', iconColor: '#D45D74', accentColor: '#E8738A',
  },
]

export default function Services() {
  return (
    <section id="especialidades" className="relative bg-abah-offwhite">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-abah-yellow-100 opacity-20 blur-3xl pointer-events-none" />

      {/* Section header */}
      <div className="text-center max-w-2xl mx-auto pt-16 pb-0 px-6 relative z-10">
        <span className="inline-block text-abah-blue-400 text-xs font-semibold font-heading uppercase tracking-widest mb-4">
          Especialidades
        </span>
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-abah-gray-800 mb-5">
          Cuidado integrado,{' '}
          <span className="text-abah-blue-400">resultado real</span>
        </h2>
        <p className="text-abah-gray-500 text-lg leading-relaxed font-light">
          Nossa equipe multidisciplinar trabalha de forma integrada,
          garantindo que cada intervenção seja complementar e potencialize
          os resultados do desenvolvimento do paciente.
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
