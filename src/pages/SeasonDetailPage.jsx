import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import CharacterCard from "../components/CharacterCard";
import { CircleLoader } from "react-spinners";

function SeasonDetailPage() {
  const { seasonId } = useParams();
  const navigate = useNavigate();

  const [season, setSeason] = useState([]);
  const [allCharacters, setAllCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getSeasonData();
  }, [seasonId]);

  const getSeasonData = async () => {
    try {
      const seasonResponse = await axios.get(
     `${import.meta.env.VITE_API_URL}/seasons/${seasonId}`,
      );

      const characterResponse = await axios.get(
      `${import.meta.env.VITE_API_URL}/characters`,
      );
      setSeason(seasonResponse.data);
      setAllCharacters(characterResponse.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);

     if (error.response && error.response.status === 404) {
        navigate("/not-found");
      } else {
        navigate("/error");
      }
    }
  };
if (isLoading) {
  return (
    <div className="flex justify-center items-center h-screen">
      <CircleLoader color="#f97316" size={60} />
    </div>
  );
}

  const seasonCharacters = allCharacters.filter((character) => {
    return season.characterIds.includes(character.id);
  });

  console.log("season:", season);
console.log("allCharacters:", allCharacters);
console.log("seasonCharacters:", seasonCharacters);


  return (
    <div className="flex flex-col pt-4 text-center">
      <h2 className="font-extrabold text-orange-300">{season.title}</h2>
      <h2><span className="font-extrabold text-orange-300">Year:</span> {season.year}</h2>
      <h2><span className="font-extrabold text-orange-300">Episodes:</span> {season.episodeCount}</h2>
      <p className="text-2xs"><span className="font-extrabold text-orange-300">Description:</span> {season.description}</p>
      <h3 className="pt-8 text-2xl font-bold text-orange-300">Included in this season:</h3>
      <div className="grid grid-cols-4 gap-8 p-4">
        {seasonCharacters.map((character) => {
          return <CharacterCard key={character.id} character={character} />
        })}
      </div>
    </div>
  );
}

export default SeasonDetailPage