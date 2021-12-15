import React, {useRef} from 'react'
import { Canvas, useFrame, useThree, extend } from '@react-three/fiber';

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

import "./App.css";

import GoldenRectangle from './components/GoldenRectangle';
import Floor from './components/Floor';

import * as Math from "mathjs";

extend({ OrbitControls });

const CameraControls = () => {
  // Get a reference to the Three.js Camera, and the canvas html element.
  // We need these to setup the OrbitControls component.
  // https://threejs.org/docs/#examples/en/controls/OrbitControls
  const {
    camera,
    gl: { domElement },
  } = useThree();
  // Ref to the controls, so that we can update them on every frame using useFrame
  const controls = useRef();
  useFrame((state) => controls.current.update());
  return <orbitControls ref={controls} args={[camera, domElement]} />;
};

const App = () => {
  return (
    <>
    <Canvas camera={{
      position: [0, 0.5, 2],
    }}>
      <CameraControls />
      <directionalLight position={[-10, 20, 40]} />
      <directionalLight position={[2, -3, -4]} />
      <GoldenRectangle color="blue" position={[0,0,0]} rotation={[0,0,0]} />
      <GoldenRectangle color="red" position={[0,0,0]} rotation={[0,Math.pi/2,Math.pi/2]} />
      <GoldenRectangle color="yellow" position={[0,0,0]} rotation={[Math.pi/2,0,Math.pi/2]} />
      <Floor color="white" position={[0,-1,0]} rotation={[Math.pi/2,0,0]} />
    </Canvas>
    </>
  );
}

export default App;
