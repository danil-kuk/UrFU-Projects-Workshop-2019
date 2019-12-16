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
            <img src={logo} alt="Logo" id="logo" />
          </Link>
        </div>
        <div className="nav-holder">
          <ul id="navbar">
            <li><Link to="/">Главная</Link></li>
            <li><Link to="/customers">Заказчики</Link></li>
            <li><Link to="/students">Студенты</Link></li>
            <li><Link to="/courses">Направления</Link></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Navbar;