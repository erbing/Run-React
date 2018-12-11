// btn components show page
import React from "react";
import Button from "@component/button";
import Item from "@component/item";
import Box from "@component/box";
import BoxTitle from "@component/boxTitle";
import ActionSheet from "@component/actionSheet";

class ActionSheetApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show1: true,
      buttons: [
        {
          txt: "操作一",
          onClick: () => {
            console.log("操作一");
          }
        },
        {
          txt: "操作二",
          onClick: () => {
            console.log("操作二");
          }
        },
        {
          txt: "操作三",
          onClick: () => {
            console.log("操作三");
          }
        }
      ]
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

    let { buttons, show1 } = this.state;
    return (
      <div>
        <Box title="动作面板 ActionSheet" style={curStyle}>
          <BoxTitle title="基本用法" />
          <Item text="普通">
            <Button
              text="开启"
              style={curBtnStyle}
              onClick={() => {
                this.open("show1");
              }}
            />
            <ActionSheet
              visible={show1}
              actions={buttons}
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

export default ActionSheetApp;