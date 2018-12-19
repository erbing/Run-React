import React from "react";
import "./index.less";

export default class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let { ...others } = this.props;
    return (
      <div className="run-input-warper">
        <input className="run-input show-inout" {...others} />
      </div>
    );
  }
}
