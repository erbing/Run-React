// btn components show page
import React from "react";
import Box from "@component/box";
import BoxTitle from "@component/boxTitle";
import Input from "@component/input";
import Radio from "@component/radio";
import Item from "@component/item";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Actions from "../../store/actions";

const radios = {
  checked1: false,
  checked2: true,
  checked3: false,
  checked4: true
};

const changeCheck = data => {
  radios.checked1 = data;
};

class RadioApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "单选框 Radio"
    };
  }
  render() {
    return (
      <div>
        <Box title={this.state.title}>
          <BoxTitle title="基本用法" />
          <Item radio>
            <Radio
              checked={radios.checked1}
              onChange={data => {
                changeCheck(data);
              }}
            >
              普通
            </Radio>
          </Item>
          <Item radio>
            <Radio defaultChecked>默认选中</Radio>
          </Item>
          <Item radio>
            <Radio checked={radios.checked3} disabled>
              禁用
            </Radio>
          </Item>
          <Item radio>
            <Radio defaultChecked disabled>
              选中且禁用
            </Radio>
          </Item>

          <BoxTitle title="按钮样式" />
          <Item radio>
            <Radio defaultChecked>默认选中</Radio>
          </Item>

          <BoxTitle title="块级样式" />
          <Item radio>
            <Radio defaultChecked>默认选中</Radio>
          </Item>

          <BoxTitle title="列表样式" />
          <Item radio>
            <Radio defaultChecked>默认选中</Radio>
          </Item>

          <BoxTitle title="列表样式禁用状态" />
          <Item radio>
            <Radio defaultChecked>默认选中</Radio>
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

const connectRadioApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(RadioApp);

export default connectRadioApp;
