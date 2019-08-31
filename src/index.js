//----------------------------
// import React && React-dom
//----------------------------
import React from "react";
import ReactDom from "react-dom";

//----------------------------
// import App.js
//----------------------------
import App from "./react/App.js";
import Fullpage from "./react/LandingPage/LandingPage";

const Entry = () => {
  return <Fullpage />;
};

ReactDom.render(<Entry />, document.querySelector("#app"));
