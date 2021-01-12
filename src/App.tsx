import React from 'react';
import { Canvas } from "react-three-fiber";
import { Box } from "./Objects/Box";
import { OrbitControls } from "drei";

function App() {
  return (
    <Canvas>
      <OrbitControls />
      <Box />
    </Canvas>
  );
}

export default App;
