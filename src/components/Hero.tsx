import { motion } from 'framer-motion'
import { ArrowRight, Heart, Sparkles } from 'lucide-react'

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden bg-abah-offwhite"
    >
      {/* Soft pastel blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ x: [0, 30, 0], y: [0, -40, 0], scale: [1, 1.05, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut', delay: 2.5 }}
          className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-abah-pink-100 opacity-60 blur-3xl transform-gpu will-change-transform backface-hidden"
        />
        <motion.div
          animate={{ x: [0, -20, 0], y: [0, 30, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut', delay: 3.5 }}
          className="absolute top-1/2 -left-40 w-[400px] h-[400px] rounded-full bg-abah-blue-100 opacity-50 blur-3xl transform-gpu will-change-transform backface-hidden"
        />
        <motion.div
          animate={{ x: [0, 25, 0], y: [0, 25, 0], scale: [1, 1.05, 1] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut', delay: 4.5 }}
          className="absolute bottom-0 right-1/4 w-[350px] h-[350px] rounded-full bg-abah-green-100 opacity-40 blur-3xl transform-gpu will-change-transform backface-hidden"
        />
        <motion.div
          animate={{ x: [0, -30, 0], y: [0, -20, 0], scale: [1, 1.08, 1] }}
          transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut', delay: 3.0 }}
          className="absolute top-1/4 left-1/3 w-[300px] h-[300px] rounded-full bg-abah-yellow-100 opacity-30 blur-3xl transform-gpu will-change-transform backface-hidden"
        />
      </div>

      <div className="container-abah relative z-10 pt-28 pb-20 lg:pt-32 lg:pb-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="max-w-xl">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-abah-pink-50 border border-abah-pink-200 rounded-full px-4 py-1.5 mb-8"
            >
              <Sparkles size={14} className="text-abah-pink-400" />
              <span className="text-abah-pink-500 text-xs font-semibold font-heading uppercase tracking-wider">
                Excelência em Cuidado Psicológico e Multidisciplinar
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="text-4xl md:text-5xl lg:text-[3.5rem] font-heading font-bold leading-[1.1] text-abah-gray-800 mb-6"
            >
              Desenvolvimento{' '}
              <span className="bg-gradient-to-r from-abah-pink-400 to-abah-blue-400 bg-clip-text text-transparent">
                com Base em Evidências
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-lg md:text-xl text-abah-gray-500 leading-relaxed mb-10 font-light"
            >
              Acreditamos que cada paciente é único. Na Clínica ABAH oferecemos abordagens multidisciplinares personalizadas, 
              com foco em terapias integradas e baseadas em evidências, para que cada indivíduo alcance o máximo de seu potencial, 
              autonomia e independência.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="#contato"
                className="group inline-flex items-center justify-center gap-2 bg-abah-green-300 hover:bg-abah-green-400 text-white font-heading font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:shadow-elevated"
              >
                Agendar Avaliação
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="/clinica"
                className="inline-flex items-center justify-center gap-2 border-2 border-abah-gray-200 hover:border-abah-pink-300 text-abah-gray-600 hover:text-abah-pink-500 font-heading font-medium px-8 py-4 rounded-full transition-all duration-300"
              >
                <Heart size={16} />
                Conheça a Clínica
              </a>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex items-center gap-6 mt-12 pt-8 border-t border-abah-gray-100"
            >
              <div className="text-center">
                <p className="font-heading font-bold text-2xl text-abah-gray-800">500+</p>
                <p className="text-xs text-abah-gray-400 font-medium">Famílias Atendidas</p>
              </div>
              <div className="w-px h-10 bg-abah-gray-200" />
              <div className="text-center">
                <p className="font-heading font-bold text-2xl text-abah-gray-800">5+</p>
                <p className="text-xs text-abah-gray-400 font-medium">Especialidades</p>
              </div>
              <div className="w-px h-10 bg-abah-gray-200" />
              <div className="text-center">
                <p className="font-heading font-bold text-2xl text-abah-gray-800">98%</p>
                <p className="text-xs text-abah-gray-400 font-medium">Satisfação</p>
              </div>
            </motion.div>
          </div>

          {/* Right — Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-abah-gray-100">
              <img
                src="/1colagem.webp"
                alt="Clínica ABAH — Estrutura e atendimento"
                className="w-full h-full object-cover"
                fetchPriority="high"
              />
              {/* Soft gradient overlay for polish */}
              <div className="absolute inset-0 bg-gradient-to-t from-abah-offwhite/20 via-transparent to-transparent" />
            </div>

            {/* Floating card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-card p-5 border border-abah-gray-100"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-abah-green-100 flex items-center justify-center">
                  <Sparkles size={18} className="text-abah-green-400" />
                </div>
                <div>
                  <p className="font-heading font-semibold text-sm text-abah-gray-800">Abordagem Baseada em ABA</p>
                  <p className="text-xs text-abah-gray-400">Resultados comprovados cientificamente</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
