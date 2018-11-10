import React from "react";

import "./index.less";

class Button extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <a className="run-button run-a">default</a>
      </div>
    );
  }
}

export default Button;
