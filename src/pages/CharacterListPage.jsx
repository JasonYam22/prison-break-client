 import { useState, useEffect, createElement } from "react"
import { Link } from "react-router-dom"
import axios from "axios"
//import CreateCharacterPage from "./CreateCharacterPage"
import CharacterDetailPage from "./CharacterDetailPage"

function CharacterListPage () {

    const [ allCharacters, setAllCharacters] = useState([])
    const [ isLoading, setIsLoading] = useState(true)

useEffect(() => {
    getAllCharacters()
},[])

const getAllCharacters = async() => {
try {

   const response = await axios.get("http://localhost:5005/characters")
setAllCharacters(response.data)
    setIsLoading(false)

} catch (error) {
    console.log(error)
}
}
if (isLoading) return <h3>Loading...</h3>

return(
    <div className="character-list">
{allCharacters.map((character) => {
    return (
        <div key={character.id} className="character-card">
            <h2>{character.name}</h2>
<img src={character.image} alt={character.name} height="50px"/>
<p>{character.role}</p>

<Link to={`/characters/${character.id}`}>
<button>View details</button>
</Link>
</div>
)
})}
</div> 
)
}
export default CharacterListPage