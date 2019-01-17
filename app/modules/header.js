import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

const imgGithub = require("./images/github.png");

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  toGithub() {
    window.location.href = "https://github.com/erbing/Run-React";
  }

  render() {
    let { title } = this.props;
    return (
      <div className="main-header flex-y flex-between">
        <span className="header-title">{title}</span>
        <img
          src={imgGithub}
          alt="github"
          className="header-github"
          onClick={() => {
            this.toGithub();
          }}
        />
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
