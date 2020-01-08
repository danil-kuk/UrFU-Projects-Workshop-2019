import React from 'react'
import { Timeline, TimelineItem } from 'vertical-timeline-component-for-react'
import "../styles/Diagrams.css"

const MyTimeline = (props) => (
  <div>
    <Timeline lineColor={'#ddd'} className="pw-timeline">
      {props.data.map(element => (
        <TimelineItem
          key={element.date + element.title}
          dateText={element.date}
          style={{ color: '#6BAED6' }}
          dateStyle={{
            left: 12
          }}
          dateInnerStyle={{
            background: '#6BAED6',
            fontSize: 18
          }}
        >
          <h3>{element.title}</h3>
          <p>{element.content}</p>
        </TimelineItem>
      ))}
    </Timeline>
  </div>
)

export default MyTimeline