import React from "react";
import "./index.less";

const Mask = props => {
  let { visiblemask } = props;
  return (
    <div
      className={
        "run-mask" + visiblemask == 1 ? "mask-transition" : "run-mask-leave"
      }
      {...props}
    />
  );
};

export default Mask;
