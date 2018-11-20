import React from "react";
import Mast from "@component/mask";
import "./index.less";

const Modal = props => {
  let { title, content, visible } = props;
  let maskStyle = {
    width: "70%",
    animationDuration: "200ms"
  };
  const close = () => {
    alert(111);
    visible = false;
  };
  return (
    <div className="run-modal">
      <div className="run-modal-wrapper">
        <div className="run-modal-dialog" style={maskStyle}>
          <div className="run-modal-header">
            <div className="run-modal-header-title">{title}</div>
            <div className="run-modal-header-close" onClick={close}>
              <i className="icon-close_light icon" />
            </div>
          </div>
          <div className="run-modal-content">{content}</div>
          {/* <div className="run-modal-confirm">确定</div> */}
        </div>
      </div>
      <Mast />
    </div>
  );
};

export default Modal;
