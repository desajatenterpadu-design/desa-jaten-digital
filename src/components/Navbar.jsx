import React from 'react'
export default function Navbar({ onNavigate }) {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto p-3 flex justify-between items-center">
        <div className="font-bold text-lg">Desa Jaten</div>
        <div className="space-x-3">
          <button onClick={() => onNavigate('home')} className="hover:underline">Home</button>
          <button onClick={() => onNavigate('profil')} className="hover:underline">Profil</button>
          <button onClick={() => onNavigate('program')} className="hover:underline">Program</button>
          <button onClick={() => onNavigate('pengaduan')} className="hover:underline">Pengaduan</button>
          <button onClick={() => onNavigate('umkm')} className="hover:underline">UMKM</button>
          <button onClick={() => onNavigate('faq')} className="hover:underline">FAQ</button>
        </div>
      </div>
    </nav>
  )
}
