import React from "react";
import "./index.less";

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
        <div>123</div>
        <canvas id="verify" />
      </div>
    );
  }

  componentDidMount() {
    let convas = document.getElementById("verify");
  }
}
export default Verify;
