import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import LikeButton from './components/LikeButton';

class WeatherApplication extends React.Component {
  constructor(props) {
    super(props);
  }

componentDidMount(){
  // api call
  const axios = require('axios');
  axios.get('https://openweathermap.org/data/2.5/weather?q=London,uk&appid=b6907d289e10d714a6e88b30761fae22')
    .then(function (response) {
    // handle success
    console.log(response);
  })
  }

  handleClick() {
    componentDidMount();
  }

  render (){
    return (
    <button onClick={this.handleClick}>Uus seis</button>);

  }
};

export default WeatherApplication;
