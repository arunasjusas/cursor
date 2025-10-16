import React from 'react'

export default function FeaturesSection() {
  const features = [
    {
      title: 'Pasirink coin',
      desc: 'Vartotojas pasirenka aktyviausią coin’ą.',
    },
    {
      title: 'Botas prekiauja',
      desc: 'Botas pradeda vykdyti greitus trade sandorius.',
    },
    {
      title: 'Pelnas',
      desc: 'Galimas pelnas: 15–25 % per mėnesį nuo sumos.',
    },
  ]

  return (
    <section className="mt-16 grid md:grid-cols-3 gap-6">
      {features.map((f, i) => (
        <div key={f.title} className="glass rounded-2xl p-6 border border-neutral-800 hover:shadow-neon transition-shadow duration-300">
          <div className="text-neon-red font-bold text-lg">{String(i + 1).padStart(2, '0')}</div>
          <h3 className="mt-3 text-xl font-semibold">{f.title}</h3>
          <p className="mt-2 text-neutral-300">{f.desc}</p>
        </div>
      ))}
    </section>
  )
}


