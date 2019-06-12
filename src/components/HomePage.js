import React, { Component, Fragment } from "react";
import "


../styles/main.css";
import mockimg from "../images/mock-im



g.jpg";

class 
  
  
  HomePage 
  
  
  extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Fragment>
        <div className="header">
          <div>
            <h1 className="header__title">Proekspert</h1>
          </div>
          <p className="header__text">
            We help you build world-changing solutions by combining data science
            and product development expertise with design thinking approach. We
            focus on giving you a strong competitive edge by testing new
            business ideas quickly while tackling the possible risks, and also
            taking responsibility for the whole product development process.
          </p>
        </div>
        <div className="devices">
          <div className="device">
            <h1 className="device__title">Washing Machine</h1>
            <img className="device__img" src={mockimg} alt="Mock Image" />
            <p className="device__text">
              Future products are created by merging human-centric design, data
              science and technology.
            </p>
          </div>
          <div className="device">
            <h1 className="device__title">Washing Machine</h1>
            <img className="device__img" src={mockimg} alt="Mock Image" />
            <p className="device__text">
              Future products are created by merging human-centric design, data
              science and technology.
            </p>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default HomePage;
