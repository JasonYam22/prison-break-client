import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Searchbar from "../components/Searchbar";
import ActorCard from "../components/ActorCard";
import { CircleLoader } from "react-spinners";

function ActorListPage() {
  const [allActors, setAllActors] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("");

  useEffect(() => {
    getAllActors();
  }, []);

  const getAllActors = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/actors`,
      );
      setAllActors(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <CircleLoader color="blue" size={60} />
      </div>
    );
  }

  const filterActors = allActors.filter((actor) => {
    return (
      actor.name.toLowerCase().includes(query.toLowerCase()) ||
      actor.realName.toLowerCase().includes(query.toLowerCase()) ||
      actor.knownFor.toLowerCase().includes(query.toLowerCase()) ||
      actor.role.toLowerCase().includes(query.toLowerCase())
    );
  });

  return (
    <div>
      <div className="flex justify-center items-center gap-8 p-4">
        <Searchbar query={query} setQuery={setQuery} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  p-4 gap-12 px-20">
        {filterActors.map((actor) => {
          return <ActorCard key={actor.name} actor={actor} />;
        })}
      </div>
    </div>
  );
}
export default ActorListPage;
