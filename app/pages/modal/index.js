// btn components show page
import React from "react";
import Button from "@component/button";
import Item from "@component/item";
import Box from "@component/box";
import BoxTitle from "@component/boxTitle";

const ModalApp = props => {
  let curStyle = {
    width: "667px"
  };
  return (
    <div>
      <Box title="模态框 Modal" style={curStyle}>
        <BoxTitle title="基本用法" />
        <Item text="普通">
          <Button text="开启" />
        </Item>
      </Box>
    </div>
  );
};

export default ModalApp;
