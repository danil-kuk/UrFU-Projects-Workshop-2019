import React from 'react'
import CoursesIcons from './CoursesIcons'
import '../styles/CoursesButtonsRow.css'
import coursesData from '../../assets/data/CoursesInfo.json'

var courses = []

for (var c in coursesData) courses.push(c)

class CoursesButtonsRow extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedCourse: courses[0]
    }
    this.onChangeValue = props.onChangeValue
  }

  handleClick(args) {
    this.setState((/*state*/) => ({
      selectedCourse: args
    }))
    this.onChangeValue(args)
  }


  render() {
    return (
      <div className='buttons-row'>
        {courses.map(course => (
          <ButtonWithIcon course={course} key={course.toString()} parent={this} />
        ))}
      </div>
    )
  }
}

const ButtonWithIcon = (props) => {
  var className = props.parent.state.selectedCourse != props.course ?
    props.course : props.course + ' selected'
  return (
    <button className={className} onClick={props.parent.handleClick.bind(props.parent, props.course)}>
      <CoursesIcons icon={props.course} />
    </button>
  )
}

export default CoursesButtonsRow