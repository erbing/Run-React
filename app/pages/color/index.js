// color components show page
import React from "react";
import Button from "@component/button";
import Box from "@component/box";
import BoxTitle from "@component/boxTitle";

const ColorApp = props => {
  return (
    <div>
      <Box title="色彩 Color">
        <BoxTitle title="基本用法" />
        <Button text="default" />
        <Button type="primary" text="primary" />

        <BoxTitle title="块级按钮" />
        <Button text="default" display="block" />
        <Button text="default disabled" display="block" disabled />
        <Button type="primary" text="primary" display="block" />
        <Button
          type="primary"
          text="primary  disabled"
          display="block"
          disabled
        />

        <BoxTitle title="按钮主题" />
        <Button text="default" />
        <Button type="primary" text="primary" />
        <Button type="primary" text="success" />
        <Button type="warning" text="warning" />
        <Button type="error" text="error" />

        <BoxTitle title="按钮形状" />
        <Button type="primary" text="rect" />
        <Button type="primary" text="radius" radius="4" />
        <Button type="primary" text="round" radius="25" />
        <Button type="primary" text="circle" radius="50%" />
      </Box>
    </div>
  );
};

export default ColorApp;
