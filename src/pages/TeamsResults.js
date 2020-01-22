import React from "react";
import RadarDiagram from "../components/RadarDiagram";
import data from "../../assets/data/TeamsResults-data.json";
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
        <h1>Оценки команд</h1>
        <div className="team-section">
          <div className="select-section">
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
          <div className="diagram-section">
            <h2>{this.state.value[0]}</h2>
            <div className="team-radar-diagram">
              <RadarDiagram
                data={newData[this.state.value[0]]}
                dataKeys={this.state.value}
                labelsFontSize={16}
                maxValue={5}
                levels={5}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Presentation;
