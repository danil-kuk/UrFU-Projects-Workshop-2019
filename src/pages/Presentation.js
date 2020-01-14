import React from "react";
import RadarDiagram from "../components/RadarDiagram"
import data from "../../assets/data/PresentationRadar-data.json"
import DataPreparation from "../components/RadarDataPreparation"
import "../styles/Presentation.css"

var allKeys = Object.keys(data)
var newData = DataPreparation(data)

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
        <RadarDiagram data={newData['Общее среднее']} dataKeys={['Общее среднее']} labelsFontSize={18} maxValue={5} />
        <h2>Оценки команд</h2>
        <div className="team-section">
          <select value={this.state.value} onChange={this.handleChange} multiple>
            {
              allKeys.map(team => (
                <option value={team} key={team}>{team}</option>
              ))
            }
          </select>
          <div className="team-radar-diagram">
            <RadarDiagram data={newData[this.state.value[0]]} dataKeys={this.state.value} labelsFontSize={16} maxValue={5} />
          </div>
        </div>
      </div>
    )
  }
}

export default Presentation;
