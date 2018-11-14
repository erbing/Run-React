// color components show page
import React from "react";
import Block from "@component/block";
import Box from "@component/box";
import BoxTitle from "@component/boxTitle";
// import "./index.less";

const ColorApp = props => {
  return (
    <div>
      <Box title="色彩 Color">
        <BoxTitle title="主色" />
        <div>
          <Block color="#fff" textColor="#464646" text="default" />
          <Block color="#12c287" textColor="#fff" text="primary" />
          <Block color="#12c287" textColor="#fff" text="success" />
          <Block color="#f19c38" textColor="#fff" text="warning" />
          <Block color="#f36c60" textColor="#fff" text="error" />
        </div>

        <BoxTitle title="块级按钮" />

        <BoxTitle title="按钮主题" />
      </Box>
    </div>
  );
};

export default ColorApp;
