import React from "react";
import "./index.less";

const Switch = props => {
  let { title } = props;
  return (
    <span>
      <input type="checkbox" className="switch-input" />
    </span>
  );
};

export default Switch;
