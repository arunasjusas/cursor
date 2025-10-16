import React from 'react'
import { Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from 'chart.js'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend)

function generateMonthlyGrowth(seed = 0, base = 1, growth = 0.2) {
  // Simulate 30 days with ~20% total monthly growth
  const days = Array.from({ length: 30 }, (_, i) => i + 1)
  let value = base
  const vals = days.map((_, i) => {
    const noise = ((Math.sin((i + seed) * 1.3) + Math.cos((i + seed) * 0.7)) * 0.01)
    value *= 1 + (growth / 30) + noise
    return Number(value.toFixed(3))
  })
  return { days, vals }
}

export default function ProfitChart({ coin, seed }) {
  const { days, vals } = React.useMemo(() => generateMonthlyGrowth(seed, 1, 0.2), [seed])

  const data = {
    labels: days.map((d) => `Diena ${d}`),
    datasets: [
      {
        label: `${coin} pelno simuliacija (~+20%/mėn)`,
        data: vals,
        borderColor: '#ff1f4b',
        backgroundColor: 'rgba(255,31,75,0.2)',
        tension: 0.3,
        fill: true,
        pointRadius: 0,
      },
    ],
  }

  const options = {
    responsive: true,
    plugins: {
      legend: { labels: { color: '#ddd' } },
      tooltip: { mode: 'index', intersect: false },
    },
    scales: {
      x: { ticks: { color: '#aaa' }, grid: { color: 'rgba(255,255,255,0.06)' } },
      y: { ticks: { color: '#aaa' }, grid: { color: 'rgba(255,255,255,0.06)' } },
    },
  }

  return (
    <div className="glass rounded-2xl p-6 border border-neutral-800">
      <h3 className="text-xl font-semibold mb-4">Pelnas per 30 dienų</h3>
      <Line data={data} options={options} height={120} />
    </div>
  )
}


