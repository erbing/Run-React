// btn components show page
import React from "react";
import Button from "@component/button/";
import Box from "@component/box";
import BoxTitle from "@component/boxTitle";
import Input from "@component/input";
import Item from "@component/item";
import "./index.less";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Actions from "../../store/actions";

class InputApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "文本框 Input"
    };
  }
  render() {
    return (
      <div>
        <Box title={this.state.title}>
          <BoxTitle title="基本用法" />
          <Item text="单行文本" flex>
            <Input placeholder="请输入" />
          </Item>
          <Item text="多行文本" flex>
            <Input placeholder="请输入" />
          </Item>

          <BoxTitle title="输入类型" />
          <Item text="数字" flex>
            <Input placeholder="请输入" />
          </Item>
          <Item text="金额" flex>
            <Input placeholder="请输入" />
          </Item>
          <Item text="身份证" flex>
            <Input placeholder="请输入" />
          </Item>

          <BoxTitle title="高度自适应" />
          <Item text="数字" flex>
            <Input placeholder="请输入" />
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

const connectInputApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(InputApp);

export default connectInputApp;
