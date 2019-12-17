import React from 'react'
import { ResponsiveBubble } from '@nivo/circle-packing'
import "../styles/Diagrams.css"

const CirclePackingDiagram = (props) => (
    <div className="circle-parcking-holder">
        <ResponsiveBubble
            root={props.data}
            margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
            identity="name"
            value="value"
            colors={{ scheme: 'blues' }}
            padding={6}
            label="value"
            labelTextColor={{ from: 'color', modifiers: [['darker', 0.8]] }}
            borderWidth={2}
            borderColor={{ from: 'color' }}
            fill={[{ match: { depth: 1 }, id: 'lines' }]}
            animate={true}
            motionStiffness={90}
            motionDamping={12}
        />
    </div>
)

export default CirclePackingDiagram