import React, { useEffect } from "react";
import { Identicon } from "./Identicon";

const ArticonCircle = ({ hashText }) => {
  useEffect(() => {
    const canvas = document.querySelector("#canvas1");

    let identicon = new Identicon(canvas, 240, hashText);
    identicon.circles();
  });

  return <canvas id="canvas1"></canvas>;
};

export default ArticonCircle;
