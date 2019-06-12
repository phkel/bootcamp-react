import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./components/HomePage";
import QuizView from "./components/QuizView";
import DeviceApplication from "./DeviceApplication";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <div>
        <Header />

        <Route exact path="/" component={Home} />
        <Route path="/quiz" component={QuizView} />
        <Route path="/device" component={DeviceApplication} />
      </div>
    </Router>
  );
}

export default App;
