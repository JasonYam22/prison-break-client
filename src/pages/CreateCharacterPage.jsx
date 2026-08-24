import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function createCharacterPage() {

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [ image, setImage] = useState("")
  const [age, setAge] = useState("");
  const [role, setRole] = useState("");
  const [description, setDescription] = useState("");

const handleSubmitButton = async (e) => {
    e.preventDefault()

    try {
        const body = {
            name: name,
            image: image,
            age: age,
            role: role,
            description: description
        }

        const response = await axios.post("http://localhost:5005/characters", body)
navigate("/characters")

    } catch (error) {
        console.log(error)
    }
}

  return (
    <div className="create-character">
      {<h3>Create character</h3>}

      <form onSubmit={handleSubmitButton}>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
<br />
         <label>Image:</label>
        <textarea
          type="text"
          name="image"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
<br />
        <label>Age:</label>
        <textarea
          type="text"
          name="age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
<br />
        <label>Role:</label>
        <textarea
          type="text"
          name="role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        />
<br />
        <label>Description:</label>
        <textarea
          type="text"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default createCharacterPage;
