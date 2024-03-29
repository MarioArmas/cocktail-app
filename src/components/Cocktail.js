import React, { useEffect, useRef, useState } from 'react'
import { Close, HeartIcon } from './Icons'
import Spinner from './Spinner'
import './Cocktail.css'

export default function Cocktail({ id = 'https://www.thecocktaildb.com/api/json/v1/1/random.php', object, favorites, setFavorites, reRender }) {
  const [like, setLike] = useState(false)
  const [likeDisabled, setLikeDisaled] = useState(false)
  const [modal, setModal] = useState(false)
  const [cocktail, setCocktail] = useState({})
  const modalRef = useRef()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const controller = new AbortController()
    setLike(false)

    if (object == null){
      fetch(id, { signal: controller.signal })
        .then(response => response.json())
        .then(data => setCocktail(data.drinks[0]))
        .catch(error => console.log(error))
    } else {
      setCocktail(object)
    }

    return () => controller.abort()
  }, [id, object, reRender])

  useEffect(() => {
    if (favorites.includes(cocktail.idDrink)) setLike(true)
  }, [cocktail.idDrink, favorites])

  useEffect(() => {
    setLoading(true)
  }, [reRender])

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
        {loading && <Spinner />}
        <img style={loading ? {display: 'none'} : {}} src={cocktail.strDrinkThumb} alt='' onLoad={() => setLoading(false)} />
        <div className='details'>
          <h3>{cocktail.strDrink}</h3>
          <div className='link' onClick={() => setModal(true)}>See More</div>
        </div>
        <HeartIcon className='heart-icon' fill={like ? '' : 'evenodd'} onClick={handleLike} disabled={likeDisabled} />
        {
          !loading &&
          <div className='disclaimer'>
            {cocktail.strAlcoholic}
          </div>
        }
      </div>
      {
        modal ?
          <div className='cocktail-modal' ref={modalRef} onClick={(e) => {if (e.target === modalRef.current) setModal(false)}}>
            <div className='cocktail-modal-content'>
              <section className='main-content'>
                <article className='data'>
                  <img src={cocktail.strDrinkThumb} alt='' />
                  <HeartIcon className='heart-icon' fill={like ? '' : 'evenodd'} onClick={handleLike} disabled={likeDisabled} />
                  <div className='category'>
                    {cocktail.strCategory}
                  </div>
                  <div className='disclaimer'>
                    {cocktail.strAlcoholic}
                  </div>
                </article>
                <article className='recipe'>
                  <h3>{cocktail.strDrink}</h3>
                  <p>{cocktail.strInstructions}</p>
                  <ul>
                    {
                      Array.from(Array(15).keys()).map((num) => {
                        return (
                          cocktail['strIngredient' + num]
                            ? <li>{cocktail['strIngredient' + num]}: {cocktail['strMeasure' + num]}</li>
                            : null
                        )
                      })
                    }
                  </ul>
                </article>
              </section>
              <Close className={'close-icon'} onClick={() => setModal(false)} />
            </div>
          </div>
          : null
      }
    </>
  )
}
