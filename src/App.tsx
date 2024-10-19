import {OrbitControls} from "@react-three/drei";
import {Canvas} from "@react-three/fiber";

import {Menu} from "components";
import {Box} from "components/3DModels/Box";
import {XCorundum} from "components/3DModels/XCorundum";
import { XCorundum2 } from "components/3DModels/XCorundum2";
import { XCorundum3 } from "components/3DModels/XCorundum3";
import { XCorundum4 } from "components/3DModels/XCorundum4";

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
        <pointLight position={[10, 10, 0]} intensity={100} />
        {/* <XCorundum /> */}
        {/* <XCorundum2 /> */}
        {/* <XCorundum3 /> */}
        <XCorundum4 />
      </Canvas>
    </div>
  );
}

export default App;
