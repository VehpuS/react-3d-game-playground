import React from 'react';
import { Canvas } from "react-three-fiber";
import { Box } from "./Objects/Box";
import { OrbitControls, Stars } from "drei";
import { Ground } from "./Objects/Ground";
import { Physics } from "use-cannon";
import { GlobalLights } from "./World/GlobalLights";

function App() {
  return (
    <Canvas>
      <OrbitControls />
      <Stars />
      <GlobalLights />
      <Physics>
        <Box />
        <Ground />
      </Physics>
    </Canvas>
  );
}

export default App;
