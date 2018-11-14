import React from "react";

import "./index.less";

class Button extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let { type, text } = this.props;

    return (
      <a className={"run-button " + "run-button-" + (type ? type : "default")}>
        <span>{text}</span>
      </a>
    );
  }
}

export default Button;
