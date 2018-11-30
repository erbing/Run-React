import React from "react";
import "./index.less";

class Toast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
  }
  render() {
    let { visible, children } = this.props;
    let { show } = this.state;
    // 先赋值给 state.show
    show = visible;
    return (
      <div className={show ? "run-toast run-toast-open" : "run-toast"}>
        {show && <div className="run-toast-container">{children}</div>}
      </div>
    );
  }
}

export default Toast;
