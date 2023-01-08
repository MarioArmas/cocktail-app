import React from 'react'
import Navbar from '../layouts/Navbar'
import Cocktail from '../components/Cocktail'
import './Home.css'

export default function Home() {
  return (
    <div className='main-container'>
      <Navbar />
      <h1>Cocktails</h1>
      <div className='cards-container'>
        <Cocktail />
      </div>
    </div>
  )
}
