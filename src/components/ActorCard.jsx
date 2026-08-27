import { Link } from "react-router-dom"

function ActorCard({actor: {image, name, realName, role, knownFor}}) {
  return (
    <div to={"/actors"} className="flex flex-col border border-green-900 bg-gray-800 rounded-lg shadow-md">
      <img src={image} className="w-full aspect-square object-cover"/>
      <div className="p-4 flex flex-col items-center">
        <h2 className="text-lg font-bold text-center text-white"> <span className="text-orange-500">{realName}</span> / {name}</h2>
        <p className="text-xl text-gray-400 text-center"><span className=" text-orange-500">Popular role:  </span>{role}</p>
         <p className="text-xl text-gray-400 text-center"><span className="text-orange-500">Show appearances:  </span> {knownFor}</p>
      </div>
   </div>
  )
}

export default ActorCard
