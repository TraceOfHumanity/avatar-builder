import {OrbitControls} from "@react-three/drei";
import {Canvas} from "@react-three/fiber";

import {Interface} from "components/Interface";
import {Woman} from "components/Woman";

function App() {
  return (
    <div className="h-screen w-screen">
      <Canvas
        camera={{
          position: [0, 2, 3],
        }}
      >
        <color attach="background" args={["#303030"]} />
        <OrbitControls />
        <ambientLight />
        <pointLight position={[4, 5, 3]} intensity={20} />
        {/* <mesh>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="red" />
        </mesh> */}
        <Woman />
      </Canvas>
      <Interface />
    </div>
  );
}

export default App;
