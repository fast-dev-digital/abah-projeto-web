import { Heart } from 'lucide-react'

const links = [
  { label: 'Início', href: '#inicio' },
  { label: 'A Clínica', href: '#clinica' },
  { label: 'Modalidades', href: '#modalidades' },
  { label: 'Diferencial', href: '#diferencial' },
  { label: 'Equipe', href: '#autoridade' },
  { label: 'Escolas', href: '#escolas' },
  { label: 'Contato', href: '#contato' },
]

export default function Footer() {
  return (
    <footer className="bg-abah-gray-800 text-abah-gray-400 pt-16 pb-8">
      <div className="container-abah">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4 w-fit">
              <img src="/logo-ABAH.png" alt="Clínica ABAH Logo" className="h-16 w-auto object-contain drop-shadow" />
            </div>
            <p className="text-sm leading-relaxed max-w-xs">
              Desenvolvimento infantil com base em evidências. Cuidado multidisciplinar 
              para crianças neurodivergentes.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-heading font-semibold text-white text-sm mb-4">Navegação</h4>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm hover:text-white transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact  */}
          <div>
            <h4 className="font-heading font-semibold text-white text-sm mb-4">Contato</h4>
            <ul className="space-y-2 text-sm">
              <li>(00) 0000-0000</li>
              <li>contato@clinicaabah.com.br</li>
              <li>Rua Exemplo, 123 — Centro</li>
              <li>Seg-Sex: 8h às 18h</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-abah-gray-700 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs">
            © {new Date().getFullYear()} Clínica ABAH. Todos os direitos reservados.
          </p>
          <p className="text-xs flex items-center gap-1">
            Feito com <Heart size={12} className="text-abah-pink-400" /> por Fast Development
          </p>
        </div>
      </div>
    </footer>
  )
}
