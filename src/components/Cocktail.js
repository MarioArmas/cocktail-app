import React, { useEffect, useRef, useState } from 'react'
import { useLocalStorage } from '../hooks/localstorage'
import './Cocktail.css'

export default function Cocktail({ id = 'https://www.thecocktaildb.com/api/json/v1/1/random.php' }) {
  const [like, setLike] = useState(false)
  const [likeDisabled, setLikeDisaled] = useState(false)
  const [modal, setModal] = useState(false)
  const [cocktail, setCocktail] = useState({})
  const [favorites, setFavorites] = useLocalStorage('favorites', [])
  const modalRef = useRef()

  useEffect(() => {
    fetch(id)
    .then(response => response.json())
    .then(data => setCocktail(data.drinks[0]))
    .catch(error => console.log(error))
  }, [id])

  useEffect(() => {
    if (favorites.includes(cocktail.idDrink)) setLike(true)
  }, [cocktail.idDrink])

  const handleLike = (e) => {
    e.preventDefault()
    setLikeDisaled(true)
    setLike(prev => !prev)
    
    !like
      ? setFavorites([...new Set([...favorites, cocktail.idDrink])])
      : setFavorites([...new Set(favorites.filter((id) => id !== cocktail.idDrink))])
    
    setLikeDisaled(false)
  }

  return (
    <>
      <div className='cocktail-container'>
        <img src={cocktail.strDrinkThumb} alt='' />
        <div className='details'>
          <h3>{cocktail.strDrink}</h3>
          <div className='link' onClick={() => setModal(true)}>See More</div>
        </div>
        {
          like
          ? <i className='fas fa-heart' onClick={handleLike} disabled={likeDisabled}></i>
          : <i className='far fa-heart' onClick={handleLike} disabled={likeDisabled}></i>
        }
        <div className='disclaimer'>
          {cocktail.strAlcoholic}
        </div>
      </div>
      {
        modal ?
          <div className='cocktail-modal' ref={modalRef} onClick={(e) => {if (e.target === modalRef.current) setModal(false)}}>
            <div className='cocktail-modal-content'>
              <div className='main-content'>
                <div className='data'>
                  <img src={cocktail.strDrinkThumb} alt='' />
                    {
                      like
                        ? <i className='fas fa-heart' onClick={handleLike} disabled={likeDisabled}></i>
                        : <i className='far fa-heart' onClick={handleLike} disabled={likeDisabled}></i>
                    }
                  <div className='category'>
                    {cocktail.strCategory}
                  </div>
                  <div className='disclaimer'>
                    {cocktail.strAlcoholic}
                  </div>
                </div>
                <div className='recipe'>
                  <h3>{cocktail.strDrink}</h3>
                  <p>{cocktail.strInstructions}</p>
                  <ul>
                    {cocktail.strIngredient1 ? <li>{cocktail.strIngredient1}: {cocktail.strMeasure1}</li> : null}
                    {cocktail.strIngredient2 ? <li>{cocktail.strIngredient2}: {cocktail.strMeasure2}</li> : null}
                    {cocktail.strIngredient3 ? <li>{cocktail.strIngredient3}: {cocktail.strMeasure3}</li> : null}
                    {cocktail.strIngredient4 ? <li>{cocktail.strIngredient4}: {cocktail.strMeasure4}</li> : null}
                    {cocktail.strIngredient5 ? <li>{cocktail.strIngredient5}: {cocktail.strMeasure5}</li> : null}
                    {cocktail.strIngredient6 ? <li>{cocktail.strIngredient6}: {cocktail.strMeasure6}</li> : null}
                    {cocktail.strIngredient7 ? <li>{cocktail.strIngredient7}: {cocktail.strMeasure7}</li> : null}
                    {cocktail.strIngredient8 ? <li>{cocktail.strIngredient8}: {cocktail.strMeasure8}</li> : null}
                    {cocktail.strIngredient9 ? <li>{cocktail.strIngredient9}: {cocktail.strMeasure9}</li> : null}
                    {cocktail.strIngredient10 ? <li>{cocktail.strIngredient10}: {cocktail.strMeasure10}</li> : null}
                    {cocktail.strIngredient11 ? <li>{cocktail.strIngredient11}: {cocktail.strMeasure11}</li> : null}
                    {cocktail.strIngredient12 ? <li>{cocktail.strIngredient12}: {cocktail.strMeasure12}</li> : null}
                    {cocktail.strIngredient13 ? <li>{cocktail.strIngredient13}: {cocktail.strMeasure13}</li> : null}
                    {cocktail.strIngredient14 ? <li>{cocktail.strIngredient14}: {cocktail.strMeasure14}</li> : null}
                    {cocktail.strIngredient15 ? <li>{cocktail.strIngredient15}: {cocktail.strMeasure15}</li> : null}
                  </ul>
                </div>
              </div>
              <i className='fas fa-times' onClick={() => setModal(false)}></i>
            </div>
          </div>
          : null
      }
    </>
  )
}
