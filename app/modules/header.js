import React from "react";
import { Link } from "react-router-dom";

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    console.log(props, "---props---");
    console.log(this, "---Link---");
  }

  render() {
    let { title } = this.props;
    return (
      <div className="header">
        {/* <i className="icon icon-appreciate"></i>
                 <i className="icon icon-check"></i> */}
        <h2>{title}</h2>
      </div>
    );
  }
}
