// btn components show page
import React from "react";
import Box from "@component/box";
import BoxTitle from "@component/boxTitle";
import Item from "@component/item";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Actions from "../../store/actions";

class PopupApp extends React.Component {
  state = {
    checked1: false,
    checked2: true,
    title: "关于我们 About"
  };

  render() {
    let aStlye = {
      color: "#ccc"
    };
    return (
      <div>
        <Box title={this.state.title}>
          <BoxTitle title="基本介绍" />
          <Item text="想法">
            第一次接触 React
            项目的时候很蹩脚。就需要学会这个框架，于是就有了这个UI组件库
          </Item>
          <Item text="UI设计">基于 Ant Design 设计</Item>
          <Item text="开发架子">webpack + react + react-router + redux</Item>
          <Item text="开发开始时间">正式投入时间是在 2018年的12月份</Item>

          <BoxTitle title="开发者" />
          <Item text="smallW">
            <a href="https://github.com/erbing" target="_blank" style={aStlye}>
              smallW's Github
            </a>
          </Item>
        </Box>
      </div>
    );
  }
  componentDidMount() {
    this.props.actions.changeTitle(this.state.title);
  }
}

const mapStateToProps = state => {
  const { title } = state;
  return { title };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
};

const connectPopupApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(PopupApp);

export default connectPopupApp;
