import React from "react";
import "./index.less";
import Mast from "@component/mask";

class ActionSheet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      maskClick: true,
      showSheet: false,
      showVisible: false
    };
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps, "nextProps");
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
      setTimeout(() => {
        console.log("setTimeout100");
        this.setState({
          showSheet: false
        });
        // nextProps.onClose();
      }, 100);
      setTimeout(() => {
        console.log("setTimeout200");
        this.setState({
          showVisible: false
        });
        // nextProps.onClose();
      }, 100);
    }
  }

  render() {
    let { visible, onClose, actions } = this.props;
    let { showSheet, showVisible } = this.state;
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
