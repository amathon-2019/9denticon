import React from "react";

const MY_GITICON_CUBE_ELEMENT = ({ data, colorValue, type }) => {
  const dataArr = data.split("");
  const colorValueArr = colorValue[0];

  return (
    <>
      <div style={{ backgroundColor: "#D9A521" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItem: "center"
          }}
        >
          <div
            style={{
              width: "10px",
              height: "10px",
              backgroundColor:
                dataArr[0] == 1
                  ? `rgba(${parseInt(colorValueArr[0], 2) * 10},  
                    ${parseInt(colorValueArr[1], 2) * 10},
                    ${parseInt(colorValueArr[2], 2) * 10},
                    ${
                      (parseInt(colorValueArr[3], 2) * 6) / 100 === 0
                        ? 0.8
                        : (parseInt(colorValueArr[3], 2) * 6) / 100
                    })`
                  : "#ffffff",
              borderRadius: type === "circle" ? 5 : 0
            }}
          ></div>
          <div
            style={{
              width: "10px",
              height: "10px",
              backgroundColor:
                dataArr[1] == 1
                  ? `rgba(${parseInt(colorValueArr[0], 2) * 10},
                    ${parseInt(colorValueArr[1], 2) * 10},
                    ${parseInt(colorValueArr[2], 2) * 10},
                    ${
                      (parseInt(colorValueArr[3], 2) * 6) / 100 === 0
                        ? 0.8
                        : (parseInt(colorValueArr[3], 2) * 6) / 100
                    })`
                  : "#ffffff",
              borderRadius: type === "circle" ? 5 : 0
            }}
          ></div>
        </div>
        <div
          style={{ display: "flex", flexDirection: "row", alignItem: "center" }}
        >
          <div
            style={{
              width: "10px",
              height: "10px",
              backgroundColor:
                dataArr[2] == 1
                  ? `rgba(${parseInt(colorValueArr[0], 2) * 10},
                    ${parseInt(colorValueArr[1], 2) * 10},
                    ${parseInt(colorValueArr[2], 2) * 10},
                    ${
                      (parseInt(colorValueArr[3], 2) * 6) / 100 === 0
                        ? 0.8
                        : (parseInt(colorValueArr[3], 2) * 6) / 100
                    })`
                  : "#ffffff",
              borderRadius: type === "circle" ? 5 : 0
            }}
          ></div>
          <div
            style={{
              width: "10px",
              height: "10px",
              backgroundColor:
                dataArr[3] == 1
                  ? `rgba(${parseInt(colorValueArr[0], 2) * 10},
                    ${parseInt(colorValueArr[1], 2) * 10},
                    ${parseInt(colorValueArr[2], 2) * 10},
                    ${
                      (parseInt(colorValueArr[3], 2) * 6) / 100 === 0
                        ? 0.8
                        : (parseInt(colorValueArr[3], 2) * 6) / 100
                    })`
                  : "#ffffff",
              borderRadius: type === "circle" ? 5 : 0
              // borderRadius: 20
            }}
          ></div>
        </div>
      </div>
    </>
  );
};

export default MY_GITICON_CUBE_ELEMENT;
