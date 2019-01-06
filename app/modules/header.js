import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props, "--- this props title---");
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

const mapStateToProps = state => {
  const { title } = state;
  return { title };
};

const mapDispatchToProps = dispatch => {
  return {};
};

const connectHeader = connect(mapStateToProps, mapDispatchToProps)(Header);

export default connectHeader;
