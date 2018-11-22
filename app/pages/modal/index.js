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
      show: false
    };
  }

  open() {
    this.setState({
      show: true
    });
  }

  close() {
    this.setState({
      show: false
    });
  }

  render() {
    let state = this.state;
    let curStyle = {
      width: "375px"
    };
    let curBtnStyle = {
      margin: "0",
      height: "28px",
      lineHeight: "28px",
      fontSize: "12px",
      padding: "0 10px"
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
                this.open();
              }}
            />
            <Modal
              title="标题"
              content="模态框内容"
              visible={state.show}
              onClose={() => {
                this.close();
              }}
            />
          </Item>

          <Item text="普通">
            <Button text="开启" style={curBtnStyle} />
          </Item>
        </Box>
      </div>
    );
  }
}

export default ModalApp;
