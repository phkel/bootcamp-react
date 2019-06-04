import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

class QuizApplication extends React.Component {
  constructor(props) {
    super(props);
    this.state = {results: ""}
  }

componentDidMount() {
  const axios = require('axios');
  axios.get('https://opentdb.com/api.php?amount=10&difficulty=easy')
    .then((response) => {
    this.setState({
      results: response.data.results[0]
    });
  })
}


  handleClick() {
    //componentDidMount();
  }

  render () {

    const {question} = this.state.results;
    if(!question){
      return 'please wait';
    }

    const {incorrect_answers} = this.state.results;
    const {correct_answer} = this.state.results;
    const answers = [...incorrect_answers, correct_answer];

    return (
    <Fragment>
    <p> {question} </p>
    <p> {answers.map(answer => answer)} </p>
    <button onClick={this.handleClick}>Next question</button>
    </Fragment>
    )

  }
};

export default QuizApplication;
