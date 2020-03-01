import React from 'react'
import '../styles/CustomerCard.css'
import CoursesIcons from './CoursesIcons'
import Shuffle from './ArrayShuffle'

const CustomerCard = (props) => {
    return (
        <a href={props.link} target='_blank'>
            <div className='customer-card'>
                <div className='card-title'>
                    <div className='img-holder'>
                        <img src={props.img_link} alt='Лого' onError={i => i.target.style.display = 'none'}></img>
                    </div>
                    <h4>{props.title}</h4>
                </div>
                <div className='customer-info'>
                    <p>
                        <b>Тип организации: </b>{props.org_type} <br />
                        <b>Область деятельности: </b>{props.activity_type} <br />
                        <b>Размер организации: </b>{props.org_size} <br />
                        <b>Расположение: </b>{props.org_place} <br />
                        <b>Направления: </b>
                    </p>
                </div>
                <div className='courses'>
                    {Shuffle(props.courses).map(c => (
                        <CoursesIcons
                            icon={c}
                            key={props.org_type + c}
                        />
                    ))}
                </div>
            </div>
        </a>
    )
}

export default CustomerCard