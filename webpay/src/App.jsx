import React from "react";
import ReactDOM from "react-dom";
import COUNTRY_CODE from "ownerDashboard/countryCode";
import Header from "./components/Header";

import "./index.css";

const App = () => (
    <div className="container">
        <Header />

        United States: {COUNTRY_CODE['United States']}
    </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
