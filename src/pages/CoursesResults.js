import React from 'react'
import SwarmPlot from '../components/SwarmPlot'
import sourceData from '../../assets/data/CoursesResults-data.json'

var allKeys = Object.keys(sourceData)
var newData = []
let index = 0
allKeys.forEach(courseId => {
  var teamsKeys = Object.keys(sourceData[courseId])
  teamsKeys.forEach(teamId => {
    index += 1
    const team = sourceData[courseId][teamId]
    const item = {
      id: index.toString(),
      group: courseId,
      team_name: teamId,
      value: team.score,
      size: team.members
    }
    newData.push(item)
  })
})

const CoursesResults = () => {
  return (
    <div className='corses-results'>
      <h1>Распределение баллов по направлениям</h1>
      <SwarmPlot data={newData} groups={allKeys} />
    </div>
  )
}

export default CoursesResults
