import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";

import GoldenRectangle from "./GoldenRectangle";

import * as Math from "mathjs";

const ThreeGoldenRectangles = ({ scale = 1, ...props }) => {
  const tgrRef = useRef();

  useFrame(() => {
    tgrRef.current.rotation.y -= 0.005;
  });

  return (
    <group ref={tgrRef}>
      <GoldenRectangle color="blue" position={[0, 0, 0]} rotation={[0, 0, 0]} />
      <GoldenRectangle
        color="red"
        position={[0, 0, 0]}
        rotation={[0, Math.pi / 2, Math.pi / 2]}
      />
      <GoldenRectangle
        color="yellow"
        position={[0, 0, 0]}
        rotation={[Math.pi / 2, 0, Math.pi / 2]}
      />
    </group>
  );
};

export default ThreeGoldenRectangles;