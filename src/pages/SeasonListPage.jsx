import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useState, useEffect} from "react"

function SeasonListPage() {
     const [ allSeasons, setAllSeasons] = useState([])
    const [ isLoading, setIsLoading ] = useState(false)

useEffect(() => {
    getAllSeasons()
},[])

const getAllSeasons = async() => {
try {

   const response = await axios.get("http://localhost:5005/seasons")
setAllSeasons(response.data)
    setIsLoading(false)

} catch (error) {
    console.log(error)
    
}
}
if (isLoading) return <h3>Loading...</h3>
  return (
    <div className="season-list">
        {allSeasons.map((season) => {
    return (
        <div key={season.id} className="season-card">
            <h2>{season.title}</h2>
            <h3>{season.year}</h3>
            <h3>{season.episodeCount}</h3>
           
<p>{season.description}</p>
{/* <ul>
    <li>{season.characterIds.}</li>
</ul> */}
</div>
    )
        })}
        </div>
  )
}

export default SeasonListPage
