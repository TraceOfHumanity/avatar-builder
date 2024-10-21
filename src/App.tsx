import {OrbitControls} from "@react-three/drei";
import {Canvas} from "@react-three/fiber";

import {Menu} from "components";
import {Box} from "components/3DModels/Box";
import { Untitled1 } from "components/3DModels/Untitled1";
import {XCorundum} from "components/3DModels/XCorundum";
import {XCorundum2} from "components/3DModels/XCorundum2";
import {XCorundum3} from "components/3DModels/XCorundum3";
import {XCorundum4} from "components/3DModels/XCorundum4";
import {XCorundum5} from "components/3DModels/XCorundum5";
import {YCorundum} from "components/3DModels/YCorundum";

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
        <pointLight position={[0, 10, 1]} intensity={200} />
        {/* <XCorundum /> */}
        {/* <XCorundum2 /> */}
        {/* <XCorundum3 /> */}
        {/* <XCorundum4 /> */}
        <XCorundum5 />
        {/* <YCorundum /> */}
        <Untitled1 />
      </Canvas>
    </div>
  );
}

export default App;
