import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import { FULLPAGE_API_KEY } from "../../secret/index";
import { Link } from "react-router-dom";

const Fullpage = () => (
  <ReactFullpage
    licenseKey={FULLPAGE_API_KEY}
    scrollingSpeed={1000} /* Options here */
    scrollHorizontally={true} /* Because we are using the extension */
    scrollHorizontallyKey={FULLPAGE_API_KEY}
    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>
          {/* section 1 */}
          <div
            className="section"
            style={{ backgroundColor: "rgb(32, 33, 34)" }}
          >
            <div className="page1_sectionContainer">
              <div>
                <div className="page1_titleText">
                  9denticon: More Flexible generation of identicons
                </div>
                <div className="page1_subText">자신만의 고유한 아이덴티콘</div>
              </div>
            </div>
          </div>
          {/* section 2 */}
          <div
            className="section"
            style={{ backgroundColor: "rgb(32, 33, 34)" }}
          >
            <div className="page2_sectionContainer">
              <div className="page2_leftElem">
                <div className="page2_titleText">What is 9denticon?</div>
                <div className="page2_subText">
                  <div>옆에 보이는 Giticon처럼 중복 없는</div>
                  <div>랜덤 프로필 사진을 만들어주는 라이브러리입니다.</div>
                </div>
              </div>
              <div>
                <img
                  src={require("../../assets/images/giticon.png")}
                  style={{ width: "200px", height: "200px" }}
                />
              </div>
            </div>
          </div>
          {/* section 3 */}
          <div
            className="section"
            style={{ backgroundColor: "rgb(32, 33, 34)" }}
          >
            <div className="page3_sectionContainer">
              <div>
                <div className="page3_titleText">
                  The difference between 9denticon and identicon
                </div>
                <div className="page3_subText_container">
                  <div className="page3_subText">
                    - 보다 아름다움을 추구하며 중복없는 독창적인 프로필 이미지를
                    제공합니다.
                  </div>
                  <div className="page3_subText">
                    - SVG 및 JPEG등.. 이미지 파일로 추출 및 저장할 수 있습니다.
                  </div>
                </div>
                <div className="page3_image_container">
                  <img
                    src={require("../../assets/images/whiteBackCircle.png")}
                    className="page3_image"
                  />
                  <img
                    src={require("../../assets/images/whiteBackTree.png")}
                    className="page3_image"
                  />
                  <img
                    src={require("../../assets/images/impressiveIcon.jpeg")}
                    className="page3_image"
                  />
                  <img
                    src={require("../../assets/images/goticon.jpeg")}
                    className="page3_image"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* section 4 */}
          <div
            className="section"
            style={{ backgroundColor: "rgb(32, 33, 34)" }}
          >
            <div className="page4_sectionContainer">
              <div>
                <div className="page4_titleText">9denticon Mechanism</div>
                <div className="page4_subText_container">
                  <div className="page4_subText">
                    - 해시 알고리즘(SHA-1, Etc..)을 이용하여 임의의 문자열을
                    생성합니다.
                  </div>
                  <div className="page4_subText">
                    - 임의 문자열에서 매개 변수 추출합니다.
                  </div>
                  <div className="page4_subText">
                    - 추출한 매개변수를 사용하여 9denticon을 생성합니다.
                  </div>
                </div>
                <div className="page4_image_container">
                  <img
                    src={require("../../assets/images/9denticonMeka.png")}
                    className="page4_image"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* section 5 */}
          <div
            className="section"
            style={{ backgroundColor: "rgb(32, 33, 34)" }}
          >
            <div className="page5_sectionContainer">
              <div className="page5_GoToPage_Container">
                <Link
                  className="page5_GoToPage"
                  to="/"
                  onClick={() => localStorage.setItem("isAboutShown", true)}
                >
                  Go To 9denticon
                </Link>
              </div>
            </div>
          </div>
        </ReactFullpage.Wrapper>
      );
    }}
  />
);

export default Fullpage;
