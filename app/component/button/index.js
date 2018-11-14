import React from "react";

import "./index.less";

class Button extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let { type, text, display, disabled, radius } = this.props;
    let isPercent = radius ? radius.indexOf("%") > -1 : false;

    let styles = {
      borderRadius: isPercent ? radius : radius + "px"
    };
    // 特殊处理 圆形
    if (isPercent && radius.replace("%", "") > 49) {
      styles = {
        borderRadius: "50%",
        padding: "16px",
        width: "44px"
      };
    }
    console.log(styles, 123);
    return (
      <a
        className={
          "run-button " +
          "run-button-" +
          (type ? type : "default") +
          (display == "block" ? " display" : "") +
          (disabled ? " disabled" : " ")
        }
        style={styles}
      >
        <span>{text}</span>
      </a>
    );
  }
}

export default Button;
