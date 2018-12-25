import React from "react";
import "./index.less";

class Switch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false
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

  render() {
    return (
      <span className="run-switch">
        <input
          type="checkbox"
          className="switch-input"
          value=""
          onChange={this.onValueChange}
        />
      </span>
    );
  }
}

export default Switch;
