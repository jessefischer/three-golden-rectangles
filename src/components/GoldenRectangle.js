import React from "react";

import * as Math from "mathjs";

const PLANE_WIDTH = 0.005;

const GoldenRectangle = ({ color = "red", scale = 1, ...props }) => {
  return (
    <mesh {...props} scale={scale}>
      <boxGeometry args={[1, Math.phi, PLANE_WIDTH]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};

export default GoldenRectangle;
