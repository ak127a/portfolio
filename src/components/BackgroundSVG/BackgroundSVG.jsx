import React from "react";

import { animated } from "react-spring";
import { ParallaxLayer } from "react-spring/renderprops-addons";

function BackgroundSVG({ object, big, offset, speed, animation, left, width }) {
  return (
    <ParallaxLayer offset={offset} speed={speed}>
      <animated.img
        style={{
          ...animation,
          position: "absolute",
          left: `${left}`,
          width: `${width}`,
        }}
        src={object}
        alt={`${object}`}
      />
    </ParallaxLayer>
  );
}

export default BackgroundSVG;
