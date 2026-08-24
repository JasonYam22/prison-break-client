import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

function SeasonListPage() {
  const navigate = useNavigate();

  const [allSeasons, setAllSeasons] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getAllSeasons();
  }, []);

  const getAllSeasons = async () => {
    try {
      const response = await axios.get("http://localhost:5005/seasons");
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
    <div className="season-card">
      {allSeasons.map((season) => {
        return (
          <div key={season.id} className="season-card">
            <h2>{season.title}</h2>
            <h3>Year: {season.year}</h3>
            <h3>Episodes: {season.episodeCount}</h3>

        <Link to={`/seasons/${season.id}`}>Season {season.id} details</Link>
          </div>
        );
      })}
    </div>
  );
}

export default SeasonListPage;
