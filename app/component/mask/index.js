import React from "react";
import "./index.less";

const Mask = props => {
  let { title } = props;
  return <div className="run-mask" {...props} />;
};

export default Mask;
