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
    // console.log(nextProps, "nextProps");
    // clearTimeout(this.timer);
    if (nextProps.visible) {
      this.setState({
        visible: nextProps.visible
      });

      setTimeout(() => {
        console.log("setTimeout");
        this.setState({
          visible: false
        });
        nextProps.onClose();
      }, this.props.time ? this.props.time : 1500);
    }
  }

  render() {
    let { children, type } = this.props;
    let { visible } = this.state;
    // 先赋值给 state.show
    return (
      <div className={visible ? "run-toast run-toast-open" : "run-toast"}>
        {visible && (
          <div className="run-toast-container">
            {children}
            {type == "fail" && (
              <div className="toast-fail">
                <i className="icon-roundclosefill icon icon-fail" />
                <div className="toast-fail-title">Error</div>
              </div>
            )}
            {type == "warning" && (
              <div className="toast-warning">
                <i className="icon-warnfill icon icon-warning" />
                <div className="toast-warning-title">Warning</div>
              </div>
            )}

            {type == "success" && (
              <div className="toast-success">
                <i className="icon-roundcheckfill icon icon-success" />
                <div className="toast-success-title">Success</div>
              </div>
            )}
            {type == "loading" && (
              <div className="toast-loading">
                <i className="icon-loading icon icon-loadings" />
                <div className="toast-loading-title">Loading</div>
              </div>
            )}
          </div>
        )}
      </div>
    );
  }
}

export default Toast;
