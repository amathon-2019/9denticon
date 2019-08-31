import React, { useEffect } from "react";
import { Identicon } from "./Identicon";

const ArticonTree = () => {
  useEffect(() => {
    const canvas = document.querySelector("#canvas");

    let identicon = new Identicon(
      canvas,
      240,
      String(Math.floor(Math.random() * 500))
    );
    identicon.tree();
  });

  return (
    <div>
      <canvas id="canvas"></canvas>
    </div>
  );
};

export default ArticonTree;
