import { useState, useEffect, createElement } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Searchbar from "../components/Searchbar";
import CharacterDetailPage from "./CharacterDetailPage";

function CharacterListPage() {
  const [allCharacters, setAllCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("");

  useEffect(() => {
    getAllCharacters();
  }, []);

  const getAllCharacters = async () => {
    try {
      const response = await axios.get("http://localhost:5005/characters");
      setAllCharacters(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  if (isLoading) return <h3>Loading...</h3>;

  const filterCharacters = allCharacters.filter((character) => {
   return character.name.toLowerCase().includes(query.toLowerCase());
  });

  return (
    <div className="character-list">
        <br />
          <div className="create-button">
              <Link to={"/characters/create"}>
                <button>Create character</button>
              </Link>
            </div>
<br />
      <Searchbar query={query} setQuery={setQuery} />

      {filterCharacters.map(({id, name, image, role}) => {
        return (
          <div key={id} className="character-card">
            <h2>{name}</h2>
            <img src={image} height="200px" />
            <p>{role}</p>

            <Link to={`/characters/${id}`}>
              <button>View details</button>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
export default CharacterListPage;
