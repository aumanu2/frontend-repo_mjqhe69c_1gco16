import { Joystick, Star, Rocket, Medal } from 'lucide-react'

const achievements = [
  { icon: Star, title: 'Shipped Title', desc: 'Released indie platformer on Steam with 1k+ wishlists.' },
  { icon: Medal, title: 'Game Jam Wins', desc: '3x winner with tight gameplay loops and polish.' },
  { icon: Rocket, title: 'Performance', desc: 'Optimized physics + batching for 40% FPS gain.' },
]

const skills = [
  'Gameplay Programming', 'AI/Pathfinding', 'Level Design', 'Shaders', 'Multiplayer', 'Tooling', 'Profiling'
]

export default function Resume() {
  return (
    <section id="resume" className="py-20 bg-[url('https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1400&auto=format&fit=crop')] bg-cover bg-center">
      <div className="bg-white/80 backdrop-blur-sm py-14">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center gap-3">
            <Joystick className="w-7 h-7 text-red-500" />
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900">Game-Themed Resume</h2>
          </div>

          <div className="mt-8 grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 grid gap-6">
              <div className="bg-white rounded-xl p-6 shadow border border-gray-100">
                <h3 className="font-extrabold text-xl">Experience</h3>
                <ul className="mt-4 space-y-4">
                  <li className="border-l-4 border-red-500 pl-4">
                    <p className="font-semibold">Gameplay Programmer — Indie Studio</p>
                    <p className="text-sm text-gray-600">2022 — Present • Unity, C#, Git</p>
                    <p className="text-gray-700 mt-1">Built core movement, combat, and progression systems; implemented levels and tooling.</p>
                  </li>
                  <li className="border-l-4 border-yellow-500 pl-4">
                    <p className="font-semibold">Technical Designer — Freelance</p>
                    <p className="text-sm text-gray-600">2020 — 2022 • Unreal, Blueprints</p>
                    <p className="text-gray-700 mt-1">Prototyped mechanics, authored shaders, and tuned feel with frame-by-frame polish.</p>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 shadow border border-gray-100">
                <h3 className="font-extrabold text-xl">Skills & Power-Ups</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {skills.map((s) => (
                    <span key={s} className="px-3 py-1.5 rounded-full bg-red-50 text-red-700 text-sm font-semibold border border-red-100">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <aside className="grid gap-6">
              <div className="bg-white rounded-xl p-6 shadow border border-gray-100">
                <h3 className="font-extrabold text-xl">Achievements</h3>
                <ul className="mt-4 space-y-3">
                  {achievements.map((a) => (
                    <li key={a.title} className="flex items-start gap-3">
                      <a.icon className="w-5 h-5 text-red-500 mt-1" />
                      <div>
                        <p className="font-semibold">{a.title}</p>
                        <p className="text-sm text-gray-600">{a.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 shadow border border-gray-100">
                <h3 className="font-extrabold text-xl">Download</h3>
                <p className="text-gray-700 mt-1">Grab a PDF of this resume.</p>
                <a href="#" className="mt-4 inline-block bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2 rounded-md">Download PDF</a>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  )
}
