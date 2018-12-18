// btn components show page
import React from "react";
import Button from "@component/button/";
import Box from "@component/box";
import BoxTitle from "@component/boxTitle";
import Input from "@component/input/";

const InputApp = props => {
  return (
    <div>
      <Box title="按钮 Button">
        <BoxTitle title="基本用法" />
        <Input />
      </Box>
    </div>
  );
};

export default InputApp;
