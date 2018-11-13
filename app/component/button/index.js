import React from "react";

import "./index.less";

class Button extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let { type } = this.props;

    return (
      <a className={"run-button " + "run-" + type}>
        <span>default</span>
      </a>
    );
  }
}

export default Button;
