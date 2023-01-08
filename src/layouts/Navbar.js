import React from 'react'
import './Navbar.css'

export default function Navbar() {
  return (
    <nav className='navbar'>
      <a href=''>My Cocktails</a>
      <div className='input-container'>
        <input type='text' placeholder='search' />
        <i className='fas fa-search'></i>
      </div>
    </nav>
  )
}
