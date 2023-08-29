import React, { useState } from 'react'
import Cocktail from '../components/Cocktail'
import { useLocalStorage } from '../hooks/useLocalStorage'
import './Home.css'

export default function Home() {
  const [favorites, setFavorites] = useLocalStorage('favorites', [])
  const [random, setRandom] = useState(true)

  const handleClick = () => {
    setRandom(prev => !prev)
  }

  return (
    <>
      <h1>Random Cocktail</h1>
      <section style={{display: 'flex', flexDirection: 'column', gap: '4em'}} className='cards-container'>
        <Cocktail favorites={favorites} setFavorites={setFavorites} reRender={random} />
      <button onClick={() => handleClick()}>Get random cocktail</button>
      </section>
    </>
  )
}
