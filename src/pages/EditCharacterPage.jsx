import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { CircleLoader } from "react-spinners";

function EditCharacterPage() {
  const navigate = useNavigate();
  const { characterId } = useParams();

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [role, setRole] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getData();
  }, [characterId]);

  const getData = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/characters/${characterId}`,
      );
      //console.log(response.data)
      setName(response.data.name);
      setAge(response.data.age);
      setRole(response.data.role);
      setDescription(response.data.description);
      setImage(response.data.image);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmitButton = async (e) => {
    e.preventDefault();

    try {
      const body = {
        name,
        image,
        age,
        role,
        description,
      };

      const response = await axios.put(
        `${import.meta.env.VITE_API_URL}/characters/${characterId}`,
        body,
      );
      navigate("/characters");
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
  return (
    <div
      className="bg-gray-800 border border-green-800 rounded-2xl p-6
     text-white w-150 mx-auto mt-10 mb-10 flex flex-col"
    >
      <h3 className="text-2xl font-bold mb-6 text-center text-orange-500">
        Edit Profile
      </h3>

      <form onSubmit={handleSubmitButton} className="space-y-1">
        <div className="flex flex-col">
          <label className="font-bold text-orange-500 mb-1">Name:</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full bg-gray border border-gray-700 rounded-3xl p-2 text-white"
          />
        </div>
        <div className="flex flex-col">
          <label className="font-bold text-orange-500 mb-1">Image:</label>
          <textarea
            type="text"
            name="image"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className="w-full bg-gray border border-gray-700 rounded-3xl p-1 text-white"
          />
        </div>
        <div className="flex flex-col">
          <label className="font-bold text-orange-500 mb-1">Age:</label>
          <textarea
            type="text"
            name="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="w-full bg-gray border border-gray-700 rounded-3xl p-1 text-white"
          />
        </div>
        <div className="flex flex-col">
          <label className="font-bold text-orange-500 mb-1">Role:</label>
          <textarea
            type="text"
            name="role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="w-full bg-gray border border-gray-700 rounded-3xl p-1 text-white"
          />
        </div>

        <div className="flex flex-col">
          <label className="font-bold text-orange-500 mb-1">Description:</label>
          <textarea
            rows="5"
            type="text"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full bg-gray border border-gray-700 rounded-3xl p-1 text-white overflow-y-auto"
          />
        </div>
        <div className="flex justify-center">
          <button
            className=" border border-black pl-12 pr-12 pt-2 pb-2 mt-4 hover:bg-green-400 bg-green-700 rounded-3xl text-2xl hover:scale-110 transition-all duration-300"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditCharacterPage;
