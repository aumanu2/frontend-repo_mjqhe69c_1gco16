import { useState } from 'react'
import { ExternalLink, Gamepad2, Play } from 'lucide-react'

const initialGames = [
  {
    title: 'Pixel Runner',
    description: 'Endless runner built with Unity featuring procedural levels and power-ups.',
    tags: ['Unity', 'C#', 'Mobile'],
    link: '#',
    cover: 'https://images.unsplash.com/photo-1616116214898-5b3c030004a7?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Dungeon Crawler',
    description: 'Top-down roguelike prototype with pathfinding and loot system.',
    tags: ['Godot', 'GDScript', 'PC'],
    link: '#',
    cover: 'https://images.unsplash.com/photo-1542751110-97427bbecf20?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Web Racer',
    description: 'Three.js racing demo with physics and multiplayer lobby.',
    tags: ['Three.js', 'TypeScript', 'WebGL'],
    link: '#',
    cover: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200&auto=format&fit=crop',
  },
]

export default function Games() {
  const [games] = useState(initialGames)
  return (
    <section id="games" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900">Games</h2>
            <p className="text-gray-600 mt-2">A selection of playable prototypes and shipped titles.</p>
          </div>
          <Gamepad2 className="w-8 h-8 text-red-500 hidden sm:block" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {games.map((g) => (
            <article key={g.title} className="group bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition-shadow border border-gray-100">
              <div className="relative">
                <img src={g.cover} alt={g.title} className="w-full h-44 object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <button className="absolute bottom-3 right-3 inline-flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white text-sm font-semibold px-3 py-1.5 rounded shadow">
                  <Play className="w-4 h-4" /> Play
                </button>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg text-gray-900">{g.title}</h3>
                <p className="text-gray-600 text-sm mt-1">{g.description}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {g.tags.map((t) => (
                    <span key={t} className="text-xs font-medium bg-gray-100 text-gray-800 px-2 py-1 rounded">
                      {t}
                    </span>
                  ))}
                </div>
                <a href={g.link} className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-red-600 hover:text-red-700">
                  View details <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
