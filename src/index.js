//----------------------------
// import React && React-dom
//----------------------------

import React from "react";
import ReactDom from "react-dom";

//----------------------------
// import App.js
//----------------------------
import App from "./react/App.js";

const Entry = () => {
  return <App />;
};

ReactDom.render(<Entry />, document.querySelector("#app"));
