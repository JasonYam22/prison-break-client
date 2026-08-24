import { useNavigate, useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios"


function EditCharacterPage() {

    const navigate = useNavigate()
    const {characterId} = useParams()

    const [ name, setName ] = useState("")
    const [ age, setAge ] = useState("")
     const [ role, setRole ] = useState("")
      const [ description, setDescription ] = useState("")
const [ image, setImage] = useState("")
      
      useEffect(() =>{
 getData()  
      },[characterId])

      const getData = async() => {
        try{
            const response = await axios.get(`http://localhost:5005/characters/${characterId}`)
        //console.log(response.data)
         setName(response.data.name)
        setAge(response.data.age)
        setRole(response.data.role)
        setDescription(response.data.description) 
        setImage(response.data.image)
        } catch (error) {
            console.log(error)
        }
    }
 
      const handleSubmitButton = async (e) => {
        e.preventDefault();

try {
  const body = {
    name,
    image,
    age,
    role,
    description
  }

  const response = await axios.put (`http://localhost:5005/characters/${characterId}`, body)
  navigate("/characters")

} catch (error) {
    console.log(error)
}
}
  return (
    <div className="edit-character">

        {<h3>Edit Profile</h3>}
      
 <form onSubmit={handleSubmitButton}>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

 <label>Image:</label>
        <textarea
          type="text"
          name="image"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />

        <label>Age:</label>
        <textarea
          type="text"
          name="age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />

        
        <label>Role:</label>
        <textarea
          type="text"
          name="role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        />


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
  )
}

export default EditCharacterPage
