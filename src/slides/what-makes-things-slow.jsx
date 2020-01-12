import React from "react";
import { Slide, Text, Appear } from "spectacle";

const notes = `
`;

export default function() {
  return (
    <Slide bgColor="primary" textAlign="left" notes={notes}>
      <Text bold textColor="dark">
        What is the bottleneck in React apps?
      </Text>

      <Appear>
        <Text margin="20px">Rendering.</Text>
      </Appear>
    </Slide>
  );
}
