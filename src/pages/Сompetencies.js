import React from "react";
import CompetencesButtonsRow from "../components/CompetencesButtonsRow"
import CompetenciesGraph from "../components/CompetenciesGraph.js";
import competenciesData from "../../assets/data/CompetenciesGraph-data.json"

// Connect all nodes to source node
var competenciesGroupsKeys = Object.keys(competenciesData)
competenciesGroupsKeys.forEach(groupKey => {
    competenciesData[groupKey].nodes.slice(1).forEach(e => {
        competenciesData[groupKey].edges.push({
            from: 0,
            to: e.id
        })
    });
});

class Сompetencies extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: Object.keys(competenciesData)[0]
        }
        this.onChangeValueHandler = (val) => {
            this.setState({ selected: val })
        }
    }

    render() {
        return (
            <div className="container" >
                <h1>Компетенции</h1>
                <div className="competenciesSelection">
                    <CompetencesButtonsRow onChangeValue={this.onChangeValueHandler} />
                </div>
                {courseInfo(this.state.selected)}
            </div>

        );
    }
};

export default Сompetencies;

function courseInfo(selectedKey) {
    var text = selectedKey == "Командные" ?
        "Компетентностный профиль команды" : "Компетентностный профиль " + selectedKey + "а"
    return (
        <div className="competence-graph">
            <h2>{text}</h2>
            <CompetenciesGraph data={competenciesData[selectedKey]}/>
        </div>
    )
}