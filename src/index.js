//----------------------------
// import React && React-dom
//----------------------------
import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

//----------------------------
// import css
//----------------------------
import "./index.css";

//----------------------------
// import App.js
//----------------------------
import App from "./react/App.js";
import Fullpage from "./react/LandingPage/LandingPage";

const Entry = () => {
  return (
    <Router>
      <Route path="/about" component={Fullpage} />
      <Route
        exact
        path="/"
        render={() =>
          localStorage.getItem("isAboutShown") ? (
            <App />
          ) : (
            <Redirect to="/about" />
          )
        }
      />
    </Router>
  );
};

ReactDom.render(<Entry />, document.querySelector("#app"));
