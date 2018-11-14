import React from "react";
import "./index.less";

const BoxTitle = props => {
  let { title } = props;
  return (
    <div className="box-title">
      <span className="box-title-span">{title}</span>
    </div>
  );
};

export default BoxTitle;
