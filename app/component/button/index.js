import React from "react";
import "./index.less";
import Box from "@component/box";

class Button extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Box>
          <button className="comp-button">123</button>
        </Box>
      </div>
    );
  }
}

export default Button;
