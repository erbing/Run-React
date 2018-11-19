import React from "react";
import "./index.less";

const Item = props => {
  let { text, children } = props;
  return (
    <div className="run-item-wrap">
      <div className="run-item flex-y flex-between">
        <span className="run-item-left">{text}</span>
        <span className="run-item-right">{children}</span>
      </div>
    </div>
  );
};

export default Item;
