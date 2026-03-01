import { motion, type Variants } from 'framer-motion'
import { ArrowRight, Heart, Shield, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
}

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
}

export default function AboutPage() {
  return (
    <div className="bg-abah-offwhite min-h-screen pt-24 pb-16">
      {/* Hero Section Interno */}
      <section className="container-abah py-16 text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-abah-pink-100/50 text-abah-pink-500 font-medium text-sm mb-6">
            <Sparkles size={16} />
            A Clínica
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-abah-gray-800 tracking-tight mb-6">
            Nossa Casa,{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-abah-pink-400 to-abah-blue-400">
              Seu Porto Seguro
            </span>
          </h1>
          <p className="text-lg md:text-xl text-abah-gray-600 font-body leading-relaxed max-w-2xl mx-auto">
            Mais do que um espaço de terapia, a Clínica ABAH foi desenhada para ser um ambiente seguro, acolhedor e altamente equipado para o desenvolvimento do seu filho.
          </p>
        </motion.div>
      </section>

      {/* Filosofia ABAH */}
      <section className="container-abah py-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-white rounded-3xl p-8 md:p-12 shadow-soft"
        >
          <motion.div variants={fadeInUp} className="space-y-6">
            <h2 className="text-3xl font-heading font-bold text-abah-gray-800">
              O elo entre a<br />
              <span className="text-abah-green-500">Ciência e o Afeto</span>
            </h2>
            <p className="text-abah-gray-600 text-lg leading-relaxed">
              Nosso propósito é oferecer intervenções baseadas na ciência ABA, garantindo o mais alto nível de excelência clínica sem abrir mão do calor humano. Acreditamos que a terapia só atinge seu potencial máximo quando envolve a família.
            </p>
            <p className="text-abah-gray-600 text-lg leading-relaxed">
              Cada sorriso, cada pequeno avanço celebrado conosco é resultado de muito estudo, profissionais qualificados e um ambiente preparado para abraçar e cuidar de toda a família.
            </p>
            
            <div className="flex gap-4 pt-4">
              <div className="bg-abah-green-50 p-4 rounded-2xl flex-1 border border-abah-green-100">
                <Shield className="text-abah-green-500 mb-2" size={24} />
                <h3 className="font-heading font-semibold text-abah-gray-800 mb-1">Ciência (ABA)</h3>
                <p className="text-sm text-abah-gray-600">Práticas baseadas em evidências rigorosas.</p>
              </div>
              <div className="bg-abah-pink-50 p-4 rounded-2xl flex-1 border border-abah-pink-100">
                <Heart className="text-abah-pink-400 mb-2" size={24} />
                <h3 className="font-heading font-semibold text-abah-gray-800 mb-1">Afeto Familiar</h3>
                <p className="text-sm text-abah-gray-600">Acolhimento aos pais e vínculo verdadeiro.</p>
              </div>
            </div>
          </motion.div>
          <motion.div variants={fadeInUp} className="relative h-full min-h-[400px] rounded-2xl overflow-hidden bg-abah-cream flex items-center justify-center border border-abah-gray-200">
             {/* Substituir por uma foto ilustrativa do time ou logo da aba */}
             <div className="absolute inset-0 bg-gradient-to-tr from-abah-pink-200/40 to-abah-blue-200/40 z-0"></div>
             <img 
               src="/2recepcao.webp" 
               alt="Acolhimento na Clínica" 
               loading="lazy"
               className="w-full h-full object-cover relative z-10"
             />
          </motion.div>
        </motion.div>
      </section>

      {/* Tour Visual (Galeria) */}
      <section className="container-abah py-16 md:py-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeInUp}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-abah-gray-800 mb-4">
            Conheça Nossa Estrutura
          </h2>
          <p className="text-abah-gray-600 text-lg max-w-2xl mx-auto">
            Infraestrutura de ponta projetada, em cada detalhe, para o conforto e o sucesso terapêutico da sua família.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[250px] md:auto-rows-[300px]"
        >
          {/* Recepção - Maior */}
          <motion.div variants={fadeInUp} className="md:col-span-2 md:row-span-2 relative rounded-3xl overflow-hidden group shadow-soft">
            <img 
              src="/2recepcao.webp" 
              alt="Recepção Acolhedora" 
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-abah-gray-800/80 via-transparent to-transparent opacity-80"></div>
            <div className="absolute bottom-0 left-0 p-8">
              <h3 className="text-white font-heading text-2xl font-semibold mb-2">Recepção Acolhedora</h3>
              <p className="text-white/80 font-body">O primeiro abraço que a sua família recebe.</p>
            </div>
          </motion.div>

          {/* Sala Terapia */}
          <motion.div variants={fadeInUp} className="relative rounded-3xl overflow-hidden group shadow-soft">
            <img 
              src="/3salaterapia.webp" 
              alt="Sala de Terapia" 
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-abah-gray-800/80 via-transparent to-transparent opacity-80"></div>
            <div className="absolute bottom-0 left-0 p-6">
              <h3 className="text-white font-heading text-lg font-semibold mb-1">Salas de Terapia</h3>
              <p className="text-white/80 text-sm font-body">Preparadas para cada fase do desenvolvimento.</p>
            </div>
          </motion.div>

          {/* Integração Sensorial */}
          <motion.div variants={fadeInUp} className="relative rounded-3xl overflow-hidden group shadow-soft">
            <img 
              src="/4sensorial.webp" 
              alt="Sala de Integração Sensorial" 
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-abah-gray-800/80 via-transparent to-transparent opacity-80"></div>
            <div className="absolute bottom-0 left-0 p-6">
              <h3 className="text-white font-heading text-lg font-semibold mb-1">Integração Sensorial</h3>
              <p className="text-white/80 text-sm font-body">Equipamentos de alto padrão.</p>
            </div>
          </motion.div>

          {/* Convivência - Destaque largo na parte inferior */}
          <motion.div variants={fadeInUp} className="md:col-span-3 h-[300px] md:h-auto md:row-span-1 relative rounded-3xl overflow-hidden group shadow-soft">
            <img 
              src="/5convivencia.webp" 
              alt="Espaço de Convivência" 
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-abah-gray-800/80 via-transparent to-transparent opacity-80"></div>
            <div className="absolute bottom-0 left-0 p-6 md:p-8">
              <h3 className="text-white font-heading text-2xl font-semibold mb-2">Espaços de Convivência</h3>
              <p className="text-white/80 font-body">Áreas de socialização seguras e estimulantes para interação.</p>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* CTA Final */}
      <section className="container-abah py-12 md:py-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={fadeInUp}
          className="bg-abah-green-50 rounded-3xl p-8 md:p-12 text-center border border-abah-green-100 relative overflow-hidden"
        >
          {/* Decoração sutil de fundo */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-abah-green-200/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-abah-pink-200/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
          
          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-abah-gray-800">
              Sua família acolhida em cada detalhe
            </h2>
            <p className="text-abah-gray-600 text-lg">
              Venha tomar um café conosco e conhecer nosso espaço. Teremos prazer em mostrar pessoalmente tudo o que preparamos para o seu filho.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                to="/#contato" 
                className="inline-flex items-center gap-2 bg-abah-green-400 hover:bg-abah-green-500 text-white font-heading font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:-translate-y-1 shadow-card hover:shadow-elevated"
              >
                Agendar uma visita
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  )
}
