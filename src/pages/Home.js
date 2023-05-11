import React from 'react'
import Cocktail from '../components/Cocktail'
import './Home.css'

export default function Home() {
  return (
    <>
      <h1>Random Cocktail</h1>
      <div className='cards-container'>
        <Cocktail />
      </div>
    </>
  )
}
