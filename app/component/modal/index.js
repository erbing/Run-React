import React from "react";
import "./index.less";

const Modal = props => {
  let { title, content } = props;
  return (
    <div className="box-title">
      <span className="box-title-span">{title}</span>
    </div>
  );
};

export default Modal;
