import React from "react";
import CompetencesButtonsRow from "../components/CompetencesButtonsRow"
import "../styles/CoursesDescription.css"
import competenciesData from "../../assets/data/CompetenciesGraph-data.json"

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
        "Компетентностный профиль команды" : selectedKey
    return (
        <div className="competence-graph">
            <h2>{text}</h2>
        </div>
    )
}