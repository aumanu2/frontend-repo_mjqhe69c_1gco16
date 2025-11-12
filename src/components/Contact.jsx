import { Mail, Github, Linkedin } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-black text-gray-900">Contact</h2>
        <p className="mt-2 text-gray-600">Open to roles, collabs, and jam invites.</p>

        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <form className="bg-white rounded-xl p-6 shadow border border-gray-100">
            <div className="grid gap-4">
              <input type="text" placeholder="Your name" className="w-full border border-gray-200 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500" />
              <input type="email" placeholder="Email" className="w-full border border-gray-200 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500" />
              <textarea placeholder="Message" rows="5" className="w-full border border-gray-200 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500" />
              <button type="button" className="bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2 rounded-md w-max">Send</button>
            </div>
          </form>
          <div className="bg-white rounded-xl p-6 shadow border border-gray-100">
            <p className="text-gray-700">Prefer email or socials? Reach me here:</p>
            <ul className="mt-4 space-y-3">
              <li className="flex items-center gap-3"><Mail className="w-5 h-5 text-red-500" /> <a href="mailto:dev@example.com" className="font-semibold hover:text-red-600">dev@example.com</a></li>
              <li className="flex items-center gap-3"><Github className="w-5 h-5 text-red-500" /> <a href="https://github.com/" target="_blank" className="font-semibold hover:text-red-600">GitHub</a></li>
              <li className="flex items-center gap-3"><Linkedin className="w-5 h-5 text-red-500" /> <a href="https://linkedin.com/" target="_blank" className="font-semibold hover:text-red-600">LinkedIn</a></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
