import React from 'react'
import RadarDiagram from '../components/RadarDiagram'
import radarData from '../assets/data/TeamsResults-data.json'
import teamsInfo from '../assets/data/TeamsResultsInfo.json'
import DataPreparation from '../components/RadarDataPreparation'
import '../styles/Presentation.css'

var allKeys = []
allKeys.push(Object.keys(radarData)[0])
allKeys = allKeys.concat(Object.keys(radarData).slice(1).sort())
var newData = DataPreparation(radarData)

class Presentation extends React.Component {
  constructor(props) {
    super(props)
    this.state = { value: ['Общее среднее'] }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.setState({ value: [event.target.value] })
  }

  render() {
    return (
      <div className='pres-container'>
        <h1>Оценки команд</h1>
        <div className='team-section'>
          <div className='select-section'>
            <select
              value={this.state.value}
              onChange={this.handleChange}
              multiple
            >
              {allKeys.map(team => (
                <option value={team} key={team}>
                  {team}
                </option>
              ))}
            </select>
          </div>
          <div className='diagram-section'>
            <h2>{this.state.value[0]}</h2>
            <div className='team-radar-diagram'>
              <RadarDiagram
                data={newData[this.state.value[0]]}
                dataKeys={this.state.value}
                labelsFontSize={16}
                maxValue={3}
                levels={3}
              />
            </div>
            {this.state.value[0] !== allKeys[0] &&
              teamInfo(this.state.value[0])}
            {this.state.value[0] === allKeys[0] &&
              generalInfo(this.state.value[0])}
          </div>
        </div>
      </div>
    )
  }
}

export default Presentation

function teamInfo(selectedTeam) {
  const item = teamsInfo[selectedTeam]
  return (
    <div className='team-results-info'>
      <h3>Информация о команде</h3>
      <p>
        Средний балл команды: {item.score}
        <br />
        Проект: {item.project}
        <br />
        Трек: {item.track}
        <br />
        Куратор: {item.curator}
        <br />
        Количество участников: {item.members_count}
      </p>
    </div>
  )
}

function generalInfo(key) {
  const item = teamsInfo[key]
  return (
    <div className='team-results-info'>
      <h3>Информация</h3>
      <p>
        Средний итоговый балл: {item.score}
        <br />
        Всего проектов: {item.projects_count}
        <br />
        Количество направлений: {item.courses_count}
        <br />
        Количество кураторов: {item.curators_count}
        <br />
        Количество команд: {item.teams_count}
      </p>
    </div>
  )
}
