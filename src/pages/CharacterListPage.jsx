import { useState, useEffect} from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Searchbar from "../components/Searchbar";
import CharacterCard from "../components/CharacterCard";

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
  <div>
   <div className="flex justify-start items-center gap-8 p-4">
        
              <Link to={"/characters/create"}>
                <button className="bg-green-900 text-white px-6 py-2 rounded-full font-semibold border border-green-700 shadow-md hover:bg-green-700 hover:scale-105 transition">ADD CHARACTER</button>
              </Link>
      <Searchbar query={query} setQuery={setQuery} />
</div>
    <div className="grid grid-cols-5 gap-8 p-4">{filterCharacters.map((character) => {
       return <CharacterCard key={character.id} character={character} />
      })}
    </div>
    </div>
  );
}
export default CharacterListPage;
