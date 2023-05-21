// npm modules
import { Routes, Route } from 'react-router-dom'

// pages
import StarshipList from './pages/StarshipList/StarshipList'
import StarshipDetails from './pages/StarshipDetails/StarshipDetails'

// css
import './App.css'

function App() {
  return (
    <Routes>
      <Route path='/' element={<StarshipList/>}/>
      <Route path='/:starshipId' element={<StarshipDetails/>}/>
    </Routes>
  )
}

export default App