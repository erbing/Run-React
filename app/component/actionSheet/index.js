import React from "react";
import "./index.less";
import Mast from "@component/mask";

class ActionSheet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      maskClick: true
    };
  }

  render() {
    let { visible, onClose, actions } = this.props;
    let actionStyle = {
      transitionDuration: "200ms"
    };
    return (
      visible && (
        <div className="run-actionSheet">
          <div
            className={
              !visible ? "action-main" : "action-main action-animation "
            }
            style={visible ? actionStyle : ""}
          >
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
          <Mast visiblemask={visible ? "1" : "0"} onClick={onClose} />
        </div>
      )
    );
  }
}

export default ActionSheet;
