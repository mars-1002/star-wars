//npm modules
import { useState, useEffect } from "react"
import { Link } from 'react-router-dom'

// services
import * as starshipService from "../../services/sw-api"


const StarshipList = () => {
  const [starshipList, setStarshipList] = useState([])

  useEffect(() => {
    const fetchStarshipList = async () => {
      const starshipData = await starshipService.getAllStarships()
      setStarshipList(starshipData.results)
    }
    fetchStarshipList()
  }, [])

  if (!starshipList.length) return <h1>Loading spaceships...</h1>

  return (
    <>
      <h1>STAR WARS STARSHIPS</h1>
      <main>
        {starshipList.map(starship =>
          <div key={starship.name}>
            <Link to={`/starships/${starship.url}`}>{starship.name}</Link>
          </div>  
        )}
      </main>
    </>
  )
}

export default StarshipList