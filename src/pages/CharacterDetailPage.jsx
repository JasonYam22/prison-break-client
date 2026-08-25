import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import EditCharacterPage from "./EditCharacterPage";

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
        `http://localhost:5005/characters/${characterId}`,
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
      await axios.delete(`http://localhost:5005/characters/${characterId}`);
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
    return <h2>Loading...</h2>;
 }

  return (
    <div className="flex flex-col">
      <img src={character.image} alt="character" height="150px" />
      <h1>Name: {character.name}</h1>
      <h1>Age: {character.age}</h1>
      <h1>Role: {character.role}</h1>
      <h3>Description: {character.description}</h3>
      <button onClick={handleDeleteButton}>Delete</button>
            <button onClick={handleEditButton}>Edit</button>


    </div>
  );
}

export default CharacterDetailPage;
