import React from "react";
import Box from "@component/box";
import "./index.less";

class Button extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Box>
          <a className="run-button run-a">default</a>
        </Box>
      </div>
    );
  }
}

export default Button;
