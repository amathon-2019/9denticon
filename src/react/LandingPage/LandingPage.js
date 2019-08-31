import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import { FULLPAGE_API_KEY } from "../../secret/index";

const Fullpage = () => (
  <ReactFullpage
    //fullpage options
    licenseKey={FULLPAGE_API_KEY}
    scrollingSpeed={1000} /* Options here */
    scrollHorizontally={true} /* Because we are using the extension */
    scrollHorizontallyKey={FULLPAGE_API_KEY}
    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>
          <div className="section">
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <div>
                <p>9denticon: More Flexible generation of identicons</p>
                <p>Get your own unique identicons</p>
                <button onClick={() => fullpageApi.moveSectionDown()}>
                  Down
                </button>
              </div>
            </div>
          </div>
          <div className="section">
            <p>Section 2</p>
          </div>
        </ReactFullpage.Wrapper>
      );
    }}
  />
);

export default Fullpage;
