import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import CharacterCard from "../components/CharacterCard";

function SeasonListPage() {
  const navigate = useNavigate();

  const [allSeasons, setAllSeasons] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getAllSeasons();
  }, []);

  const getAllSeasons = async () => {
    try {
     const response = await axios.get(`${import.meta.env.VITE_API_URL}/seasons`);
      setAllSeasons(response.data);
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

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 p6 justify-items-center">
      {allSeasons.map((season) => {
        return (
         
          <div key={season.id} className="flex flex-col items-center text-center gap-2 border border-amber-400 py-4 m-5 rounded-3xl h-45 w-40 bg-gray-700">
            <h2>{season.title}</h2>
            <h3>Year: {season.year}</h3>
            <h3>Episodes: {season.episodeCount}</h3>

        <Link to={`/seasons/${season.id}`} className="w-fit px-2 py-0 border rounded-2xl text-white-700  border-blue-500 hover:bg-blue-300 hover:scale-105 shadow-lg transition mt-4">Season {season.id} details</Link>
          </div>
        );
      })}
    </div>
  );
}

export default SeasonListPage;
