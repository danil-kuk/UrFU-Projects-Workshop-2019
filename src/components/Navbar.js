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
          <Link to="/">Главная</Link>
          <Link to="/customers">Заказчики</Link>
          <Link to="/students">Студенты</Link>
          <div className="dropdown">
            <Link to="/courses" className="dropbtn">Направления</Link>
            <div className="dropdown-content">
              <Link to="/">Ссылка 1</Link>
              <Link to="/">Ссылка 2</Link>
              <Link to="/">Ссылка 3</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;