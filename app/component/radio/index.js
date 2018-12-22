import React from "react";
import "./index.less";

class Radio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: props.defaultChecked ? true : props.checked
    };
  }

  //   componentWillReceiveProps(nextProps) {
  //     console.log(nextProps, "---nextProps---");
  //     if ("checked" in nextProps) {
  //       this.setState({
  //         checked: !!nextProps.checked
  //       });
  //     }
  //   }

  onValueChange = () => {
    const { disabled, onChange } = this.props;
    const { checked } = this.state;
    if (disabled) {
      return;
    }
    this.setState({
      checked: !checked
    });
    setTimeout(() => {
      if (typeof onChange === "function") {
        onChange(this.state.checked);
      }
    }, 0);
  };

  render() {
    let { defaultChecked, disabled, children, ...others } = this.props;
    let { checked } = this.state;

    return (
      <div className="run-radio">
        <div
          className={
            disabled
              ? "run-radio-wrapper flex-y radio-disabled"
              : "run-radio-wrapper flex-y"
          }
        >
          <span
            className={
              checked
                ? "run-radio-inner run-radio-inner-checked"
                : "run-radio-inner"
            }
          />
          <input
            type="radio"
            className="radio-main"
            disabled={disabled}
            checked={checked}
            onChange={this.onValueChange}
          />
          {children && <span className="radio-text">{children}</span>}
        </div>
      </div>
    );
  }
}

export default Radio;
