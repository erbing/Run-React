import React from "react";
import "./index.less";

const Item = props => {
  let { text } = props;
  return (
    <div className="run-item flex-y flex-between">
      <span className="run-item-left">{text}</span>
      <span className="run-item-right">123</span>
    </div>
  );
};

export default Item;
