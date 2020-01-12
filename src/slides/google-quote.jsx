import React from "react";
import { Slide, Link, BlockQuote } from "spectacle";

const notes = `
`;

export default function() {
  return (
    <Slide bgColor="primary" textAlign="left" notes={notes}>
      <BlockQuote style={{ lineHeight: 1.6 }}>
        Most devices today refresh their screens 60 times a second.
        <br /> <br /> Each of those frames has a budget of just over 16ms (1 second / 60 = 16.66ms). In reality,
        however, the browser has housekeeping work to do, so all of your work needs to be completed inside{" "}
        <strong>10ms</strong>.
      </BlockQuote>

      <Link
        textSize="12px"
        target="_blank"
        href="https://developers.google.com/web/fundamentals/performance/rendering/"
      >
        (https://developers.google.com/web/fundamentals/performance/rendering/)
      </Link>
    </Slide>
  );
}
