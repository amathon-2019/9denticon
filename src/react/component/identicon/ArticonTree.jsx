import React, { useEffect } from "react";
import { Identicon } from "./Identicon";

const ArticonTree = ({ hashText }) => {
  useEffect(() => {
    const canvas = document.querySelector("#canvas");

    let identicon = new Identicon(canvas, 240, hashText);
    identicon.tree();
  });

  return (
    <div>
      <canvas id="canvas"></canvas>
    </div>
  );
};

export default ArticonTree;
