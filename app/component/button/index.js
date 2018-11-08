import React from "react";
import "./index.less";

class Button extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <button className="comp-button">123</button>
      </div>
    );
  }
}

export default Button;
