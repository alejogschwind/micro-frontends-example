import React from "react";
import ReactDOM from "react-dom";
import Header from "webpay/Header";

import "./index.css";

const App = () => (
  <div className="container">
    <Header />
    <div>Name: owner-dashboard</div>
    <div>Framework: react</div>
    <div>Language: JavaScript</div>
    <div>CSS: Empty CSS</div>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
