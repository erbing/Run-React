// btn components
import React from "react";
import Button from "@component/button/";
import Box from "@component/box";
import BoxTitle from "@component/boxTitle";

const ButtonApp = props => {
  return (
    <div>
      <Box>
        <BoxTitle title="按钮主题" />
        <Button text="default" />
        <Button type="primary" text="primary" />
        <Button type="primary" text="success" />
        <Button type="warning" text="warning" />
        <Button type="error" text="error" />
        <BoxTitle title="基本用法" />
        <Button text="default" />
        <Button type="primary" text="primary" />
      </Box>
    </div>
  );
};

export default ButtonApp;
