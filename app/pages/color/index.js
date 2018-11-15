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
