import React from 'react'
import HeroSection from './components/HeroSection.jsx'
import FeaturesSection from './components/FeaturesSection.jsx'
import CoinPicker from './components/CoinPicker.jsx'
import ProfitChart from './components/ProfitChart.jsx'
import ContactForm from './components/ContactForm.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  const [selectedCoin, setSelectedCoin] = React.useState('BTC')
  const [chartDataSeed, setChartDataSeed] = React.useState(0)

  return (
    <div className="min-h-screen font-poppins bg-gradient-to-b from-black via-neutral-950 to-black overflow-x-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <HeroSection onTryNow={() => {
          const el = document.getElementById('contact')
          if (el) el.scrollIntoView({ behavior: 'smooth' })
        }} />
        <FeaturesSection />
        <div className="mt-16 grid lg:grid-cols-2 gap-8">
          <CoinPicker selected={selectedCoin} onSelect={(c) => { setSelectedCoin(c); setChartDataSeed(prev => prev + 1) }} />
          <ProfitChart coin={selectedCoin} seed={chartDataSeed} />
        </div>
        <div id="contact" className="mt-20">
          <ContactForm />
        </div>
      </div>
      <Footer />
    </div>
  )
}


