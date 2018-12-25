// btn components show page
import React from "react";
import Switch from "@component/switch";
import Box from "@component/box";
import BoxTitle from "@component/boxTitle";
import Item from "@component/item";

const SwitchApp = props => {
  let state = {
    checked: false
  };

  const handleCheck = value => {
    console.log(value);
    state.checked = value;
  };

  return (
    <div>
      <Box title="开关 Switch">
        <BoxTitle title="基本用法" />
        <Item text="普通">
          <Switch
            checked={state.checked}
            onChange={v => {
              handleCheck(v);
            }}
          />
        </Item>
      </Box>
    </div>
  );
};

export default SwitchApp;
