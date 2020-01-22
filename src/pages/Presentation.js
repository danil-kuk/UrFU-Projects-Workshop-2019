import React from "react";
import RadarDiagram from "../components/RadarDiagram";
import data from "../../assets/data/PresentationRadar-data.json";
import DataPreparation from "../components/RadarDataPreparation";
import "../styles/Presentation.css";

var allKeys = Object.keys(data);
var newData = DataPreparation(data);

class Presentation extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: ["Общее среднее"] };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: [event.target.value] });
  }

  render() {
    return (
      <div className="pres-container">
        <h1>Защиты</h1>
        <h2>Средний результат</h2>
        <RadarDiagram
          data={newData["Общее среднее"]}
          dataKeys={["Общее среднее"]}
          labelsFontSize={18}
          maxValue={5}
          levels={5}
        />
      </div>
    );
  }
}

export default Presentation;
