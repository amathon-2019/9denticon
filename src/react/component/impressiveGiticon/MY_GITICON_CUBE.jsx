import React from "react";
import MY_GITICON_CUBE_ELEMENT from "./MY_GITICON_CUBE_ELEMENT";
import { array2dMaker } from "../../../helper/utils";

const MY_GITICON_CUBE = ({ cubeData, colorValue, type }) => {
  if (!cubeData) return null;
  const converted2dArr = array2dMaker(cubeData, 3);

  return (
    <div style={{ display: "inline-block" }}>
      <div
        style={{ display: "flex", flexDirection: "row", alignItem: "center" }}
      >
        {converted2dArr[0].map((item, i) => (
          <div key={i}>
            <MY_GITICON_CUBE_ELEMENT
              type={type}
              data={item}
              colorValue={colorValue}
            />
          </div>
        ))}
      </div>
      <div
        style={{ display: "flex", flexDirection: "row", alignItem: "center" }}
      >
        {converted2dArr[1].map((item, i) => (
          <div key={i}>
            <MY_GITICON_CUBE_ELEMENT
              type={type}
              data={item}
              colorValue={colorValue}
            />
          </div>
        ))}
      </div>
      <div
        style={{ display: "flex", flexDirection: "row", alignItem: "center" }}
      >
        {converted2dArr[2].map((item, i) => (
          <div key={i}>
            <MY_GITICON_CUBE_ELEMENT
              type={type}
              data={item}
              colorValue={colorValue}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MY_GITICON_CUBE;
