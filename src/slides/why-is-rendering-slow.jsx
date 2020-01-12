import React from "react";
import { Slide, Text, List, ListItem, BlockQuote } from "spectacle";

const notes = `
`;

export default function() {
  return (
    <Slide bgColor="primary" textAlign="left" notes={notes}>
      <Text bold textColor="dark">
        Why?
      </Text>

      <List style={{ marginTop: 20, lineHeight: 1.6 }}>
        <ListItem>React calculates the next DOM tree (in memory)</ListItem>
        <ListItem>Then, reflect those changes to the brower's DOM</ListItem>
        <ListItem>Finally, the browser calculates layout, painting (visual), and composition changes</ListItem>
      </List>
    </Slide>
  );
}
