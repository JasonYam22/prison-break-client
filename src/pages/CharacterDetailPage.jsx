import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import EditCharacterPage from "./EditCharacterPage";
import { CircleLoader } from "react-spinners";

function CharacterDetailPage() {
  const { characterId } = useParams();
  const navigate = useNavigate();

  const [character, setCharacter] = useState(null);
  const [isLoading, setIsLoading] = useState(true);



  useEffect(() => {
    getCharacter();
  }, [characterId]);

  const getCharacter = async () => {
    setIsLoading(true);

    try {
      const response = await axios.get(
   `${import.meta.env.VITE_API_URL}/characters/${characterId}`,
      );

      //console.log(response)
      setCharacter(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);

      if (error.response.status === 404) {
        navigate("/not-found");
      } else {
        navigate("/error");
      }
    }
  };

  const handleDeleteButton = async () => {
    try {
  await axios.delete(`${import.meta.env.VITE_API_URL}/characters/${characterId}`);
      navigate("/characters")
    } catch (error) {
      console.log(error);

      if (error.status && error.response.status === 404) {
        navigate("/not-found");
      } else {
        navigate("/error");
      }
    }
  };

 const handleEditButton = () => {
      navigate(`/characters/${characterId}/edit`)
 }
if (isLoading) {
  return (
    <div className="flex justify-center items-center h-screen">
      <CircleLoader color="#f97316" size={60} />
    </div>
  );
}

  return (
    <div className="bg-gray-800 border border-green-800 rounded-2xl p-6
     text-white w-150 mx-auto mt-10 mb-10">
    
    <div className="flex gap-6 justify-center">
      <img src={character.image} className="w-50 h-70 object-cover rounded-xl border border-white" />

      <div className="space-y-2 flex-1 flex flex-col justify-evenly">
      <h1><span className="text-orange-500 font-extrabold">Name:</span> {character.name}</h1>
      <h1><span className="text-orange-500 font-extrabold">Age:</span> {character.age}</h1>
      <h1><span className="text-orange-500 font-extrabold">Role:</span> {character.role}</h1>
      </div>
       </div>
      <h3 className="mt-6 pt-4 border-t border-black-100"><span className="text-orange-500 font-bold">Description: </span>{character.description}</h3>
      <div className="flex justify-center mt-7 ml-9">
      <button onClick={handleDeleteButton} className="mr-16 border border-black rounded-2xl bg-red-800 text-black font-bold pl-3 pr-3 pt-1 hover:bg-red-200 hover:scale-120 transition-all duration-300">Delete</button>
            <button onClick={handleEditButton} className="mr-16 border border-white rounded-2xl bg-green-800 text-black font-bold pl-6 pr-6 pt-1  hover:bg-green-400 hover:scale-120 transition-all duration-300">Edit</button>
            </div>
    </div>
  );
}

export default CharacterDetailPage;
