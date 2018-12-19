import React from "react";
import "./index.less";

const Item = props => {
  let { text, children, flex } = props;
  let flexStyle = {
    marginRight: "30px"
  };
  return (
    <div className="run-item-wrap">
      <div className="run-item flex-y flex-between">
        <span className="run-item-left" style={flex ? flexStyle : {}}>
          {text}
        </span>
        <span className={flex ? "run-item-right" : ""}>{children}</span>
      </div>
    </div>
  );
};

export default Item;
