import React from "react";
import MY_GITICON_CUBE from "./MY_GITICON_CUBE";

const MY_GITICON = ({ dataSource, colorValue, type }) => {
  if (dataSource === undefined) return;
  return (
    <>
      <div>
        <MY_GITICON_CUBE
          type={type}
          cubeData={dataSource[0]}
          colorValue={colorValue}
        />
        <MY_GITICON_CUBE
          type={type}
          cubeData={dataSource[1]}
          colorValue={colorValue}
        />
      </div>
      <div>
        <MY_GITICON_CUBE
          type={type}
          cubeData={dataSource[2]}
          colorValue={colorValue}
        />
        <MY_GITICON_CUBE
          type={type}
          cubeData={dataSource[3]}
          colorValue={colorValue}
        />
      </div>
    </>
  );
};

export default MY_GITICON;
