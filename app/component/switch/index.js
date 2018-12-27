import React from "react";
import "./index.less";

class Switch extends React.Component {
  constructor(props) {
    super(props);
    console.log(props, "---props");
    this.state = {
      checked: props.checked ? props.checked : false
    };
  }

  onValueChange = () => {
    const { disabled, onChange } = this.props;
    if (disabled) {
      return;
    }

    const checked = !this.state.checked;
    this.setState({ checked });

    if (typeof onChange === "function") {
      onChange(checked);
    }
  };

  componentWillReceiveProps(nextProps) {
    console.log(nextProps, "---nextProps---");
    if (nextProps.checked) {
      this.setState({
        checked: nextProps.checked
      });
    }
  }

  render() {
    let { checked } = this.state;
    let { disabled } = this.props;
    console.log(checked, "---checked");
    return (
      <span className={!disabled ? "run-switch" : "run-switch disabled"}>
        <input
          type="checkbox"
          className="switch-input"
          value={checked ? "on" : "off"}
          onChange={this.onValueChange}
          checked={checked ? "checked" : ""}
        />
      </span>
    );
  }
}

export default Switch;
