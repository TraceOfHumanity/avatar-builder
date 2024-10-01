import {OrbitControls} from "@react-three/drei";
import {Canvas} from "@react-three/fiber";
import React from "react";

function App() {
  return (
    <div className="h-screen w-screen">
      <Canvas
        camera={{
          position: [3, 3, 10],
        }}
      >
        <OrbitControls />
        <ambientLight />
        <pointLight position={[4, 5, 3]} intensity={20} />
        <mesh>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="red" />
        </mesh>
      </Canvas>
    </div>
  );
}

export default App;
