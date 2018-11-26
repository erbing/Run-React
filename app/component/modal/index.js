import React from "react";
import Mast from "@component/mask";
import "./index.less";

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      alert: false,
      confirm: false
    };
  }

  close() {
    console.log(123);
    this.setState({
      visible: false
    });
  }

  render() {
    let { title, content, visible, onClose, ...others } = this.props;
    let maskStyle = {
      width: "70%",
      animationDuration: "200ms"
    };

    return (
      visible && (
        <div className="run-modal">
          <div className="run-modal-wrapper">
            <div
              className={
                visible ? "run-modal-dialog run-modal-show" : "run-modal-hide"
              }
              style={maskStyle}
            >
              <div className="run-modal-header">
                <div className="run-modal-header-title">{title}</div>
                <div className="run-modal-header-close" onClick={onClose}>
                  <i className="icon-close_light icon" />
                </div>
              </div>
              <div className="run-modal-content">{content}</div>
              {/* <div className="run-modal-confirm">确定</div> */}
            </div>
          </div>
          <Mast visiblemask={visible ? "1" : "0"} />
        </div>
      )
    );
  }
}

export default Modal;
