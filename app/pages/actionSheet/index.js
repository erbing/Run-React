// btn components show page
import React from "react";
import Button from "@component/button";
import Item from "@component/item";
import Box from "@component/box";
import BoxTitle from "@component/boxTitle";
import Modal from "@component/modal";

class ModalApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show1: false,
      show2: false,
      show3: false,
      show4: false,
      show5: false,
      show6: false
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
    let curStyle = {
      // width: "375px"
    };
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
        <Box title="模态框 Modal" style={curStyle}>
          <BoxTitle title="基本用法" />
          <Item text="普通">
            <Button
              text="开启"
              style={curBtnStyle}
              onClick={() => {
                this.open("show1");
              }}
            />
            <Modal
              title="标题"
              content="模态框内容"
              visible={state.show1}
              onClose={() => {
                this.close("show1");
              }}
            />
          </Item>
        </Box>
      </div>
    );
  }
}

export default ModalApp;
