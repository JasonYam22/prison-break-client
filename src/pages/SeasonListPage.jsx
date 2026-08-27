import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import CharacterCard from "../components/CharacterCard";
import { CircleLoader } from "react-spinners";

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
if (isLoading) {
  return (
    <div className="flex justify-center items-center h-screen">
      <CircleLoader color="#f97316" size={60} />
    </div>
  );
}

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-8 max-w-6xl mx-auto">
      {allSeasons.map((season) => {
        return (
         
          <div key={season.id} className="flex flex-col items-center text-center gap-2 border border-gray-700 py-6 px-4 rounded-xl h-auto w-64 bg-gray-900 hover:scale-110 shadow-lg hover:bg-blue-700 hover:border-blue-500 transition-all duration-300">
            <Link to={`/seasons/${season.id}`}>
            <h2 className="text-2xl text-white font-bold tracking-wide">{season.title}</h2>
            <h3 className="text-sm text-gray-400">Year: {season.year}</h3>
            <h3 className="text-sm text-gray-400">Episodes: {season.episodeCount}</h3>
</Link>
    
          </div>
        );
      })}
    </div>
  );
}

export default SeasonListPage;
