import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Profil from './pages/Profil'
import Program from './pages/Program'
import Pengaduan from './pages/Pengaduan'
import UMKM from './pages/UMKM'
import FAQ from './pages/FAQ'

export default function App() {
  const [route, setRoute] = useState('home')
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar onNavigate={setRoute} />
      <main className="flex-1 container mx-auto p-4">
        {route === 'home' && <Home />}
        {route === 'profil' && <Profil />}
        {route === 'program' && <Program />}
        {route === 'pengaduan' && <Pengaduan />}
        {route === 'umkm' && <UMKM />}
        {route === 'faq' && <FAQ />}
      </main>
      <Footer />
    </div>
  )
}
