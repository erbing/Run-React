import React from "react";
import "./index.less";

const Switch = props => {
  let { title } = props;
  return (
    <div className="box-title">
      <span className="box-title-span">{title}</span>
    </div>
  );
};

export default Switch;
