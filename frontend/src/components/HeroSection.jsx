import React from 'react'

export default function HeroSection({ onTryNow }) {
  return (
    <section className="pt-16 md:pt-24 text-center fade-in-up">
      <div className="inline-block px-4 py-2 rounded-full glass text-sm text-neutral-300 border border-neutral-800">
        Smart Crypto Bot
      </div>
      <h1 className="mt-6 text-4xl md:text-6xl font-bold leading-tight">
        Greitas. Protingas. Pelningas. 👑
      </h1>
      <p className="mt-4 max-w-2xl mx-auto text-neutral-300">
        Patikimas Crypto Bot, galintis atnešti 15–25 % pelno per mėnesį.
      </p>

      <button
        onClick={onTryNow}
        className="mt-8 inline-flex items-center gap-2 px-7 py-3 rounded-full bg-neon-red text-white font-semibold transition-transform duration-200 hover:scale-105 focus:scale-105 shadow-neon cta-pulse"
      >
        Išbandyti dabar 🚀
      </button>

      <div className="mt-10 max-w-3xl mx-auto glass rounded-2xl p-4 border border-neutral-800">
        <p className="text-neutral-400 text-sm">
          Pasirink geriausiai judantį coin — botas pasirūpins greitais sandoriais realiu laiku. Viskas vyksta automatiškai, tau belieka stebėti augančią statistiką.
        </p>
      </div>
    </section>
  )
}


