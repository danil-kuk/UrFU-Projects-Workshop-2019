import React from 'react'
import { ResponsiveSunburst } from '@nivo/sunburst'
import "../styles/Diagrams.css"

const MyResponsiveSunburst = (props) => (
    <div className="sunburst-chart-holder">
        <ResponsiveSunburst
            data={props.data}
            margin={{ top: 40, right: 20, bottom: 20, left: 20 }}
            identity="name"
            value="value"
            cornerRadius={0}
            borderWidth={1.5}
            borderColor="#D8E0EC"
            colors={["#F47560", "#E8C1A0"]}
            childColor={{ from: 'color' }}
            animate={true}
            motionStiffness={90}
            motionDamping={15}
            isInteractive={true}
        />
    </div>
)

export default MyResponsiveSunburst