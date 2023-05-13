import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'wouter'
import './Navbar.css'

export default function Navbar() {
  const [search, setSearch] = useState('')
  const [location, setLocation] = useLocation()
  
  const handleSearch = (e) => {
    setSearch(e.target.value)
  }

  useEffect(() => {
    if (search === '') {
      setLocation('/')
      return
    }
    setLocation(`/search/${search}`)
  }, [search])

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
        <input type='text' placeholder='Search' value={search} onChange={handleSearch} />
        <i className='fas fa-search'></i>
      </div>
    </nav>
  )
}
