// btn components show page
import React from "react";
import Switch from "@component/switch";
import Box from "@component/box";
import BoxTitle from "@component/boxTitle";
import Item from "@component/item";

const SwitchApp = props => {
  let state = {
    checked1: false,
    checked2: true
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
            checked={state.checked1}
            onChange={v => {
              handleCheck(v);
            }}
          />
        </Item>

        <Item text="默认开">
          <Switch
            checked={state.checked2}
            onChange={v => {
              handleCheck(v);
            }}
          />
        </Item>

        <Item text="禁用的开关（默认关）">
          <Switch
            checked={state.checked1}
            onChange={v => {
              handleCheck(v);
            }}
            disabled
          />
        </Item>

        <Item text="禁用的开关（默认开）">
          <Switch
            checked={state.checked2}
            onChange={v => {
              handleCheck(v);
            }}
            disabled
          />
        </Item>
      </Box>
    </div>
  );
};

export default SwitchApp;
