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
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 p-4 mx-auto">
        {allPrisons.map((prison) => {
    return (
        <div key={prison.id} className="grid  gap-8 p-4 border border-white-700 shadow-md">
            <h2 className="flex justify-center font-bold items-center text-center h-48 text-2xl text-orange-300">{prison.name}</h2>
            <img src={prison.image} height="50px" className="w-full h-48 object-cover rounded-lg"/>
            <h3 className="text-orange-300">{prison.location}</h3>
            <h3 className="text-orange-300">{prison.seasonAppearance}</h3>
            <h3 className="text-orange-300">{prison.type}</h3> 
<p className="text-m">{prison.description}</p>
</div>
    )
        })}
        </div>
  )
}

export default PrisonListPage
