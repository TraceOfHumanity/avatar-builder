import {OrbitControls} from "@react-three/drei";
import {Canvas} from "@react-three/fiber";

import {Menu} from "components";
import { Y } from "components/3DModels/Y";

function App() {
  return (
    <div className="h-screen w-screen">
      <Menu />
      <Canvas
        camera={{
          position: [0, 1, 4],
        }}
      >
        <color attach="background" args={["#303030"]} />
        <OrbitControls />
        <ambientLight intensity={0.5} />
        <pointLight position={[0, 10, 1]} intensity={100} />
        <Y />
      </Canvas>
    </div>
  );
}

export default App;
