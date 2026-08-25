import { Link } from 'react-router-dom'
import { useState} from "react"

function Navbar() {

const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="relative flex justify-between items-center p-4 border-b border-amber-50 text-4xl">
      <div className="w-8"></div>
  <Link to="/" className="title-nav font-['Rubik_Mono_One'] text-2xl tracking-wide uppercase">PRISON BREAK</Link>
    
    <button onClick={() => setMenuOpen(!menuOpen)}>☰</button>
    {menuOpen && (
        <div className="absolute top-20 right-4 bg-gray-800 border border-white flex flex-col justify-start">
            <Link to="/seasons" className="px-2 py-1 hover:bg-gray-700 text-sm">Seasons</Link>
            <Link to="/about" className="px-2 py-2 hover:bg-gray-700 text-sm">About</Link>
        </div>
    )}
    </nav>
  )
}

export default Navbar
