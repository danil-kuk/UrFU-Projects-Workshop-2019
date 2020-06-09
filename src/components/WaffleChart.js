import React from 'react'
import { ResponsiveWaffle } from '@nivo/waffle'

const MyResponsiveWaffle = (props) => (
  <div className='waffle-chart-holder'>
    <ResponsiveWaffle
      data={props.data}
      total={420}
      rows={15}
      columns={28}
      margin={{ top: 10, right: 30, bottom: 30, left: 30 }}
      colors={['#FFFFCC', '#CCEBC5', '#B3CDE3', '#FBB4AE']}
      borderColor={{ from: 'color', modifiers: [['darker', 0.3]] }}
      animate={true}
      motionStiffness={90}
      motionDamping={11}
    />
  </div>
)
export default MyResponsiveWaffle