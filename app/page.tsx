import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import DemoVideos from '@/components/DemoVideos'
import PurchaseSection from '@/components/PurchaseSection'
import Showcase from '@/components/Showcase'
import Features from '@/components/Features'
import Everyday from '@/components/Everyday'
import WhatsInTheBox from '@/components/WhatsInTheBox'
import FAQ from '@/components/FAQ'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="relative">
      <Nav />
      <Hero />
      <DemoVideos />
      <PurchaseSection />
      <Showcase />
      <Features />
      <Everyday />
      <WhatsInTheBox />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  )
}
