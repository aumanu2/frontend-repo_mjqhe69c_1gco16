export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        <div className="order-2 md:order-1">
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900">About Me</h2>
          <p className="mt-3 text-gray-700 leading-relaxed">
            I'm a game developer focused on crafting playful, polished experiences.
            I enjoy gameplay programming, level design, and shader tinkering. My toolbox includes Unity, Unreal, and web tech like Three.js.
          </p>
          <ul className="mt-4 grid grid-cols-2 gap-3 text-sm">
            <li className="bg-gray-50 p-3 rounded-lg">Unity / C#</li>
            <li className="bg-gray-50 p-3 rounded-lg">Unreal / C++</li>
            <li className="bg-gray-50 p-3 rounded-lg">Godot / GDScript</li>
            <li className="bg-gray-50 p-3 rounded-lg">WebGL / Three.js</li>
          </ul>
        </div>
        <div className="order-1 md:order-2">
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
            <img src="https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200&auto=format&fit=crop" alt="setup" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-tr from-red-500/10 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  )
}
