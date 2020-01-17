import React from "react";
import CompetenciesIcons from "./CompetenciesIcons"
import "../styles/CoursesButtonsRow.css"
import competenciesData from "../../assets/data/CompetenciesGraph-data.json"

var keys = [];

for (var c in competenciesData) keys.push(c);

class CompetencesButtonsRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: keys[0]
    };
    this.onChangeValue = props.onChangeValue
  }

  handleClick(args) {
    this.setState(state => ({
        selected: args
    }));
    this.onChangeValue(args)
  }


  render() {
    return (
      <div className="buttons-row">
        {keys.map(k => (
          <ButtonWithIcon selectedItem={k} key={k.toString()} parent={this} />
        ))}
      </div>
    );
  };
}

const ButtonWithIcon = (props) => {
  var className = props.parent.state.selected != props.selectedItem ?
    props.selectedItem : props.selectedItem + " selected"
  return (
    <button className={className} onClick={props.parent.handleClick.bind(props.parent, props.selectedItem)}>
      <CompetenciesIcons icon={props.selectedItem} />
    </button>
  )
}

export default CompetencesButtonsRow;