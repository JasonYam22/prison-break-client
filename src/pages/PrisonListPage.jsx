import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useState, useEffect} from "react"

function PrisonListPage() {

    const [ allPrisons, setAllPrisons] = useState([])
    const [ isLoading, setIsLoading ] = useState(false)

useEffect(() => {
    getAllPrisons()
},[])

const getAllPrisons = async() => {
try {

   const response = await axios.get("http://localhost:5005/prisons")
setAllPrisons(response.data)
    setIsLoading(false)

} catch (error) {
    console.log(error)
    
}
}
if (isLoading) return <h3>Loading...</h3>

  return (
    <div className="prison-list">
        {allPrisons.map((prison) => {
    return (
        <div key={prison.id} className="prison-card">
            <h2>{prison.name}</h2>
            <h3>{prison.location}</h3>
            <h3>{prison.seasonAppearance}</h3>
            <h3>{prison.type}</h3>
{/* <img src={prison.image} alt={prison.name} height="50px"/> */}
<p>{prison.description}</p>
</div>
    )
        })}
        </div>
  )
}

export default PrisonListPage
