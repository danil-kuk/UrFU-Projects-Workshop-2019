import React from 'react'
import CuratorsGraph from '../components/CuratorsGraph.js'
import graphData from '../../assets/data/CuratorsGraph-data.json'
import CuratorsBoard from '../components/CuratorsBoard.js'
import infoData from '../../assets/data/CuratorsInfo-data.json'

const Curators = () => {
  return (
    <div className='container'>
      <h1>Кураторы</h1>
      <CuratorsGraph data={graphData} />
      <h2>Информация</h2>
      <CuratorsBoard data={infoData} />
    </div>
  )
}

export default Curators