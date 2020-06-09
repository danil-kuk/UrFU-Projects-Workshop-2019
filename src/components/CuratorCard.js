import React from 'react'
import '../styles/CuratorCard.css'
import CoursesIcons from './CoursesIcons'
import Shuffle from './ArrayShuffle'

const CuratorCard = (props) => {
  return (
    <div className='curator-card'>
      <h4>{props.name}</h4>
      <div className='curator-info'>
        <div className='img-holder'>
          <img src={props.img_link} alt='Лого' onError={i => { i.target.style.display = 'none' } }></img>
        </div>
        <div className='curator-info-text'>
          <p>
            <b>Организация: </b>{props.org} <br />
            {props.activity != '' &&
                            <><b>Деятельность: </b> {props.activity} <br /></>
            }
            {props.degree != '' &&
                            <><b>Ученая степень: </b> {props.degree} <br /></>
            }
            <b>Проектов: </b>{props.projects_count} <br />
            <b>Направления: </b>
          </p>

          <div className='courses'>
            {Shuffle(props.courses).map(c => (
              <CoursesIcons
                icon={c}
                key={props.org + c}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CuratorCard