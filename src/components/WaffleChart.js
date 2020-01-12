import React from 'react'
import { ResponsiveWaffle } from '@nivo/waffle'

const MyResponsiveWaffle = (props) => (
    <div className="waffle-chart-holder">
        <ResponsiveWaffle
            data={props.data}
            total={415}
            rows={18}
            columns={23}
            margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
            colors={["#FFFFCC", "#CCEBC5", "#B3CDE3", "#FBB4AE"]}
            borderColor={{ from: 'color', modifiers: [['darker', 0.3]] }}
            animate={true}
            motionStiffness={90}
            motionDamping={11}
        />
    </div>
)
export default MyResponsiveWaffle