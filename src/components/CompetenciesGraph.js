import React from 'react'
import Graph from 'react-graph-vis'
import '../styles/CuratorsGraph.css'
import '../styles/Diagrams.css'

class CompetenciesGraph extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      network: null
    }
    this.graph = props.data
    this.options = {
      layout: {
        hierarchical: false
      },
      autoResize: true,
      nodes: {
        font: { face: 'Bahnschrift' },
        shape: 'text',
        scaling: {
          label: {
            enabled: true,
            min: 8,
            max: 20
          }
        },
        borderWidth: 0,
        chosen: {
          node: function(values /*, id, selected, hovering */) {
            values.borderColor = values.color
            values.borderWidth = 2
          }
        }
      },
      edges: {
        arrows: { from: false, middle: false, to: false },
        smooth: {
          enabled: true,
          type: 'continuous'
        },
        color: { opacity: 0.5 },
        chosen: {
          edge: function(values /*, id, selected, hovering */) {
            values.opacity = 1
          }
        }
      },
      interaction: {
        hover: true
      },
      physics: {
        enabled: true,
        forceAtlas2Based: {
          gravitationalConstant: -100,
          centralGravity: 0.05,
          springConstant: 0,
          springLength: 100,
          damping: 1,
          avoidOverlap: 1
        },
        solver: 'forceAtlas2Based',
        stabilization: {
          enabled: true,
          iterations: 1000,
          updateInterval: 100,
          onlyDynamicEdges: false,
          fit: true
        }
      }
    }

    this.events = {
      /* select: function(event) {
        var { nodes, edges } = event;
      } */
    }
  }

  componentDidUpdate() {
    this.state.network.setData(this.props.data)
  }

  handleNetworkChange(param) {
    this.setState(() => ({
      network: param
    }))
  }

  render() {
    return (
      <div className='competencies-graph-holder'>
        <Graph
          graph={this.graph}
          options={this.options}
          events={this.events}
          getNetwork={network => {
            this.handleNetworkChange(network)
          }}
        />
      </div>
    )
  }
}

export default CompetenciesGraph
