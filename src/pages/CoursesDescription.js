import React from "react";
import CoursesButtonsRow from "../components/CoursesButtonsRow"

class CoursesDescription extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }
    this.onChangeValueHandler = (val) => {
      this.setState({ value: val })
    }
  }

  render() {
    return (
      <div className="container" >
        <h1>Про направления {this.state.value}</h1>
        <CoursesButtonsRow onChangeValue={this.onChangeValueHandler} />
      </div>
    );
  }
};

export default CoursesDescription;
