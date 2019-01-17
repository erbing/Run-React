import React from "react";
import "./index.less";
import classNames from "classnames";

const Mask = props => {
  let { visiblemask } = props;
  let curStyle = {
    visibility: visiblemask == 1 ? "visible" : "hidden"
  };
  let maskClass = classNames({
    "run-mask": true,
    "run-mask-enter": visiblemask == 1,
    "run-mask-leave": visiblemask != 1
  });
  return <div className={maskClass} {...props} style={curStyle} />;
};

export default Mask;
