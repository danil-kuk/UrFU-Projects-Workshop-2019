import React from "react";
import { ResponsivePie } from '@nivo/pie'

const Chart = (props) => {
  return (
    <div className="pie-chart-holder" style={{height:props.height}}>
      <ResponsivePie
        data={props.data}
        margin={{ top: 20, right: 80, bottom: 40, left: 80 }}
        startAngle={props.startAngle}
        endAngle={props.endAngle}
        innerRadius={0.45}
        padAngle={1.5}
        colors={props.colorScheme}
        borderWidth={1}
        borderColor={{ from: 'color', modifiers: [ [ 'darker', 0.2 ] ] }}
        radialLabelsSkipAngle={10}
        radialLabelsTextXOffset={4}
        radialLabelsTextColor="#333333"
        radialLabelsLinkOffset={0}
        radialLabelsLinkDiagonalLength={13}
        radialLabelsLinkHorizontalLength={10}
        radialLabelsLinkStrokeWidth={3}
        radialLabelsLinkColor={{ from: 'color' }}
        slicesLabelsSkipAngle={10}
        slicesLabelsTextColor="#333333"
        animate={true}
        motionStiffness={90}
        motionDamping={15}
        theme={{
            labels: {
                text: {
                    fontSize: 22,
                    fontFamily: ""
                }
            }
        }}
    />
    </div>
  );
};

export default Chart;