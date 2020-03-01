import React from 'react'
import data from '../../assets/data/Students-data.json'
import PieChart from '../components/PieChart'
import SunburstChart from '../components/SunburstChart'

const Students = () => {
  return (
    <div className='container'>
      <h1>Студенты</h1>
      <div className='students-diagrams-holder'>
        <div>
          <PieChart data={data.gender} colorScheme={{ scheme: 'pastel1' }} />
          <h2>Рапределение по полу</h2>
        </div>
        <div>
          <PieChart data={data.course} colorScheme={['#E8C1A0', '#F47560']}
            startAngle={-90}
            endAngle={90}
            height={320}
          />
          <h2>Рапределение по курсу</h2>
        </div>
      </div>
        <div>
          <SunburstChart data={data.groups} />
          <h2>Распределение по группам</h2>
        </div>
    </div>
  )
}

export default Students
