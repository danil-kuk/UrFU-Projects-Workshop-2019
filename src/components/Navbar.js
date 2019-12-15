import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

class Navbar extends Component {
  render() {
    return (
      <div className="navbar-container">
        <ul id="navbar">
          <li><Link to="/">Главная</Link></li>
          <li><Link to="/customers">Заказчики</Link></li>
          <li><Link to="/students">Студенты</Link></li>
          <li><Link to="/courses">Направления</Link></li>
        </ul>
      </div>
    );
  }
}

export default Navbar;