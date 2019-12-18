import React from "react";
import CoursesIcons from "./CoursesIcons"
import "../styles/CoursesButtonsRow.css"

const corses = [
  "machine-learning", "games", "bots", "robots", "digital-marketing",
  "vr", "web-development", "mobile", "information-systems", "math-modelling"
] // Изменив порядок элементов, можно поменять порядок кнопок

class CoursesButtonsRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCourse: corses[0]
    };
    this.onChangeValue  = props.onChangeValue
  }

  handleClick(args) {
    this.setState(state => ({
      selectedCourse: args
    }));
    this.onChangeValue(args)
  }


  render() {
    return (
      <div className="buttons-row">
        {corses.map(course => (
          <ButtonWithIcon course={course} key={course.toString()} parent={this} />
        ))}
      </div>
    );
  };
}

const ButtonWithIcon = (props) => {
  return (
    <button className={props.course} onClick={props.parent.handleClick.bind(props.parent, props.course)}>
      <CoursesIcons icon={props.course} />
    </button>
  )
}

export default CoursesButtonsRow;