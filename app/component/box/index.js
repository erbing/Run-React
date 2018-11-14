import React from "react";
import "./index.less";

class Box extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="h5-box">
        <div className="h5-box-header flex-y flex-between">
          <div className="title flex-y">
            <i className="icon-sort icon icon-box" />
            <div className="title-right">
              <span>按钮</span>
              <span className="title-right-name">Button</span>
            </div>
          </div>
          <div className="github">
            <i className="icon-favor icon icon-box" />
          </div>
        </div>
        <div className="h5-box-content">{this.props.children}</div>
      </div>
    );
  }
}

export default Box;
