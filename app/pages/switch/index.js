// btn components show page
import React from "react";
import Switch from "@component/switch";
import Box from "@component/box";
import BoxTitle from "@component/boxTitle";

const SwitchApp = props => {
  let curStyle = {
    marginLeft: "10px"
  };
  return (
    <div>
      <Box title="开关 Switch">
        <BoxTitle title="基本用法" />
        <div style={curStyle}>
          <Switch />
        </div>
      </Box>
    </div>
  );
};

export default SwitchApp;
