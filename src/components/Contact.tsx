import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Send, Phone, MapPin, Clock, MessageCircle } from 'lucide-react'

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [formData, setFormData] = useState({ name: '', phone: '', childAge: '', message: '' })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    
    // Máscara para telefone: (XX) XXXXX-XXXX
    if (name === 'phone') {
      const digits = value.replace(/\D/g, '').substring(0, 11)
      let formatted = digits
      
      if (digits.length > 2) {
        formatted = `(${digits.substring(0, 2)}) ${digits.substring(2)}`
      }
      if (digits.length > 7) {
        formatted = `(${digits.substring(0, 2)}) ${digits.substring(2, 7)}-${digits.substring(7, 11)}`
      }
      
      setFormData(prev => ({ ...prev, [name]: formatted }))
      return
    }
    
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Formata a mensagem para o WhatsApp
    const message = `Olá! Meu nome é *${formData.name}*.\n\n` +
                    `Gostaria de falar sobre o meu filho(a), que tem *${formData.childAge}*.\n\n` +
                    `*Motivo do contato / Breve Relato:*\n${formData.message}`
                    
    const whatsappUrl = `https://wa.me/5519996563759?text=${encodeURIComponent(message)}`
    
    window.open(whatsappUrl, '_blank')
  }

  return (
    <section id="contato" className="section-padding bg-abah-offwhite relative overflow-hidden">
      <div className="absolute -bottom-32 -right-32 w-[400px] h-[400px] rounded-full bg-abah-pink-100 opacity-20 blur-3xl pointer-events-none" />

      <div className="container-abah relative z-10" ref={ref}>
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block text-abah-green-400 text-xs font-semibold font-heading uppercase tracking-widest mb-4"
          >
            Contato
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl font-heading font-bold text-abah-gray-800 mb-5"
          >
            Vamos conversar sobre o{' '}
            <span className="text-abah-green-400">futuro do seu filho</span>
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-10 max-w-5xl mx-auto">
          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3 bg-white rounded-3xl shadow-card border border-abah-gray-100 p-8 md:p-10 space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-abah-gray-600 text-sm font-medium mb-2">Nome do Responsável</label>
                <input
                  type="text" name="name" value={formData.name} onChange={handleChange} required
                  className="w-full bg-abah-cream border border-abah-gray-100 rounded-xl px-4 py-3 text-abah-gray-700 text-sm placeholder:text-abah-gray-400 focus:outline-none focus:ring-2 focus:ring-abah-green-200 focus:border-transparent transition-all"
                  placeholder="Seu nome completo"
                />
              </div>
              <div>
                <label className="block text-abah-gray-600 text-sm font-medium mb-2">Telefone/WhatsApp</label>
                <input
                  type="tel" name="phone" value={formData.phone} onChange={handleChange} required
                  className="w-full bg-abah-cream border border-abah-gray-100 rounded-xl px-4 py-3 text-abah-gray-700 text-sm placeholder:text-abah-gray-400 focus:outline-none focus:ring-2 focus:ring-abah-green-200 focus:border-transparent transition-all"
                  placeholder="(00) 00000-0000"
                />
              </div>
            </div>
            <div>
              <label className="block text-abah-gray-600 text-sm font-medium mb-2">Idade do Paciente</label>
              <input
                type="text" name="childAge" value={formData.childAge} onChange={handleChange} required
                className="w-full bg-abah-cream border border-abah-gray-100 rounded-xl px-4 py-3 text-abah-gray-700 text-sm placeholder:text-abah-gray-400 focus:outline-none focus:ring-2 focus:ring-abah-green-200 focus:border-transparent transition-all"
                placeholder="Ex: 4 anos"
              />
            </div>
            <div>
              <label className="block text-abah-gray-600 text-sm font-medium mb-2">Motivo do Contato</label>
              <textarea
                name="message" value={formData.message} onChange={handleChange} rows={4} required
                className="w-full bg-abah-cream border border-abah-gray-100 rounded-xl px-4 py-3 text-abah-gray-700 text-sm placeholder:text-abah-gray-400 focus:outline-none focus:ring-2 focus:ring-abah-green-200 focus:border-transparent transition-all resize-none"
                placeholder="Conte-nos um pouco sobre o paciente e como podemos ajudar..."
              />
            </div>
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-abah-green-300 hover:bg-abah-green-400 text-white font-heading font-semibold py-4 rounded-xl transition-all duration-300 hover:shadow-elevated cursor-pointer"
            >
              <Send size={18} />
              Enviar pelo WhatsApp
            </button>
          </motion.form>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-2 space-y-6"
          >
            <a
              href="https://wa.me/5519996563759"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-green-50 border border-green-200 rounded-2xl p-5 hover:shadow-card transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-green-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                <MessageCircle size={22} className="text-white" />
              </div>
              <div>
                <p className="font-heading font-semibold text-abah-gray-800 text-sm">WhatsApp</p>
                <p className="text-abah-gray-500 text-xs">Atendimento rápido e personalizado</p>
              </div>
            </a>

            {[
              { icon: Phone, label: 'Telefone', value: '(19) 99656-3759' },
              { icon: MapPin, label: 'Endereço', value: 'Rua Júlio César do Nascimento, nº 446' },
              { icon: Clock, label: 'Horário', value: 'Seg-Sex: 8h às 18h' },
            ].map((info) => {
              const Icon = info.icon
              return (
                <div key={info.label} className="flex items-center gap-4 bg-white rounded-2xl p-5 border border-abah-gray-100">
                  <div className="w-10 h-10 rounded-xl bg-abah-cream flex items-center justify-center">
                    <Icon size={18} className="text-abah-gray-500" />
                  </div>
                  <div>
                    <p className="font-heading font-semibold text-abah-gray-800 text-sm">{info.label}</p>
                    <p className="text-abah-gray-500 text-xs">{info.value}</p>
                  </div>
                </div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
