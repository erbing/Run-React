import React from "react";
import "./index.less";

const imgPath =
  "https://img2018.cnblogs.com/blog/675289/201901/675289-20190116165247535-2019476226.jpg";

class newCanvas {
  constructor(options) {
    this.width = options.width ? options.width : 300;
    this.height = options.height ? options.height : 150;
  }
}

class Verify extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: 1,
      startX: 0,
      moveX: 0,
      endX: 0,
      leftStyle: {
        left: 10
      },
      lefts: 10
    };
  }

  render() {
    return (
      <div>
        <img src={imgPath} className="show-img" />
        <canvas id="verify" className="verify-canvas" />
        <div className="sliding">
          <div
            className="sliding-btn flex-xy"
            id="moveBtn"
            style={{ left: this.state.lefts + "px" }}
          >
            <i className={"icon-right icon sliding-btn-icon"} />
          </div>
        </div>
      </div>
    );
  }

  moveBtn() {
    let moveBtnDom = document.getElementById("moveBtn");

    moveBtnDom.onmousedown = e => {
      this.state.startX = e.clientX;
      console.log(e.clientX, "---start---");
    };

    moveBtnDom.onmousemove = e => {
      if (this.state.startX) {
        this.state.moveX = e.clientX - this.state.startX;
        console.log(this.state.moveX);
        if (this.state.moveX < 0) {
          this.state.moveX = 0;
        }
        this.setState({
          lefts: this.state.moveX
        });
        // this.state.leftStyle.left = this.state.moveX + "px";
      }
    };

    moveBtnDom.onmouseup = e => {
      if (this.state.startX) {
        console.log(e.clientX, "---end---");
        this.state.startX = 0;
      }
    };
  }

  moveStart(e) {}

  moveing() {}

  moveEnd() {}

  componentDidMount() {
    let cavs = document.getElementById("verify");
    cavs.width = 400;
    cavs.height = 200;
    let drawArea = cavs.getContext("2d");

    this.moveBtn();

    let imgs = new Image();
    imgs.src = imgPath;
    imgs.onload = drawImg();

    console.log(imgs);

    function drawImg() {
      drawArea.drawImage(imgs, 0, 0, cavs.width, cavs.height);
    }
    // cavs.drawImage(imgPath, 10, 10);
  }
}
export default Verify;
