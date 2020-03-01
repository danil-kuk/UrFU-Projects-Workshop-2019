import React from "react";
import { ResponsiveSwarmPlot } from "@nivo/swarmplot";
import "../styles/Diagrams.css";

const MyResponsiveSwarmPlot = props => (
  <div className="swarm-plot-diagram-holder">
    <ResponsiveSwarmPlot
      data={props.data}
      groups={props.groups}
      value="value"
      colors={{ scheme: "spectral" }}
      valueScale={{ type: "linear", min: 0, max: 100, reverse: false }}
      size={{ key: "size", values: [1, 8], sizes: [15, 50] }}
      forceStrength={4}
      simulationIterations={100}
      borderColor={{
        from: "color",
        modifiers: [
          ["darker", 0.6],
          ["opacity", 0.5]
        ]
      }}
      enableGridX={false}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        orient: "bottom",
        tickSize: 0,
        tickPadding: 10,
        tickRotation: 0,
        legend: "Направления",
        legendPosition: "middle",
        legendOffset: 50
      }}
      axisLeft={{
        orient: "left",
        tickSize: 10,
        tickPadding: 5,
        tickRotation: 0,
        legend: "Баллы",
        legendPosition: "middle",
        legendOffset: -60
      }}
      margin={{ top: 10, right: 100, bottom: 80, left: 100 }}
      motionStiffness={50}
      motionDamping={10}
      tooltip={({ node }) => {
        return (
          <div
            style={{
              background: "white",
              padding: "5px 9px",
              borderRadius: "2px",
              display: "flex-inline",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              color: "black",
              boxShadow: "rgba(0, 0, 0, 0.25) 0px 1px 2px"
            }}
          >
            Команда: <b>{node.data.team_name}</b>
            <br />
            Участники: <b>{node.data.size}</b>
            <br />
            Итоговый балл: <b>{node.data.value}</b>
          </div>
        );
      }}
      theme={{
        axis: {
          legend: {
            text: {
              fontSize: 20,
              fontFamily: ""
            }
          },
          ticks: {
            text: {
              fontSize: 14,
              fontFamily: ""
            }
          }
        },
        labels: {
          text: {
            fontSize: 20,
            fontFamily: ""
          }
        }
      }}
    />
  </div>
);

export default MyResponsiveSwarmPlot;
