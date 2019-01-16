import React from "react";
import "./index.less";

const imgPath =
  "https://img2018.cnblogs.com/blog/675289/201901/675289-20190116164128915-1434002987.jpg";

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
      type: 1
    };
  }

  render() {
    return (
      <div>
        <img src={imgPath} className="show-img" />
        <canvas id="verify" className="verify-canvas" />
      </div>
    );
  }

  componentDidMount() {
    let cavs = document.getElementById("verify");
    cavs.width = 400;
    cavs.height = 200;
    let drawArea = cavs.getContext("2d");

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
