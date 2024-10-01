import {OrbitControls, SoftShadows} from "@react-three/drei";
import {Canvas} from "@react-three/fiber";
import React from "react";

function App() {
  return (
    <div className="h-screen w-screen">
      <Canvas
        camera={{
          position: [3, 1, 3],
        }}
      >
        <color attach="background" args={["#303030"]} />
        <OrbitControls />
        <ambientLight />
        <pointLight position={[4, 5, 3]} intensity={20} />
        <mesh>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="red" />
        </mesh>
        {/* <SoftShadows /> */}
      </Canvas>
    </div>
  );
}

export default App;
