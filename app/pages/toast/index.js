// toast components show pages
import React from "react";
import Button from "@component/button";
import Item from "@component/item";
import Box from "@component/box";
import BoxTitle from "@component/boxTitle";
import Toast from "@component/toast";

class ModalApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show1: false
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
    return (
      <div>
        <Box title="轻提示 Toast">
          <BoxTitle title="基本用法" />
          <Item text="错误提示">
            <Button
              text="开启"
              style={curBtnStyle}
              onClick={() => {
                this.open("show1");
              }}
            />

            <Toast visible={state.show1}>
              <div>提示信息</div>
            </Toast>
          </Item>
        </Box>
      </div>
    );
  }
}

export default ModalApp;
