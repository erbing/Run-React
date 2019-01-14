import React from "react";
import "./index.less";
import Mast from "@component/mask";

class ActionSheet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      maskClick: true,
      showSheet: false,
      showVisible: false,
      showCancel: false
    };
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.visible) {
      this.setState({
        showVisible: nextProps.visible
      });
      setTimeout(() => {
        this.setState({
          showSheet: nextProps.visible
        });
      }, 100);
    } else {
      this.setState({
        showSheet: false,
        showVisible: false
      });
    }

    if (
      nextProps.visible &&
      nextProps.onCancel &&
      typeof nextProps.onCancel == "function"
    ) {
      this.setState({
        showCancel: true
      });
    }
  }

  render() {
    let { visible, onClose, actions, onCancel, type } = this.props;
    let { showSheet, showVisible, showCancel } = this.state;
    let actionStyle = {
      transitionDuration: "200ms"
    };
    return (
      showVisible && (
        <div className="run-actionSheet">
          <div
            className={
              !showSheet ? "action-main" : "action-main action-animation "
            }
            style={showVisible ? actionStyle : ""}
          >
            <div className={type ? "item-radius" : ""}>
              {actions &&
                actions.length > 0 &&
                actions.map((action, index) => {
                  return (
                    <a
                      className="action-item"
                      key={+index}
                      onClick={action.onClick}
                    >
                      {action.txt}
                    </a>
                  );
                })}
            </div>

            <div className={type ? "item-radius" : ""}>
              {showCancel && (
                <a className="action-item item-cancel" onClick={onCancel}>
                  取消
                </a>
              )}
            </div>
          </div>
          <Mast visiblemask={visible ? "1" : "0"} onClick={onClose} />
        </div>
      )
    );
  }
}

export default ActionSheet;
