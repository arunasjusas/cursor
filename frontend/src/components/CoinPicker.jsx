import React from 'react'

const COINS = [
  { symbol: 'BTC', name: 'Bitcoin' },
  { symbol: 'ETH', name: 'Ethereum' },
  { symbol: 'SOL', name: 'Solana' },
  { symbol: 'ADA', name: 'Cardano' },
  { symbol: 'XRP', name: 'XRP' },
]

export default function CoinPicker({ selected, onSelect }) {
  return (
    <div className="glass rounded-2xl p-6 border border-neutral-800">
      <h3 className="text-xl font-semibold">Pasirink coin</h3>
      <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-3">
        {COINS.map((c) => {
          const isActive = selected === c.symbol
          return (
            <button
              key={c.symbol}
              onClick={() => onSelect(c.symbol)}
              className={`rounded-xl px-4 py-3 text-left transition-all duration-200 border ${isActive ? 'bg-neon-red/20 border-neon-red shadow-neon scale-[1.02]' : 'border-neutral-800 hover:border-neon-red/60 hover:scale-105'}`}
            >
              <div className="text-sm text-neutral-300">{c.name}</div>
              <div className="text-2xl font-bold">{c.symbol}</div>
            </button>
          )
        })}
      </div>
    </div>
  )
}


