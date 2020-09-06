import React from 'react'
import img from '../assets/data/Итоговая визуализация.svg'

const Home = () => {
  return (
    <div className='container'>
      <div className='main-diagram-holder'>
        <img alt='diagram' src={img}></img>
      </div>
    </div>
  )
}

export default Home
