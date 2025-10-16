import React from 'react'
import axios from 'axios'

export default function ContactForm() {
  const [name, setName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [status, setStatus] = React.useState('idle') // idle | loading | success | error
  const [message, setMessage] = React.useState('')

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('loading')
    setMessage('')
    try {
      const res = await axios.post('http://localhost:5000/api/subscribe', { name, email })
      if (res.data?.ok) {
        setStatus('success')
        setMessage('Ačiū! Užsiregistravote sėkmingai.')
        setName('')
        setEmail('')
      } else {
        setStatus('success')
        setMessage(res.data?.message || 'Viskas paruošta!')
      }
    } catch (err) {
      const msg = err?.response?.data?.error || 'Įvyko klaida. Bandykite dar kartą.'
      setStatus('error')
      setMessage(msg)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="glass rounded-2xl p-6 border border-neutral-800 max-w-xl mx-auto">
      <h3 className="text-xl font-semibold">Prisijunk prie laukiančiųjų sąrašo</h3>
      <p className="mt-1 text-neutral-300 text-sm">Gauk naujienas ir ankstyvą prieigą.</p>
      <div className="mt-5 grid gap-4">
        <input
          type="text"
          placeholder="Vardas"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full rounded-xl bg-black/40 border border-neutral-800 px-4 py-3 outline-none focus:border-neon-red transition-colors"
          required
        />
        <input
          type="email"
          placeholder="El. paštas"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-xl bg-black/40 border border-neutral-800 px-4 py-3 outline-none focus:border-neon-red transition-colors"
          required
        />
        <button
          disabled={status === 'loading'}
          className="mt-2 inline-flex justify-center items-center gap-2 px-6 py-3 rounded-xl bg-neon-red text-white font-semibold transition-transform duration-200 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed shadow-neon"
        >
          {status === 'loading' ? 'Siunčiama...' : 'Siųsti'}
        </button>
        {message && (
          <div className={`text-sm ${status === 'error' ? 'text-red-400' : 'text-green-400'}`}>{message}</div>
        )}
        <div className="text-xs text-neutral-400 mt-1">
          Prekyba kriptovaliutomis gali būti rizikinga. Pelnas nėra garantuotas.
        </div>
      </div>
    </form>
  )
}


