import React from 'react'
import RadarDiagram from '../components/RadarDiagram'
import data from '../assets/data/PrePresentationRadarDiagram.json'
import DataPreparation from '../components/RadarDataPreparation'
import '../styles/PrePresentation.css'

var allKeys = Object.keys(data).slice(1)
var newData = DataPreparation(data)

const PrePresentation = () => {
  return (
    <div className='prepres-container'>
      <h1>Предзащиты</h1>
      <h2>Итоги по всем трекам</h2>
      <RadarDiagram data={newData['Общее среднее']} dataKeys={['Общее среднее']} labelsFontSize={18} maxValue={3} levels={3} />
      <div className='prepres-diagrams-holder'>
        {
          allKeys.map(k => (
            <div className='item' key={k}>
              <h3>{k}</h3>
              <RadarDiagram data={newData[k]} dataKeys={[k]} labelsFontSize={12} maxValue={3} levels={3} />
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default PrePresentation
