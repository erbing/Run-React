import React from "react";
import "./index.less";

class Toast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: props.visible
    };
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps, "nextProps");
    // clearTimeout(this.timer);

    // if (nextProps.visible) {
    //   this.enter(nextProps);
    // } else {
    //   this.leave(nextProps);
    // }
    if (nextProps.visible) {
      this.setState({
        visible: nextProps.visible
      });
      setTimeout(() => {
        console.log("setTimeout");
        this.setState({
          visible: false
        });
      }, 1000);
    }
  }

  render() {
    let { children } = this.props;
    let { visible } = this.state;
    // 先赋值给 state.show
    return (
      <div className={visible ? "run-toast run-toast-open" : "run-toast"}>
        {visible && <div className="run-toast-container">{children}</div>}
      </div>
    );
  }
}

export default Toast;
