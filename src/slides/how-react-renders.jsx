import React from "react";
import { Slide, Text, Link } from "spectacle";

const notes = `

`;

export default function() {
  return (
    <Slide bgColor="primary" textAlign="left" notes={notes}>
      <Text bold textColor="dark">
        Basic React rendering
      </Text>

      <div style={{ marginTop: 40 }}>
        <img src={require("../media/react-rendering.svg")} alt="Rendering tree" />
      </div>
    </Slide>
  );
}
