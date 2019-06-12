import React, { Component, Fragment } from "react";
import LoadingState from "./LoadingState.js";
import FinalView from "./FinalView.js";

const axios = require("axios");

class QuizView extends Component {
  constructor(props) {
    super(props);
    this.state = { questionData: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleDeviceRequest = this.handleDeviceRequest.bind(this);
    this.putResult = this.putResult.bind(this);
  }

  componentDidMount() {
    axios
      .get("http://www.mocky.io/v2/5cf7658c300000a90ca37cf7?mocky-delay=200ms")
      .then(response => {
        this.setState({
          questionData: response.data
        });
      });
  }

  putResult() {
    axios
      .put("https://www.mocky.io/v2/5cf7819c3000006c00a37d96?mocky-delay=200ms")
      .then(response => {
        this.setState({
          correct: JSON.parse(response.data.correct),
          infoText: response.data.infoText
        });
        {
          this.displayResult();
        }
      });
  }

  displayResult() {
    alert("Tulemus: " + this.state.correct + " " + this.state.infoText);
  }

  handleClick(event) {
    this.componentDidMount();
  }

  handleDeviceRequest(event) {
    //TODO
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.state.value == null) {
      alert("Palun tee oma valik");
    }

    axios({
      method: "put",
      url: "https://www.mocky.io/v2/5cf7819c3000006c00a37d96?mocky-delay=200ms",
      data: {
        answerId: this.state.value,
        questionId: this.state.questionData.id
      }
    });
    {
      this.putResult();
    }
  }

  render() {
    const { id } = this.state.questionData;
    const { question } = this.state.questionData;
    const { answers } = this.state.questionData;

    if (!question) {
      return <LoadingState />;
    }

    return (
      <Fragment>
        <div>
          <h2>Quiz</h2>
        </div>
        <p> {question} </p>
        <form onSubmit={this.handleSubmit}>
          {answers.map(item => (
            <div key={item.id}>
              <label>
                <input
                  name={this.state.questionData.id}
                  type="radio"
                  value={item.id}
                  onChange={this.handleChange}
                />
                {item.text}
              </label>
            </div>
          ))}
          <input type="submit" value="Submit" id="submitButton" />
        </form>
        <button onClick={this.handleClick}>Next question</button>
        <button onClick={this.handleDeviceRequest}>Check device</button>
      </Fragment>
    );
  }
}

export default QuizView;
