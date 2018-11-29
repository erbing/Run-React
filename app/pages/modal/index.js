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

          <Item text="圆角">
            <Button
              text="开启"
              style={curBtnStyle}
              onClick={() => {
                this.open("show2");
              }}
            />
            <Modal
              title="标题"
              content="圆角的模态框内容"
              type="radius"
              visible={state.show2}
              onClose={() => {
                this.close("show2");
              }}
            />
          </Item>

          <Item text="点击遮罩层可关闭">
            <Button
              text="开启"
              style={curBtnStyle}
              onClick={() => {
                this.open("show3");
              }}
            />
            <Modal
              title="标题"
              content="点击遮罩层可关闭"
              type="radius mask"
              visible={state.show3}
              onClose={() => {
                this.close("show3");
              }}
            />
          </Item>

          <Item text="无头部">
            <Button
              text="开启"
              style={curBtnStyle}
              onClick={() => {
                this.open("show4");
              }}
            />
            <Modal
              title="标题"
              content="无头部的 modal 演示啊啊啊啊啊啊 啊啊啊"
              type="radius noHead"
              visible={state.show4}
              onClose={() => {
                this.close("show4");
              }}
            />
          </Item>

          <BoxTitle title="特定场景" />

          <Item text="警告框 Alert">
            <Button
              text="开启"
              style={Object.assign(specificBtn, curBtnStyle)}
              onClick={() => {
                this.open("show5");
              }}
            />
            <Modal
              title="标题"
              content="模态框内容"
              visible={state.show5}
              type="radius alert"
              onAlert={() => {
                this.close("show5");
              }}
            />
          </Item>

          <Item text="确认框 Confirm">
            <Button
              text="开启"
              style={Object.assign(specificBtn, curBtnStyle)}
              onClick={() => {
                this.open("show6");
              }}
            />
            <Modal
              title="标题"
              content="模态框内容"
              visible={state.show6}
              type="confirm"
              onClose={() => {
                this.close("show6");
              }}
            />
          </Item>
        </Box>
      </div>
    );
  }
}

export default ModalApp;
