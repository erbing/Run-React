import React from "react";
import "./index.less";

const Mask = props => {
  let { visiblemask } = props;
  return (
    <div
      className={visiblemask == 1 ? "run-mask" : "run-mask-leave"}
      {...props}
    />
  );
};

export default Mask;
