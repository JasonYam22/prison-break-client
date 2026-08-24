import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

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
        `http://localhost:5005/seasons/${seasonId}`,
      );

      const characterResponse = await axios.get(
        "http://localhost:5005/characters",
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
  if (isLoading) return <h3>Loading...</h3>;

  const seasonCharacters = allCharacters.filter((character) => {
    return season.characterIds.includes(character.id);
  });

  console.log("season:", season);
console.log("allCharacters:", allCharacters);
console.log("seasonCharacters:", seasonCharacters);


  return (
    <div className="season-detail-page">
      <h2>{season.title}</h2>
      <h2>{season.year}</h2>
      <h2>{season.episodeCount}</h2>
      <p>{season.description}</p>
      <h3>Included in this season:</h3>
      <ul>
        {seasonCharacters.map((character) => {
          return <li key={character.id}>{character.name}</li>;
        })}
      </ul>
    </div>
  );
}

export default SeasonDetailPage