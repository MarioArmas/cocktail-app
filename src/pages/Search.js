import React, { useEffect, useState } from 'react'
import Cocktail from '../components/Cocktail'

export default function Search({ search }) {
  const [searchResults, setSearchResults] = useState([])

  useEffect(() => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`)
    .then(response => response.json())
    .then(data => setSearchResults(data.drinks))
    .catch(error => console.log(error))
  }, [search])

  return (
    <>
      <h1>Search Results</h1>
      <div className='cards-container'>
        {
          searchResults ?
            searchResults.map(obj => {
              return <Cocktail key={obj.idDrink} object={obj} />
            })
            : <h1>No results for {search}</h1>
        }
      </div>
    </>
  )
}
