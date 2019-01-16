// btn components show page
import React from "react";
import Switch from "@component/switch";
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
    title: "开始使用 Start"
  };

  handleCheck = value => {
    console.log(value);
    state.checked = value;
  };

  render() {
    return (
      <div>
        <Box title={this.state.title}>
          <BoxTitle title="基本用法" />
          <Item text="普通">
            <Switch
              checked={this.state.checked1}
              onChange={v => {
                handleCheck(v);
              }}
            />
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
