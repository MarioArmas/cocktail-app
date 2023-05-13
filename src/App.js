import './App.css'
import { Route } from 'wouter'
import Home from './pages/Home'
import Favorites from './pages/Favorites'
import Search from './pages/Search'
import Navbar from './layouts/Navbar'

function App() {
  return (
    <div className='main-container'>
      <Navbar />
      <Route path='/' component={Home} />
      <Route path='/MyCocktails' component={Favorites} />
      <Route path='/search/:keyword'>
        {({ keyword }) => <Search search={keyword} />}
      </Route>
    </div>
  )
}

export default App
