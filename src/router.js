import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./components/HomePage";
import QuizApplication from "./QuizApplication";
import DeviceApplication from "./components/DeviceApplication";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <div>
        <Header />

        <Route exact path="/" component={Home} />
        <Route path="/quiz" component={QuizApplication} />
        <Route path="/device" component={DeviceApplication} />
      </div>
    </Router>
  );
}

export default App;
