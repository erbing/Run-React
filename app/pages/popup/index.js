// btn components show page
import React from "react";
import Switch from "@component/switch";
import Box from "@component/box";
import BoxTitle from "@component/boxTitle";
import Item from "@component/item";
import Button from "@component/button";
import Popup from "@component/popup";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Actions from "../../store/actions";

class PopupApp extends React.Component {
  state = {
    show1: false,
    show2: false,
    show3: false,
    show4: false,
    title: "弹出框 Popup"
  };

  handleCheck = value => {
    console.log(value);
    state.checked = value;
  };

  open(key) {
    this.setState({
      [`${key}`]: true
    });
  }

  close(key) {
    this.setState({
      [`${key}`]: false
    });
  }

  render() {
    let curBtnStyle = {
      margin: "0",
      height: "28px",
      lineHeight: "28px",
      fontSize: "12px",
      padding: "0 10px"
    };

    let specificBtn = {
      background: "#eca632",
      color: "#fff",
      borderColor: "#eca632"
    };
    return (
      <div>
        <Box title={this.state.title}>
          <BoxTitle title="基本用法" />
          <Item text="从上方弹出">
            <Button
              text="开启"
              style={curBtnStyle}
              onClick={() => {
                this.open("show1");
              }}
            />
            <Popup
              type="top"
              visible={this.state.show1}
              showMask={true}
              onClose={() => {
                this.close("show1");
              }}
            >
              <div>从上面显示出来了</div>
            </Popup>
          </Item>

          <Item text="从下方弹出">
            <Button
              text="开启"
              style={curBtnStyle}
              onClick={() => {
                this.open("show2");
              }}
            />
            <Popup
              type="bottom"
              visible={this.state.show2}
              showMask={true}
              onClose={() => {
                this.close("show2");
              }}
            >
              <div>从下面显示出来了</div>
            </Popup>
          </Item>

          <Item text="从左侧弹出">
            <Button
              text="开启"
              style={curBtnStyle}
              onClick={() => {
                this.open("show3");
              }}
            />
            <Popup
              type="left"
              visible={this.state.show3}
              showMask={true}
              onClose={() => {
                this.close("show3");
              }}
            >
              <div>从左边显示出来了</div>
            </Popup>
          </Item>

          <Item text="从右侧弹出">
            <Button
              text="开启"
              style={curBtnStyle}
              onClick={() => {
                this.open("show4");
              }}
            />
            <Popup
              type="right"
              visible={this.state.show4}
              showMask={true}
              onClose={() => {
                this.close("show4");
              }}
            >
              <div>从右边显示出来了</div>
            </Popup>
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
