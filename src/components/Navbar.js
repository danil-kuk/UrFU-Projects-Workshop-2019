import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import logo from '../../assets/logo.svg';

class Navbar extends Component {
  render() {
    return (
      <div className="navbar-container">
        <div className="logo-holder">
          <Link to="/">
            <img src={logo} alt="Logo" id="logo" />dev
          </Link>
        </div>
        <div className="nav-holder">
          <Link to="/">Главная</Link>
          <div className="dropdown">
            <Link to="/customers-info" className="dropbtn">Заказчики</Link>
            <div className="dropdown-content">
              <Link to="/customers-info">Информация</Link>
              <Link to="/customers-diagrams">Диаграмма</Link>
            </div>
          </div>
          <div className="dropdown">
            <Link to="/courses-description" className="dropbtn">Направления</Link>
            <div className="dropdown-content">
              <Link to="/courses-description">Информация</Link>
              <Link to="/courses-diagrams">Диаграммы</Link>
            </div>
          </div>
          <Link to="/pre-presentation">Предзащиты</Link>
        </div>
      </div>
    );
  }
}

export default Navbar;