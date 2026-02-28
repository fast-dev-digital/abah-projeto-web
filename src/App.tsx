import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Differentials from '@/components/Differentials'
import Authority from '@/components/Authority'
import Schools from '@/components/Schools'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Services from '@/components/Services'

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Differentials />
        <Authority />
        <Schools />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

