// color components show page
import React from "react";
import Block from "@component/block";
import Box from "@component/box";
import BoxTitle from "@component/boxTitle";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Actions from "../../store/actions";

import "./index.less";

class ColorApp extends React.Component {
  constructor(props) {
    super(props);
    console.log(props.actions, "---x-actions ----");
    this.state = {
      title: "色彩 Color"
    };
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    console.log(1111);
    // todo
    return false;
  }
  render() {
    return (
      <div>
        <Box title={this.state.title}>
          <BoxTitle title="主色" />
          <div>
            <Block
              color="#fff"
              textColor="#464646"
              text="default"
              className="color-border"
            />
            <Block color="#12c287" textColor="#fff" text="success" />
            <Block color="#f19c38" textColor="#fff" text="warning" />
            <Block color="#f36c60" textColor="#fff" text="error" />
          </div>

          <div className="flex-between">
            <div className="color-blocks">
              <BoxTitle title="红色 色板" />
              <Block color="#e51c23" textColor="#fff" text="#e51c23" />
              <Block color="#f9bdbb" textColor="#fff" text="#f9bdbb" />
              <Block color="#f69988" textColor="#fff" text="#f69988" />
              <Block color="#f36c60" textColor="#fff" text="#f36c60" />
              <Block color="#d75949" textColor="#fff" text="#d75949" />
              <Block color="#d33630" textColor="#fff" text="#d33630" />
              <Block color="#cb332b" textColor="#fff" text="#cb332b" />
              <Block color="#bf2f25" textColor="#fff" text="#bf2f25" />
              <Block color="#b42c21" textColor="#fff" text="#b42c21" />
              <Block color="#a1271a" textColor="#fff" text="#a1271a" />
              <Block color="#ee8198" textColor="#fff" text="#ee8198" />
              <Block color="#ec5f79" textColor="#fff" text="#ec5f79" />
              <Block color="#eb4571" textColor="#fff" text="#eb4571" />
              <Block color="#ce2c3a" textColor="#fff" text="#ce2c3a" />
            </div>

            <div className="color-blocks">
              <BoxTitle title="粉色 色板" />
              <Block color="#f8e5ec" textColor="#fff" text="#f8e5ec" />
              <Block color="#efbecf" textColor="#fff" text="#efbecf" />
              <Block color="#e694b0" textColor="#fff" text="#e694b0" />
              <Block color="#df6c92" textColor="#fff" text="#df6c92" />
              <Block color="#da4f7a" textColor="#fff" text="#da4f7a" />
              <Block color="#d63964" textColor="#fff" text="#d63964" />
              <Block color="#c63461" textColor="#fff" text="#c63461" />
              <Block color="#b22e5b" textColor="#fff" text="#b22e5b" />
              <Block color="#9f2857" textColor="#fff" text="#9f2857" />
              <Block color="#7d1e4e" textColor="#fff" text="#7d1e4e" />
              <Block color="#ef87aa" textColor="#fff" text="#ef87aa" />
              <Block color="#eb5281" textColor="#fff" text="#eb5281" />
              <Block color="#e1315a" textColor="#fff" text="#e1315a" />
              <Block color="#b52c62" textColor="#fff" text="#b52c62" />
            </div>

            <div className="color-blocks">
              <BoxTitle title="蓝色 色板" />
              <Block color="#e7e9fb" textColor="#fff" text="#e7e9fb" />
              <Block color="#d1d9fc" textColor="#fff" text="#d1d9fc" />
              <Block color="#b2c0fa" textColor="#fff" text="#b2c0fa" />
              <Block color="#95a8f9" textColor="#fff" text="#95a8f9" />
              <Block color="#7891f6" textColor="#fff" text="#7891f6" />
              <Block color="#5c79f4" textColor="#fff" text="#5c79f4" />
              <Block color="#536fe7" textColor="#fff" text="#536fe7" />
              <Block color="#4961d6" textColor="#fff" text="#4961d6" />
              <Block color="#3e53c7" textColor="#fff" text="#3e53c7" />
              <Block color="#2b3aaa" textColor="#fff" text="#2b3aaa" />
              <Block color="#a9bbfa" textColor="#fff" text="#a9bbfa" />
              <Block color="#6e8bf7" textColor="#fff" text="#6e8bf7" />
              <Block color="#5476f6" textColor="#fff" text="#5476f6" />
              <Block color="#526cf6" textColor="#fff" text="#526cf6" />
            </div>
          </div>

          <div className="flex-between">
            <div className="color-blocks">
              <BoxTitle title="墨绿色 色板" />
              <Block color="#e3f1f1" textColor="#fff" text="#e3f1f1" />
              <Block color="#bbdedb" textColor="#fff" text="#bbdedb" />
              <Block color="#91c9c4" textColor="#fff" text="#91c9c4" />
              <Block color="#6ab4ac" textColor="#fff" text="#6ab4ac" />
              <Block color="#51a39a" textColor="#fff" text="#51a39a" />
              <Block color="#419488" textColor="#fff" text="#419488" />
              <Block color="#3b877b" textColor="#fff" text="#3b877b" />
              <Block color="#33776b" textColor="#fff" text="#33776b" />
              <Block color="#2c675c" textColor="#fff" text="#2c675c" />
              <Block color="#1e4c40" textColor="#fff" text="#1e4c40" />
              <Block color="#bbfcec" textColor="#fff" text="#bbfcec" />
              <Block color="#91fbdc" textColor="#fff" text="#91fbdc" />
              <Block color="#6de5b9" textColor="#fff" text="#6de5b9" />
              <Block color="#55bca6" textColor="#fff" text="#55bca6" />
            </div>

            <div className="color-blocks">
              <BoxTitle title="绿色 色板" />
              <Block color="#d8f6d1" textColor="#fff" text="#d8f6d1" />
              <Block color="#b2e6aa" textColor="#fff" text="#b2e6aa" />
              <Block color="#8bd27d" textColor="#fff" text="#8bd27d" />
              <Block color="#67b953" textColor="#fff" text="#67b953" />
              <Block color="#57ab41" textColor="#fff" text="#57ab41" />
              <Block color="#4d9838" textColor="#fff" text="#4d9838" />
              <Block color="#408c29" textColor="#fff" text="#408c29" />
              <Block color="#387b23" textColor="#fff" text="#387b23" />
              <Block color="#306d1c" textColor="#fff" text="#306d1c" />
              <Block color="#255114" textColor="#fff" text="#255114" />
              <Block color="#b5f498" textColor="#fff" text="#b5f498" />
              <Block color="#86ed6e" textColor="#fff" text="#86ed6e" />
              <Block color="#6be248" textColor="#fff" text="#6be248" />
              <Block color="#5cc339" textColor="#fff" text="#5cc339" />
            </div>

            <div className="color-blocks">
              <BoxTitle title="橘色 色板" />
              <Block color="#fae0b8" textColor="#fff" text="#fae0b8" />
              <Block color="#f7cd8b" textColor="#fff" text="#f7cd8b" />
              <Block color="#f5b961" textColor="#fff" text="#f5b961" />
              <Block color="#f3aa47" textColor="#fff" text="#f3aa47" />
              <Block color="#f19c38" textColor="#fff" text="#f19c38" />
              <Block color="#ec9135" textColor="#fff" text="#ec9135" />
              <Block color="#e68231" textColor="#fff" text="#e68231" />
              <Block color="#df732c" textColor="#fff" text="#df732c" />
              <Block color="#d55b26" textColor="#fff" text="#d55b26" />
              <Block color="#f8d28b" textColor="#fff" text="#f8d28b" />
              <Block color="#f3ae56" textColor="#fff" text="#f3ae56" />
              <Block color="#f09537" textColor="#fff" text="#f09537" />
              <Block color="#ee752f" textColor="#fff" text="#ee752f" />
              {/* <Block color="#526cf6" textColor="#fff" text="#526cf6" /> */}
            </div>
          </div>
          <div className="flex-between">
            <div className="color-blocks">
              <BoxTitle title="灰色 色板" />
              <Block color="#fafafa" textColor="#9e9e9e" text="#fafafa" />
              <Block color="#f5f5f5" textColor="#9e9e9e" text="#f5f5f5" />
              <Block color="#eeeeee" textColor="#9e9e9e" text="#eeeeee" />
              <Block color="#e0e0e0" textColor="#fff" text="#e0e0e0" />
              <Block color="#bdbdbd" textColor="#fff" text="#bdbdbd" />
              <Block color="#9e9e9e" textColor="#fff" text="#9e9e9e" />
              <Block color="#757575" textColor="#fff" text="#757575" />
              <Block color="#616161" textColor="#fff" text="#616161" />
              <Block color="#424242" textColor="#fff" text="#424242" />
              <Block color="#212121" textColor="#fff" text="#212121" />
              <Block color="#000000" textColor="#fff" text="#000000" />
            </div>
          </div>
        </Box>
      </div>
    );
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

const connectColorApp = connect(mapStateToProps, mapDispatchToProps)(ColorApp);

export default connectColorApp;
