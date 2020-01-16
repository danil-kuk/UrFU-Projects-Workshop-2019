import React from "react";
import Graph from "react-graph-vis";
import "../styles/CuratorsGraph.css";
import "../styles/Diagrams.css";

class CuratorsGraph extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      network: null
    };
    this.graph = props.data
    this.options = {
      layout: {
        hierarchical: false,
      },
      autoResize: true,
      edges: {
        arrows: { from: false, middle: false, to: false },
        smooth: {
          enabled: true,
          type: 'continuous'
        },
        scaling: {
          min: 3,
          max: 8
        },
        color: { inherit: "to", opacity: 0.5 },
        chosen: {
          edge: function (values, id, selected, hovering) {
            values.opacity = 1;
            values.width += 3;
          }
        },
      },
      nodes: {
        font: { face: 'Bahnschrift' },
        shape: "dot",
        scaling: {
          label: {
            enabled: true,
            min: 12,
            max: 18
          }
        },
        borderWidth: 0,
        chosen: {
          node: function (values, id, selected, hovering) {
            values.borderColor = values.color
            values.borderWidth = 5
          }
        },
      },
      interaction: {
        hover: true
      },
      physics: {
        enabled: true,
        forceAtlas2Based: {
          gravitationalConstant: -50,
          centralGravity: 0.01,
          springConstant: 0.005,
          springLength: 100,
          damping: 0.7,
          avoidOverlap: 0.7
        },
        solver: 'forceAtlas2Based'
      }
    };

    this.events = {
      select: function (event) {
        var { nodes, edges } = event;
      },
      hoverNode: function (params) {
      }
    };
  }

  handleNetworkChange(param) {
    this.setState(state => ({
      network: param
    }));
  }

  render() {
    return (
      <div className="graph-holder">
        <Graph graph={this.graph} options={this.options} events={this.events} style={{ height: "660px" }}
          getNetwork={network => {
            this.handleNetworkChange(network)
          }} />
      </div>
    );
  };
}

export default CuratorsGraph
