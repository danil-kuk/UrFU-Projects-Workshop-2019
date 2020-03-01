import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../styles/Navbar.css'
import logo from '../../assets/logo.svg'

class Navbar extends Component {
  render() {
    return (
      <div className='navbar-container'>
        <div className='logo-holder'>
          <Link to='/'>
            <img src={logo} alt='Logo' id='logo' />
          </Link>
        </div>
        <div className='nav-holder'>
          <Link to='/'>Главная</Link>
          <Link to='/chronology'>Хронология</Link>
          <div className='dropdown'>
            <Link to='/customers' className='dropbtn'>
              Участники
            </Link>
            <div className='dropdown-content'>
              <Link to='/customers'>Заказчики</Link>
              <Link to='/students'>Студенты</Link>
              <Link to='/curators'>Кураторы</Link>
            </div>
          </div>
          <div className='dropdown'>
            <Link to='/courses-description' className='dropbtn'>
              Проекты
            </Link>
            <div className='dropdown-content'>
              <Link to='/courses-description'>Направления</Link>
              <Link to='/courses-diagrams'>Диаграммы</Link>
              <Link to='/pre-presentation'>Предзащиты</Link>
            </div>
          </div>
          <Link to='/competencies'>Компетенции</Link>
          <div className='dropdown'>
            <Link to='/presentation' className='dropbtn'>
              Итоги
            </Link>
            <div className='dropdown-content'>
              <Link to='/presentation'>Защиты</Link>
              <Link to='/teams-results'>Оценки</Link>
              <Link to='/courses-results'>Диаграмма</Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Navbar
