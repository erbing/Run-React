// btn components show page
import React from "react";
import Switch from "@component/switch";
import Box from "@component/box";
import BoxTitle from "@component/boxTitle";
import Item from "@component/item";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Actions from "../../store/actions";

class SwitchApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked1: false,
      checked2: true,
      title: "开关 Switch"
    };
  }

  handleCheck(value) {
    console.log(value);
    this.state.checked = value;
  }

  render() {
    let state = this.state;

    return (
      <div>
        <Box title="开关 Switch">
          <BoxTitle title="基本用法" />
          <Item text="普通">
            <Switch
              checked={state.checked1}
              onChange={v => {
                this.handleCheck(v);
              }}
            />
          </Item>

          <Item text="默认开">
            <Switch
              checked={state.checked2}
              onChange={v => {
                this.handleCheck(v);
              }}
            />
          </Item>

          <Item text="禁用的开关（默认关）">
            <Switch
              checked={state.checked1}
              onChange={v => {
                this.handleCheck(v);
              }}
              disabled
            />
          </Item>

          <Item text="禁用的开关（默认开）">
            <Switch
              checked={state.checked2}
              onChange={v => {
                this.handleCheck(v);
              }}
              disabled
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

const connectSwitchApp = connect(mapStateToProps, mapDispatchToProps)(
  SwitchApp
);

export default connectSwitchApp;
