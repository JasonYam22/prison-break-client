import { Link } from "react-router-dom"

function CharacterCard({character: { id, name, image, role, imagePosition} }) {
  return (
    <Link to={`/characters/${id}`} className="flex flex-col border border-green-900 bg-gray-800 rounded-lg shadow-md hover:shadow-lg hover:bg-blue-400 transition overflow-hidden">
      <img src={image} alt={name} className="w-full aspect-square object-cover"
      style={{ objectPosition: imagePosition || "center" }}/>
      <div className="p-4 flex flex-col items-center">
        <h2 className="text-lg font-bold text-center text-white">{name}</h2>
        <p className="text-sm text-gray-400 text-center">{role}</p>
      </div>
    </Link>
  )
}

export default CharacterCard
