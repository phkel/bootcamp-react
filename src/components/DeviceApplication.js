import React, { Component, Fragment } from 'react';
import './styles/deviceApplication.css';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

const axios = require('axios');

class DeviceApplication extends React.Component {
  constructor(props) {
    super(props);
        this.state = {deviceData: ""};
  }

  componentDidMount() {
    axios.get('https://www.mocky.io/v2/5cf7bab73000000d00a37ef1?mocky-delay=2000ms')
      .then((response) => {
      this.setState({
        deviceData: response.data
      });
    })
  }

  render () {

      const {id} = this.state.deviceData;
      const {name} = this.state.deviceData;
      const {text} = this.state.deviceData;
      const {img} = this.state.deviceData;

      if(!name){
        return 'please wait';
      }

        return (
        <Fragment>
        <div>
          <h2>Device</h2>
        </div>
        <p> {name} </p>
        <p> {text} </p>
        <img src={img}/>
        </Fragment>
        )}
};

export default DeviceApplication;
