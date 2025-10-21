import React, { useEffect, useState } from 'react'
import { getUMKM } from '../lib/supabase'

export default function UMKM() {
  const [list, setList] = useState([])

  useEffect(() => {
    (async () => {
      try {
        const data = await getUMKM()
        setList(data || [])
      } catch (e) {
        console.error(e)
      }
    })()
  }, [])

  return (
    <div>
      <h2 className="text-xl mb-2">Katalog UMKM</h2>
      {list.length === 0 && <p>Belum ada data UMKM.</p>}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {list.map(item => (
          <div key={item.id} className="p-3 border rounded bg-white">
            <h3 className="font-semibold">{item.name}</h3>
            <p className="text-sm">{item.description}</p>
            <p className="text-xs mt-2">Kontak: {item.phone}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
