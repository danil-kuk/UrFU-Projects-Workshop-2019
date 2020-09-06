import React from 'react'
import CoursesButtonsRow from '../components/CoursesButtonsRow'
import ProjectsCardsBoard from '../components/ProjectsCardsBoard'
import Shuffle from '../components/ArrayShuffle'
import '../styles/CoursesDescription.css'
import coursesData from '../assets/data/CoursesInfo.json'
import projectsData from '../assets/data/ProjectsBoard-data.json'

class CoursesDescription extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedCourse: Object.keys(coursesData)[0]
    }
    this.onChangeValueHandler = (val) => {
      this.setState({ selectedCourse: val })
    }
  }

  render() {
    return (
      <div className='container' >
        <h1>Направления</h1>
        <div className='courseSelection'>
          <CoursesButtonsRow onChangeValue={this.onChangeValueHandler} />
        </div>
        {courseInfo(coursesData[this.state.selectedCourse])}
        <h2 style={{ textAlign: 'center', marginBottom: 0 }}>Проекты направления</h2>
        <ProjectsCardsBoard data={Shuffle(projectsData[this.state.selectedCourse])}/>
      </div>
    )
  }
}

export default CoursesDescription

function courseInfo(data) {
  return (
    <div className='course-description'>
      <h2>{data.title}</h2>
      <p>{data.description}</p>
    </div>
  )
}