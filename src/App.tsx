import {OrbitControls} from "@react-three/drei";
import {Canvas} from "@react-three/fiber";

import {Menu} from "components";
import { NewX } from "components/3DModels/NewX";
import { NewY } from "components/3DModels/NewY";


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
        <ambientLight intensity={1} />
        <pointLight position={[0, 20, 5]} intensity={1000} />
        <NewY />
        <NewX />
      </Canvas>
    </div>
  );
}

export default App;
