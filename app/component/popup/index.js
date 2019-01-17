import React from "react";
import "./index.less";
import Mask from "@component/mask";
import classNames from "classnames";

class Popup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showSheet: false
    };
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.visible) {
      // setTimeout(() => {
      //   this.setState({
      //     showSheet: nextProps.visible
      //   });
      // }, 100);
      this.setState({
        showSheet: nextProps.visible
      });
    }
  }
  render() {
    let { visible, showMask, onClose, children, type } = this.props;
    let { showSheet } = this.state;
    let isShowMask = visible && showMask;
    let popupClass = classNames({
      "popup-wrapper": true,
      ["popup-content-" + `${type}`]: true,
      ["popup-content-enter-" + `${type}`]: showSheet
    });

    let runPopupStyle = {
      visibility: visible ? "visible" : "hidden"
    };

    return (
      <div>
        <div className="run-popup" style={runPopupStyle}>
          <div className={popupClass}>
            <div
              className={
                type == "top" || type == "bottom" ? "popup-box1" : "popup-box2"
              }
            >
              {children}
            </div>
          </div>
          <Mask
            visiblemask={isShowMask ? 1 : 0}
            onClick={() => {
              onClose();
              this.setState({ showSheet: false });
            }}
          />
        </div>
      </div>
    );
  }
}

export default Popup;
