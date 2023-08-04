import React from 'react'
import Cocktail from '../components/Cocktail'
import { useLocalStorage } from '../hooks/useLocalStorage'
import './Home.css'

export default function Home() {
  const [favorites, setFavorites] = useLocalStorage('favorites', [])

  return (
    <>
      <h1>Random Cocktail</h1>
      <section className='cards-container'>
        <Cocktail favorites={favorites} setFavorites={setFavorites} />
      </section>
    </>
  )
}
