// npm modules
import { Route, Routes } from 'react-router-dom'

// pages
import StarshipList from './pages/StarshipList/StarshipList'
import StarshipDetails from './pages/StarshipDetails/StarshipDetails'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path='/' element={<StarshipList/>} />
      {/* <Route path='/> */}
    </Routes>
  )
}

export default App
