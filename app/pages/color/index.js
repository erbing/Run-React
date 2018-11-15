// color components show page
import React from "react";
import Block from "@component/block";
import Box from "@component/box";
import BoxTitle from "@component/boxTitle";
import "./index.less";

const ColorApp = props => {
  return (
    <div>
      <Box title="色彩 Color">
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
            <BoxTitle title="蓝色 色板" />
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
        </div>

        {/* <div className="flex-y">
          <div className="color-block">
            <BoxTitle title="墨绿色 色板" />
          </div>

          <div className="color-block">
            <BoxTitle title="绿色 色板" />
          </div>

          <div className="color-block">
            <BoxTitle title="橘色 色板" />
          </div>
        </div>
        <div className="flex-y">
          <div className="color-block">
            <BoxTitle title="灰色 色板" />
          </div>
        </div> */}
      </Box>
    </div>
  );
};

export default ColorApp;
