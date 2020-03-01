import React from 'react'
import { Timeline, TimelineItem } from 'vertical-timeline-component-for-react'
import '../styles/Diagrams.css'

const MyTimeline = (props) => (
  <div>
    <Timeline lineColor={'#C8CED7'} className='pw-timeline'>
      {props.data.map(element => {
        let elemColor = element.color != null ? element.color : '#6BAED6'
        return (
          <TimelineItem
            key={element.date + element.title}
            dateText={element.date}
            style={{ color: elemColor }}
            dateStyle={{
              left: 12
            }}
            dateInnerStyle={{
              background: elemColor,
              fontSize: 18
            }}
          >
            <h3>{element.title}</h3>
            <p>{element.content}</p>
          </TimelineItem>
        )
      })}
    </Timeline>
  </div>
)

export default MyTimeline