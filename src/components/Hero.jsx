import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="home" className="relative h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/OIGfFUmCnZ3VD8gH/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto h-full px-4 flex items-center">
        <div className="bg-white/60 backdrop-blur-md rounded-2xl p-6 sm:p-10 shadow-xl pointer-events-auto">
          <p className="text-xs uppercase tracking-[0.3em] text-gray-700">Game Developer Portfolio</p>
          <h1 className="mt-2 text-3xl sm:text-5xl font-black leading-tight text-gray-900 drop-shadow-sm">
            Building Playful Worlds<br />with Code & Creativity
          </h1>
          <p className="mt-4 text-gray-700 max-w-xl">
            I craft interactive experiences using Unity, Unreal, and web technologies.
            Explore my titles, prototypes, and the game-themed resume below.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#games" className="px-5 py-2.5 rounded-lg bg-red-500 hover:bg-red-600 text-white font-semibold shadow">
              Play My Games
            </a>
            <a href="#resume" className="px-5 py-2.5 rounded-lg bg-white/80 hover:bg-white text-gray-900 font-semibold shadow border border-white/60">
              View Game Resume
            </a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
    </section>
  )
}
