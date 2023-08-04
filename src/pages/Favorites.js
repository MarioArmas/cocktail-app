import React from 'react'
import Cocktail from '../components/Cocktail'
import { useLocalStorage } from '../hooks/useLocalStorage'
import './Favorites.css'

export default function Favorites() {
  const [favorites, setFavorites] = useLocalStorage('favorites', [])

  return (
    <>
      <h1>Favorite Cocktails</h1>
      <section className='cards-container'>
        {
          favorites.length !== 0 ?
            favorites.map(id => {
              return <Cocktail key={id} id={`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`} favorites={favorites} setFavorites={setFavorites} />
            })
            : <h1>You have no cocktails in your favorites :(</h1>
        }
      </section>
    </>
  )
}
