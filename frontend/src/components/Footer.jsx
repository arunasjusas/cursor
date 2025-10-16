import React from 'react'

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-neutral-900/60">
      <div className="max-w-6xl mx-auto px-4 py-8 text-sm text-neutral-400 flex flex-col md:flex-row gap-2 md:items-center md:justify-between">
        <div>
          © {new Date().getFullYear()} Smart Crypto Bot — Visi teisės saugomos.
        </div>
        <div className="flex gap-4">
          <a className="hover:text-neon-red transition-colors" href="#">Kontaktai</a>
          <a className="hover:text-neon-red transition-colors" href="#">Privatumas</a>
        </div>
      </div>
    </footer>
  )
}


