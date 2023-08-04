import React, { useEffect, useState } from 'react'
import Cocktail from '../components/Cocktail'
import { useLocalStorage } from '../hooks/useLocalStorage'

export default function Search({ search }) {
  const [searchResults, setSearchResults] = useState([])
  const [favorites, setFavorites] = useLocalStorage('favorites', [])

  useEffect(() => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`)
    .then(response => response.json())
    .then(data => setSearchResults(data.drinks))
    .catch(error => console.log(error))
  }, [search])

  return (
    <>
      <h1>Search Results</h1>
      <section className='cards-container'>
        {
          searchResults ?
            searchResults.map(obj => {
              return <Cocktail key={obj.idDrink} object={obj} favorites={favorites} setFavorites={setFavorites} />
            })
            : <h1>No results for {search}</h1>
        }
      </section>
    </>
  )
}
