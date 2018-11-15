import React from "react";
import "./index.less";

const Block = props => {
  let { color, text, textColor, className } = props;
  let bgStyle = {
    background: color,
    color: textColor
  };
  return (
    <div className={"color-block flex-y " + className} style={bgStyle}>
      <span className="box-title-span">{text}</span>
    </div>
  );
};

export default Block;
