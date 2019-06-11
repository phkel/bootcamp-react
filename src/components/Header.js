import React, { Component } from 'react';
import logo from "../images/logo.png";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "../styles/header.css";

export default class Header extends Component {

  render() {
    return (
        <div className="menu">
        
        <div>
          <img src={logo} id="logo"/>
        </div>

        <div className="menu__items">
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="/quiz">QUIZ</Link>
        </li>
        <li>
          <Link to="/device">DEVICE</Link>
        </li>
        </div>
      </div>
    );
  }
}
