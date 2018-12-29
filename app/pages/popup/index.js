// btn components show page
import React from "react";
import Switch from "@component/switch";
import Box from "@component/box";
import BoxTitle from "@component/boxTitle";
import Item from "@component/item";

const PopupApp = props => {
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
      <Box title="弹出框 Popup">
        <BoxTitle title="基本用法" />
        <Item text="普通">
          <Switch
            checked={state.checked1}
            onChange={v => {
              handleCheck(v);
            }}
          />
        </Item>
      </Box>
    </div>
  );
};

export default PopupApp;
