import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './Home';
import QuizApplication from './QuizApplication';
import DeviceApplication from './DeviceApplication';
import logo from './images/logo.png';

function ApplicationRouter() {
  return (
    <Router>
      <div>
        <ul className="menu">
          <li>
            <img src={logo} id="logo"/>
          </li>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/quiz">QUIZ</Link>
          </li>
          <li>
            <Link to="/device">DEVICE</Link>
          </li>
        </ul>

        <Route exact path="/" component={Home} />
        <Route path="/quiz" component={QuizApplication} />
        <Route path="/device" component={DeviceApplication} />
      </div>
    </Router>
  );
}

export default ApplicationRouter;
