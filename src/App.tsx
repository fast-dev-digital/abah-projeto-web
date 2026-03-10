import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Differentials from '@/components/Differentials'
import Authority from '@/components/Authority'
import Schools from '@/components/Schools'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import CookieBanner from '@/components/CookieBanner'
import Services from '@/components/Services'
import AboutPage from '@/pages/AboutPage'
import ServicesPage from '@/pages/ServicesPage'
import DifferentialsPage from '@/pages/DifferentialsPage'
import ScrollToTop from '@/components/ScrollToTop'

function HomePage() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Differentials />
      <Authority />
      <Schools />
      <Contact />
    </main>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/clinica" element={<AboutPage />} />
          <Route path="/especialidades" element={<ServicesPage />} />
          <Route path="/diferencial" element={<DifferentialsPage />} />
        </Routes>
        <Footer />
        <CookieBanner />
      </div>
    </BrowserRouter>
  )
}

