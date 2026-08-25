import { Link } from "react-router-dom"

function CharacterCard({ character: {id, name, image, role}}) {
  return (
    <div className="character-card">
      <img src={image} alt={name} height="100px" />
      <h2>{name}</h2>
      <p>{role}</p>
    </div>
  )
}

export default CharacterCard
