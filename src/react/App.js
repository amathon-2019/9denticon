import React, { Component } from "react";
import sha1 from "sha-1";
import domtoimage from "dom-to-image";
import { array2dMaker } from "../helper/utils";
import MY_GITICON_CONTAINER from "./component/MY_GITICON_CONTAINER";

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
    const node = document.getElementById(idName);
    domtoimage.toJpeg(node, { quality: 0.95 }).then(function(dataUrl) {
      var link = document.createElement("a");
      link.download = "my-9denticon.jpeg";
      link.href = dataUrl;
      link.click();
    });
  }

  render() {
    return (
      <>
        <div>DEV environment - Demo Page</div>
        <div>{`HASH TEXT : ${this.state.textHash}`}</div>

        <div>
          <div>
            <input type="text" onChange={e => this.handleChange(e)} />
            <button onClick={this.convertBinary}>변환</button>
          </div>
          {this.state.binaryTextSource.length > 0 ? (
            <div>
              <div>시안 1</div>
              <div id="solidDown" style={{ display: "inline-block" }}>
                <MY_GITICON_CONTAINER
                  type="solid"
                  binaryTextSource={this.state.binaryTextSource}
                />
              </div>
              <div>
                <button onClick={() => this.downloadImage("solidDown")}>
                  다운로드
                </button>
              </div>
              <div>시안 2 : Goticon - 바둑판에서 영감을 얻은..?</div>
              <div id="circleDown" style={{ display: "inline-block" }}>
                <MY_GITICON_CONTAINER
                  type="circle"
                  binaryTextSource={this.state.binaryTextSource}
                />
              </div>
              <div>
                <button onClick={() => this.downloadImage("circleDown")}>
                  다운로드
                </button>
              </div>
            </div>
          ) : null}
        </div>
      </>
    );
  }
}

export default App;
