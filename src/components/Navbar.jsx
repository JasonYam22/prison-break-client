import { Link } from 'react-router-dom'
import { useState} from "react"

function Navbar() {

const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav>
        <Link to="/" className="title-nav">PRISON BREAK</Link>
    
    <button onClick={() => setMenuOpen(!menuOpen)}>☰</button>
    {menuOpen && (
        <div>
            <Link to="/seasons/1">Season 1</Link>
            <br />
            <Link to="/seasons/2">Season 2</Link>
            <br />
            <Link to="/seasons/3">Season 3</Link>
            <br />
            <Link to="/seasons/4">Season 4</Link>
            <br />
            <Link to="/seasons/5">Season 5</Link>
            <br />
            <Link to="/about">About</Link>
        </div>
    )}
    </nav>
  )
}

export default Navbar
