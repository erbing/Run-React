import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { title } = this.props;
    return (
      <div className="main-header">
        <span className="header-title">{title}</span>
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

const connectHeader = connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);

export default connectHeader;
