// npm modules
import { useState, useEffect } from 'react'
import { useParams, Link} from 'react-router-dom'

// services
import * as starshipService from '../../services/sw-api'

const StarshipDetails = () => {
  const { starshipId } = useParams()
  const [starship, setStarship] = useState({})

  useEffect(() => {
    const fetchStarship = async () => {
      const data = await starshipService.getStarship(starshipId)
      setStarship(data)
    }
    fetchStarship()
  }, [starshipId])

  if (!starship.name) return <h1>Loading spaceships...</h1>

  return(
        <main>
          <p>Name: {starship.name}</p>
          <p>Model: {starship.model}</p>
          <Link to={`/`}>Back</Link>
        </main>
      )
}

export default StarshipDetails