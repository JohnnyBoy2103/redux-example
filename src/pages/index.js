import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Creators as StarWarsActions } from '../ducks/starWars'
import showPageToasts from '../helpers/toasts'
import StarWarsMeme from '../assets/images/starwars-meme.png'

const Home = () => {
  const dispatch = useDispatch()
  const personData = useSelector(state => state.listPersonData.person)
  const loading = useSelector(state => state.listPersonData.loading)
  const successful = useSelector(state => state.listPersonData.successful)
  const error = useSelector(state => state.listPersonData.error)
  const [personId, setPersonId] = useState(0)

  useEffect(() => {
    showPageToasts(loading, error, successful)
  }, [loading, error, successful])

  const handleChange = e => {
    const id = Number(e.currentTarget.value)
    setPersonId(id)
  }

  const handleClick = () => {
    dispatch(StarWarsActions.clear())
    dispatch(StarWarsActions.getPerson(personId))
  }

  return (
    <>
      <div className='columns is-multiline is-centered is-mobile'>
        <h1 className='title column is-full has-text-centered mt-5'>Redux Example (with Star Wars!)</h1>
        <input className='input is-primary column is-one-third' type='text' onChange={handleChange} placeholder='Type the id, young Padawan...'></input>
        <button className='button is-success ml-2' onClick={handleClick}>Use the Force!</button>
        <div className='column is-full mt-3 table-wrapper'>
          <table className='table'>
            <thead>
              {
                personData &&
                  <tr>
                    <th>Name</th>
                    <th>Birth Year</th>
                    <th>Gender</th>
                    <th>Hair Color</th>
                    <th>Skin Color</th>
                  </tr>
              }
            </thead>
            <tbody>
              {
                <tr>
                  <td>{personData.name}</td>
                  <td>{personData.birth_year}</td>
                  <td>{personData.gender}</td>
                  <td>{personData.hair_color}</td>
                  <td>{personData.skin_color}</td>
                </tr>
              }
            </tbody>
          </table>
        </div>
        <img className='column responsive-img image mt-3' src={StarWarsMeme} alt='Star Wars Meme' />
      </div>
      
    </>
  )
}

export default Home
