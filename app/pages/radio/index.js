// btn components show page
import React from "react";
import Box from "@component/box";
import BoxTitle from "@component/boxTitle";
import Input from "@component/input";
import Radio from "@component/radio";
import Item from "@component/item";

const radios = {
  checked1: false,
  checked2: true
};

const RadioApp = props => {
  return (
    <div>
      <Box title="单选框 Radio">
        <BoxTitle title="基本用法" />
        <Item radio>
          <Radio checked={radios.checked1}>普通</Radio>
        </Item>
        <Item radio>
          <Radio checked={radios.checked2} defaultChecked>
            默认选中
          </Radio>
        </Item>
        <Item radio>
          <Radio disabled>禁用</Radio>
        </Item>
        <Item radio>
          <Radio defaultChecked disabled>
            选中且禁用
          </Radio>
        </Item>

        <BoxTitle title="高度自适应" />
        <Item radio>
          <Radio>默认选中</Radio>
        </Item>
      </Box>
    </div>
  );
};

export default RadioApp;
