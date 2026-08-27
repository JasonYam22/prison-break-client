import { Link } from 'react-router-dom'
import { useState} from "react"

function Navbar() {

const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="relative flex justify-between items-center p-4 border-b border-amber-50 prison-font text-3xl">
      <div className="w-8"></div>
  <Link to="/" className="prison-font text-3xl">PRISON BREAK</Link>
    
    <button onClick={() => setMenuOpen(!menuOpen)} className="text-2xl hover:scale-125 transition-all duration-300 rounded-2xl">☰</button>
    
  
      <div
  className={`absolute top-20 right-4 bg-gray-800 border border-white flex flex-col justify-start transition-all duration-300 rounded-2xl origin-top
    ${menuOpen ? "opacity-100 scale-100 translate-y-0 pointer-events-auto" : "opacity-0 scale-90 -translate-y-8 pointer-events-none"}`}
>
            <Link to="/about" className="px-2 py-1 hover:bg-gray-700 text-xl rounded-2xl">About</Link>
        </div>
    
    </nav>
  )
}

export default Navbar
