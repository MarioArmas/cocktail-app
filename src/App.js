import './App.css'
import Home from './pages/Home'
import Favorites from './pages/Favorites'
import Navbar from './layouts/Navbar'

function App() {
  return (
    <div className='main-container'>
      <Navbar />
      <Home />
      <Favorites />
    </div>
  )
}

export default App
