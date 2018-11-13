// btn components
import React from "react";
import Button from "@component/button/";
import Box from "@component/box";

const ButtonApp = props => {
  return (
    <div>
      <Box>
        <Button />
        <Button type="primary" />
      </Box>
    </div>
  );
};

export default ButtonApp;
