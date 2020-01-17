import React from "react";
import CompetenciesButtonsRow from "../components/CompetenciesButtonsRow"
import CompetenciesGraph from "../components/CompetenciesGraph.js";
import competenciesData from "../../assets/data/CompetenciesGraph-data.json"

// Create Graph Data
var groupKeys = Object.keys(competenciesData)
var data = {}
groupKeys.forEach(groupKey => {
    var graph = {
        nodes: [],
        edges: []
    }
    graph.nodes.push({
        id: 0,
        shape: "circle",
        label: groupKey
    })
    for (let i = 1; i < competenciesData[groupKey].length; i++) {
        let element = competenciesData[groupKey][i];
        graph.nodes.push({
            id: i,
            label: element
        })
        graph.edges.push({
            from: 0,
            to: i
        })
    }
    data[groupKey] = graph
});


class Сompetencies extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: groupKeys[0]
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
                    <CompetenciesButtonsRow onChangeValue={this.onChangeValueHandler} />
                </div>
                {courseInfo(this.state.selected)}
            </div>

        );
    }
};

export default Сompetencies;

function courseInfo(selectedKey) {
    var text = selectedKey == "Команда" ?
        "Компетентностный профиль команды" : "Компетентностный профиль " + selectedKey + "а"
    return (
        <div className="competence-graph">
            <h2>{text}</h2>
            <CompetenciesGraph data={data[selectedKey]} />
        </div>
    )
}