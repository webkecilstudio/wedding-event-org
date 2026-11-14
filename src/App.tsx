import Footer from './components/Footer'
import Navbar from './components/Navbar'
import WhatsAppFloat from './components/WhatsAppFloat'
import About from './sections/About'
import Contact from './sections/Contact'
import Countdown from './sections/Countdown'
import CtaSection from './sections/CtaSection'
import EventPackages from './sections/EventPackages'
import Faq from './sections/Faq'
import Hero from './sections/Hero'
import Portfolio from './sections/Portfolio'
import Process from './sections/Process'
import Services from './sections/Services'
import Team from './sections/Team'
import Testimonials from './sections/Testimonials'
import Tools from './sections/Tools'
import WeddingPackages from './sections/WeddingPackages'
import WhyChooseUs from './sections/WhyChooseUs'

function App() {
  return (
    <div className="min-h-[100dvh] bg-paper text-ink dark:bg-charcoal dark:text-mist">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <WeddingPackages />
        <EventPackages />
        <WhyChooseUs />
        <Portfolio />
        <Team />
        <Process />
        <Testimonials />
        <Tools />
        <Countdown />
        <Faq />
        <CtaSection />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}

export default App
