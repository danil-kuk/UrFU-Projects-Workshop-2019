import React from 'react'
import tlData from '../assets/data/Timeline-data.json'
import Timeline from '../components/Timeline'

const Chronology = () => {
  return (
    <div className='container'>
      <h1>Хронология</h1>
      <Timeline data={tlData} />
    </div>
  )
}

export default Chronology