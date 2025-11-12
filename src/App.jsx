import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Games from './components/Games'
import About from './components/About'
import Resume from './components/Resume'
import Contact from './components/Contact'

function App() {
  return (
    <div className="font-['Inter',ui-sans-serif] text-gray-900 bg-white">
      <Navbar />
      <main>
        <Hero />
        <Games />
        <About />
        <Resume />
        <Contact />
        <footer className="py-10 text-center text-sm text-gray-600">© {new Date().getFullYear()} Game Dev Portfolio. All rights reserved.</footer>
      </main>
    </div>
  )
}

export default App
