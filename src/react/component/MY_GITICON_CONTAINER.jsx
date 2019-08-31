import React from "react";
import MY_GITICON from "./MY_GITICON";

const MY_GITICON_CONTAINER = ({ binaryTextSource, type }) => {
  if (binaryTextSource === undefined) return;
  return (
    <>
      <div
        style={{
          display: "inline-block",
          height: undefined,
          width: undefined,
          border: "3px solid rgba(0,0,0,0.5)"
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row"
          }}
        >
          <div>
            <MY_GITICON
              type={type}
              dataSource={binaryTextSource.filter(item => item.length === 9)}
              colorValue={binaryTextSource.filter(item => item.length !== 9)}
            />
          </div>
          <div
            style={{
              transform: "scale(-1, 1)"
            }}
          >
            <MY_GITICON
              type={type}
              dataSource={binaryTextSource.filter(item => item.length === 9)}
              colorValue={binaryTextSource.filter(item => item.length !== 9)}
            />
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "row" }}>
          <div
            style={{
              transform: "scale(1, -1)"
            }}
          >
            <MY_GITICON
              type={type}
              dataSource={binaryTextSource.filter(item => item.length === 9)}
              colorValue={binaryTextSource.filter(item => item.length !== 9)}
            />
          </div>
          <div
            style={{
              transform: "scale(-1, -1)"
            }}
          >
            <MY_GITICON
              type={type}
              dataSource={binaryTextSource.filter(item => item.length === 9)}
              colorValue={binaryTextSource.filter(item => item.length !== 9)}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default MY_GITICON_CONTAINER;
