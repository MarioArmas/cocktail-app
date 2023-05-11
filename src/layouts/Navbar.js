import React from 'react'
import { Link } from 'wouter'
import './Navbar.css'

export default function Navbar() {
  return (
    <nav className='navbar'>
      <div className='links'>
        <Link href='/'>
          <a>Home</a>
        </Link>
        <Link href='/MyCocktails'>
          <a>My Cocktails</a>
        </Link>
      </div>
      <div className='input-container'>
        <input type='text' placeholder='search' />
        <i className='fas fa-search'></i>
      </div>
    </nav>
  )
}
