import React from "react";
import "./index.less";

const Mask = props => {
  let { visiblemask } = props;
  let curStyle = {
    visibility: visiblemask == 1 ? "visible" : "hidden"
  };
  return (
    <div
      className={visiblemask == 1 ? "run-mask" : "run-mask-leave"}
      {...props}
      style={curStyle}
    />
  );
};

export default Mask;
