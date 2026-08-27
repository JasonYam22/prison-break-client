import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Searchbar from "../components/Searchbar";
import CharacterCard from "../components/CharacterCard";
import { CircleLoader } from "react-spinners";

function CharacterListPage() {
  const [allCharacters, setAllCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("");

  useEffect(() => {
    getAllCharacters();
  }, []);

  const getAllCharacters = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/characters`,
      );
      setAllCharacters(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <CircleLoader color="#f97316" size={60} />
      </div>
    );
  }

  const filterCharacters = allCharacters.filter((character) => {
    return character.name.toLowerCase().includes(query.toLowerCase());
  });

  return (
    <div>
      <div className="flex justify-center items-center gap-6 p-8">
        <Link to={"/characters/create"}>
          <button className="bg-green-900 text-white px-6 py-2 rounded-full font-semibold border border-green-700 shadow-md hover:bg-green-700 hover:scale-115 transition-all duration-300">
            ADD CHARACTER
          </button>
        </Link>
        <Searchbar query={query} setQuery={setQuery} />
      </div>
      <div className="grid grid-cols-4 gap-12 px-20">
        {filterCharacters.map((character) => {
          return <CharacterCard key={character.id} character={character} />;
        })}
      </div>
    </div>
  );
}
export default CharacterListPage;
