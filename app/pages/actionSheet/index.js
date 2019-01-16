// btn components show page
import React from "react";
import Button from "@component/button";
import Item from "@component/item";
import Box from "@component/box";
import BoxTitle from "@component/boxTitle";
import ActionSheet from "@component/actionSheet";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Actions from "../../store/actions";

class ActionSheetApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show1: false,
      show2: false,
      show3: false,
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
      ],
      title: "动作面板 ActionSheet"
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

    let { buttons, show1, show2, show3 } = this.state;
    return (
      <div>
        <Box title={this.state.title} style={curStyle}>
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

          <Item text="带取消操作">
            <Button
              text="开启"
              style={curBtnStyle}
              onClick={() => {
                this.open("show2");
              }}
            />
            <ActionSheet
              visible={show2}
              actions={buttons}
              onClose={() => {
                this.close("show2");
              }}
              onCancel={() => {
                this.close("show2");
              }}
            />
          </Item>

          <Item text="圆角、留边">
            <Button
              text="开启"
              style={curBtnStyle}
              onClick={() => {
                this.open("show3");
              }}
            />
            <ActionSheet
              visible={show3}
              actions={buttons}
              onClose={() => {
                this.close("show3");
              }}
              onCancel={() => {
                this.close("show3");
              }}
              type="radius"
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

const connectActionSheetApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(ActionSheetApp);

export default connectActionSheetApp;
