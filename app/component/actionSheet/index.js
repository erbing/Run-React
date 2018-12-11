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
    let { visible, onClose } = this.props;
    return (
      visible && (
        <div className="run-actionSheet">
          <div>132</div>
          <Mast visiblemask={visible ? "1" : "0"} onClick={onClose} />
        </div>
      )
    );
  }
}

export default ActionSheet;
