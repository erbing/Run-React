import React from "react";
import "./index.less";

class Box extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div className="h5-box">{this.props.children}</div>;
  }
}

export default Box;
