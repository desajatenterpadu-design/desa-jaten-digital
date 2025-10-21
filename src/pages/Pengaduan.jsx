import React, { useState } from 'react'
import { supabase } from '../lib/supabase'

export default function Pengaduan() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [success, setSuccess] = useState('')
  const [loading, setLoading] = useState(false)

  async function submit() {
    if (!message || !name) return alert('Nama dan isi pengaduan wajib diisi.')
    setLoading(true)
    const { data, error } = await supabase.from('pengaduan').insert([{ name, email, message }])
    setLoading(false)
    if (error) return alert('Gagal kirim: ' + error.message)
    setSuccess('Terima kasih! Aduan sudah diterima.')
    setName(''); setEmail(''); setMessage('')
  }

  return (
    <div>
      <h2 className="text-xl mb-2">Form Pengaduan</h2>
      {success && <div className="bg-green-100 p-2 rounded mb-2">{success}</div>}
      <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Nama" className="block mb-2 p-2 border" />
      <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email (opsional)" className="block mb-2 p-2 border" />
      <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Isi pengaduan" className="block mb-2 p-2 border" />
      <button onClick={submit} disabled={loading} className="px-4 py-2 bg-blue-600 text-white rounded">{loading ? 'Mengirim...' : 'Kirim'}</button>
    </div>
  )
}
