import React, { Component } from "react";
import sha1 from "sha-1";
import domtoimage from "dom-to-image";
import { array2dMaker } from "../helper/utils";
import MY_GITICON_CONTAINER from "./component/impressiveGiticon/MY_GITICON_CONTAINER";
import ArticonTree from "./component/identicon/ArticonTree";
import ArticonCircle from "./component/identicon/ActionCircle";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: "",
      textHash: "",
      binaryText: "",
      binaryTextSource: []
    };
    this.addZero = this.addZero.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.convertBinary = this.convertBinary.bind(this);
    this.downloadImage = this.downloadImage.bind(this);
  }

  handleChange(e) {
    this.setState({
      inputText: e.target.value
    });
  }

  convertBinary() {
    const binaryStringArr = sha1(this.state.inputText).split("");
    this.setState({
      textHash: sha1(this.state.inputText),
      binaryTextSource: array2dMaker(
        binaryStringArr.map(string =>
          parseInt(string, 16).toString(2).length === 4
            ? parseInt(string, 16).toString(2)
            : this.addZero(parseInt(string, 16).toString(2))
        ),
        9
      )
    });
  }

  addZero(convertedSHex) {
    let tempStr = convertedSHex;
    while (tempStr.length < 4) {
      tempStr += "0";
    }
    return tempStr
      .split("")
      .reverse()
      .join("");
  }

  downloadImage(idName) {
    const node = document.getElementById(idName).childNodes[0];
    domtoimage.toJpeg(node, { quality: 0.95 }).then(function(dataUrl) {
      var link = document.createElement("a");
      link.download = "my-9denticon.jpeg";
      link.href = dataUrl;
      link.click();
    });
  }

  render() {
    return (
      <div className="APP_Background">
        <div className="APP_InputBox_Container">
          <div className="APP_Title">9denticon</div>
          <div className="APP_Input_Container">
            <input
              className="APP_Input"
              type="text"
              onChange={e => this.handleChange(e)}
              placeholder="9denticon으로 만들고 싶은 텍스트를 입력해주세요."
            />
            <button className="APP_ConverBtn" onClick={this.convertBinary}>
              변환
            </button>
          </div>
        </div>

        <div className="APP_Body_Container">
          <div className="APP_HashText">
            {this.state.textHash ? `HASH TEXT : ${this.state.textHash}` : null}
          </div>
          {this.state.binaryTextSource.length > 0 ? (
            <div className="APP_Design_Container">
              <div className="APP_Design_Content">
                <div className="APP_Design_Title">Impressive Giticon</div>
                <div className="APP_Design_Description">
                  <div>기존 Giticon에 비해 중복도 없이 만들어봤습니다.</div>
                  <div>
                    기존 Giticon은 5x5 Pixel, Impressive Giticon은 12x12
                    Pixel입니다.
                  </div>
                </div>
                <div id="solidDown" style={{ display: "inline-block" }}>
                  <MY_GITICON_CONTAINER
                    type="solid"
                    binaryTextSource={this.state.binaryTextSource}
                  />
                </div>
                <button
                  className="APP_Design_DownloadBtn"
                  onClick={() => this.downloadImage("solidDown")}
                >
                  다운로드
                </button>
              </div>
              <div className="APP_Design_Content">
                <div className="APP_Design_Title">Goticon</div>
                <div className="APP_Design_Description">
                  <div>바둑판을 착안하여 만들어본 Goticon입니다.</div>
                  <div>위와 같이 12x12 Pixel입니다.</div>
                </div>
                <div id="goticon" style={{ display: "inline-block" }}>
                  <MY_GITICON_CONTAINER
                    type="circle"
                    binaryTextSource={this.state.binaryTextSource}
                  />
                </div>
                <button
                  className="APP_Design_DownloadBtn"
                  onClick={() => this.downloadImage("goticon")}
                >
                  다운로드
                </button>
              </div>
              <div className="APP_Design_Content">
                <div className="APP_Design_Title">TreeCon</div>
                <div className="APP_Design_Description">
                  <div>
                    자신만의 고유한 나무를 가져본다는 측면이 신선하게 다가갈 수
                    있을 것입니다.
                  </div>
                </div>
                <div id="treeDown" style={{ display: "inline-block" }}>
                  <ArticonTree hashText={this.state.textHash} />
                </div>
                <button
                  className="APP_Design_DownloadBtn"
                  onClick={() => this.downloadImage("treeDown")}
                >
                  다운로드
                </button>
              </div>
              <div className="APP_Design_Content">
                <div className="APP_Design_Title">CircleCon</div>
                <div className="APP_Design_Description">
                  <div>
                    identicon을 미적으로 향상시켜본 것으로, 중복없는 아바타를
                    넘어서서 미적으로 아름다움을 제공할 수 있을 것입니다.
                  </div>
                </div>
                <div id="circleDown" style={{ display: "inline-block" }}>
                  <ArticonCircle hashText={this.state.textHash} />
                </div>
                <button
                  className="APP_Design_DownloadBtn"
                  onClick={() => this.downloadImage("circleDown")}
                >
                  다운로드
                </button>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}

export default App;
