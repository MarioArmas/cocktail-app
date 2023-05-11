import './App.css'
import Home from './pages/Home'
import Favorites from './pages/Favorites'
import Navbar from './layouts/Navbar'
import { Route } from 'wouter'

function App() {
  return (
    <div className='main-container'>
      <Navbar />
      <Route path='/' component={Home} />
      <Route path='/MyCocktails' component={Favorites} />
    </div>
  )
}

export default App
