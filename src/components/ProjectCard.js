import React from 'react'
import '../styles/ProjectCard.css'

const Card = (props) => {
  return (
    <a href={props.link} target='_blank' rel='noopener noreferrer'>
      <div className='project-card'>
        <h4>{props.title}</h4>
        <p>{props.description}</p>
      </div>
    </a>
  )
}

export default Card