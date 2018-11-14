import React from "react";
import "./index.less";

class Box extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let { title } = this.props;
    let titles = title.split(" ");
    return (
      <div className="h5-box">
        <div className="h5-box-header flex-y flex-between">
          <div className="title flex-y">
            <i className="icon-sort icon icon-box" />
            <div className="title-right">
              <span>{titles[0]}</span>
              <span className="title-right-name">{titles[1]}</span>
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
