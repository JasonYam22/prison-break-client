import { Link } from 'react-router-dom'
import { useState} from "react"

function Navbar() {

const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="navbar">
        <Link to="/" className="title-nav">PRISON BREAK</Link>
    
    <button onClick={() => setMenuOpen(!menuOpen)}>☰</button>
    {menuOpen && (
        <div>
            <Link to="/seasons">Seasons</Link>
            <br/>
            <Link to="/about">About</Link>
        </div>
    )}
    </nav>
  )
}

export default Navbar
