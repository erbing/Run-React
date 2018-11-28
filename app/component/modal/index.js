import React from "react";
import Mast from "@component/mask";
import "./index.less";

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      maskClick: false, // 点击 mask 可用隐藏全部
      noHead: false, // 没有 modal 的 header 部分
      alert: false,
      confirm: false
    };
  }

  close() {
    this.setState({
      visible: false
    });
  }

  render() {
    let { title, content, visible, onClose, type, ...others } = this.props;
    let { maskClick, noHead } = this.state;
    let maskStyle = {
      width: "70%",
      animationDuration: "200ms"
    };
    let wrapperStyle = {};
    // 需要圆角
    if (type && type.indexOf("radius") > -1) {
      wrapperStyle = {
        borderRadius: "5px"
      };
    }

    if (type && type.indexOf("mask") > -1) {
      this.state.maskClick = true;
    }

    if (type && type.indexOf("noHead") > -1) {
      this.state.maskClick = true;
      this.state.noHead = true;
    }

    // alert 类型
    if (type && type.indexOf("alert") > -1) {
      this.state.alert = true;
    }

    // confirm 类型
    if (type && type.indexOf("confirm") > -1) {
      this.state.confirm = true;
    }

    return (
      visible && (
        <div className="run-modal">
          <div className="run-modal-wrapper">
            <div
              className={
                visible ? "run-modal-dialog run-modal-show" : "run-modal-hide"
              }
              style={Object.assign(maskStyle, wrapperStyle)}
            >
              {!noHead && (
                <div className="run-modal-header">
                  <div className="run-modal-header-title">{title}</div>
                  {!maskClick && (
                    <div className="run-modal-header-close" onClick={onClose}>
                      <i className="icon-close_light icon" />
                    </div>
                  )}
                </div>
              )}
              <div className="run-modal-content">{content}</div>
              {alert && <div className="run-modal-confirm">确定</div>}
            </div>
          </div>
          <Mast
            visiblemask={visible ? "1" : "0"}
            onClick={
              maskClick
                ? onClose
                : () => {
                    return;
                  }
            }
          />
        </div>
      )
    );
  }
}

export default Modal;
