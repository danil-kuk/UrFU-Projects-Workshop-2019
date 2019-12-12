import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/page1">Page 1</Link></li>
                    <li><Link to="/page2">Page 2</Link></li>
                </ul>
            </div>
        );
    }
}

export default Navbar;