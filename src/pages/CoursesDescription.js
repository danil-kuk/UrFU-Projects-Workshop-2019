import React from "react";
import CoursesButtonsRow from "../components/CoursesButtonsRow"
import "../styles/CoursesDescription.css"
import coursesData from "../../assets/data/CoursesInfo.json"

class CoursesDescription extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCourse: Object.keys(coursesData)[0]
    }
    this.onChangeValueHandler = (val) => {
      this.setState({ selectedCourse: val })
    }
  }

  render() {
    return (
      <div className="container" >
        <h1>Про направления</h1>
        <div className="courseSelection">
          <CoursesButtonsRow onChangeValue={this.onChangeValueHandler} />
        </div>
        {courseInfo(coursesData[this.state.selectedCourse])}
      </div>
    );
  }
};

export default CoursesDescription;


function courseInfo(data) {
  return (
    <div className="course-description">
      <h2>{data.title}</h2>
      <p>{data.description}</p>
    </div>
  )
}