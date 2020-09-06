import React from 'react'
import icon1 from '../assets/courses-icons/3d-modeling.svg'
import icon2 from '../assets/courses-icons/broadcast.svg'
import icon3 from '../assets/courses-icons/chat-bubbles-with-ellipsis.svg'
import icon4 from '../assets/courses-icons/chip.svg'
import icon5 from '../assets/courses-icons/gamepad-controller.svg'
import icon6 from '../assets/courses-icons/internet.svg'
import icon7 from '../assets/courses-icons/machine-learning.svg'
import icon8 from '../assets/courses-icons/mechanical-arm.svg'
import icon9 from '../assets/courses-icons/smartphone.svg'
import icon10 from '../assets/courses-icons/virtual-reality.svg'
import icon0 from '../assets/placeholder.svg'
import '../styles/index.css'

const CoursesIcons = (props) => {
  switch (props.icon) {
    case 'machine-learning':
      return iconHolder(icon7)
    case 'games':
      return iconHolder(icon5)
    case 'bots':
      return iconHolder(icon3)
    case 'robots':
      return iconHolder(icon8)
    case 'digital-marketing':
      return iconHolder(icon2)
    case 'vr':
      return iconHolder(icon10)
    case 'web-development':
      return iconHolder(icon6)
    case 'mobile':
      return iconHolder(icon9)
    case 'information-systems':
      return iconHolder(icon4)
    case 'math-modelling':
      return iconHolder(icon1)

    default:
      return iconHolder(icon0)
  }
}

function iconHolder(icon) {
  return (
    <div className='icon-holder'>
      <img alt='icon' src={icon}></img>
    </div>
  )
}

export default CoursesIcons