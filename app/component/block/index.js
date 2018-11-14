import React from "react";
import "./index.less";

const Block = props => {
  let { color, text, textColor } = props;
  let bgStyle = {
    background: color,
    color: textColor
  };
  return (
    <div className="color-block flex-y" style={bgStyle}>
      <span className="box-title-span">{text}</span>
    </div>
  );
};

export default Block;
