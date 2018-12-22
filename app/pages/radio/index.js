// btn components show page
import React from "react";
import Button from "@component/button/";
import Box from "@component/box";
import BoxTitle from "@component/boxTitle";
import Input from "@component/input";
import Item from "@component/item";

const RadioApp = props => {
  return (
    <div>
      <Box title="单选框 Radio">
        <BoxTitle title="基本用法" />
        <Item text="单行文本" flex>
          <Input placeholder="请输入" />
        </Item>

        <BoxTitle title="高度自适应" />
        <Item text="数字" flex>
          <Input placeholder="请输入" />
        </Item>
      </Box>
    </div>
  );
};

export default RadioApp;
