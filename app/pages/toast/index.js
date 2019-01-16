// toast components show pages
import React from "react";
import Button from "@component/button";
import Item from "@component/item";
import Box from "@component/box";
import BoxTitle from "@component/boxTitle";
import Toast from "@component/toast";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Actions from "../../store/actions";

class ModalApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show1: false,
      show2: false,
      show3: false,
      show4: false,
      show5: false,
      title: "轻提示 Toast"
    };
  }

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
    let state = this.state;
    let curBtnStyle = {
      margin: "0",
      height: "28px",
      lineHeight: "28px",
      fontSize: "12px",
      padding: "0 10px"
    };
    let redBtnStyle = {
      background: "#ff5050",
      color: "#fff"
    };
    let warnBtnStyle = {
      background: "#ec9131",
      color: "#fff"
    };
    let successBtnStyle = {
      background: "#12c287",
      color: "#fff"
    };
    return (
      <div>
        <Box title={this.state.title}>
          <BoxTitle title="基本用法" />
          <Item text="默认提示">
            <Button
              text="开启"
              style={curBtnStyle}
              onClick={() => {
                this.open("show1");
              }}
            />
            <Toast
              visible={state.show1}
              onClose={() => {
                this.close("show1");
              }}
              time="1500"
              type="default"
            >
              <div>提示信息</div>
            </Toast>
          </Item>

          <Item text="错误提示">
            <Button
              text="开启"
              style={Object.assign(redBtnStyle, curBtnStyle)}
              onClick={() => {
                this.open("show2");
              }}
            />

            <Toast
              visible={state.show2}
              onClose={() => {
                this.close("show2");
              }}
              time="1500"
              type="fail"
            />
          </Item>

          <Item text="警告提示">
            <Button
              text="开启"
              style={Object.assign(warnBtnStyle, curBtnStyle)}
              onClick={() => {
                this.open("show5");
              }}
            />

            <Toast
              visible={state.show5}
              onClose={() => {
                this.close("show5");
              }}
              time="1500"
              type="warning"
            />
          </Item>

          <Item text="成功提示">
            <Button
              text="开启"
              style={Object.assign(successBtnStyle, curBtnStyle)}
              onClick={() => {
                this.open("show3");
              }}
            />

            <Toast
              visible={state.show3}
              onClose={() => {
                this.close("show3");
              }}
              time="1500"
              type="success"
            />
          </Item>

          <BoxTitle title="加载中" />
          <Item text="Loading">
            <Button
              text="开启"
              style={Object.assign(curBtnStyle)}
              onClick={() => {
                this.open("show4");
              }}
            />
            <Toast
              visible={state.show4}
              onClose={() => {
                this.close("show4");
              }}
              type="loading"
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

const connectModalApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(ModalApp);

export default connectModalApp;
