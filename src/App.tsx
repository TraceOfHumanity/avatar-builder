import {OrbitControls} from "@react-three/drei";
import {Canvas} from "@react-three/fiber";

import {Avatar} from "components/Avatar";
import { Box } from "components/Box";
import { GirlCat } from "components/GirlCat";
import { GirlCat2 } from "components/GirlCat2";
import {Interface} from "components/Interface";
import {Woman} from "components/Woman";

function App() {
  return (
    <div className="h-screen w-screen">
      <Canvas
        camera={{
          position: [0, 0, 3],
        }}
      >
        <color attach="background" args={["#303030"]} />
        <OrbitControls />
        <ambientLight intensity={100} />
        <pointLight position={[4, 5, 3]} intensity={100} />
        {/* <mesh>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="red" />
        </mesh> */}
        {/* <Woman />
        <Avatar /> */}
        {/* <Box /> */}
        {/* <GirlCat /> */}
        <GirlCat2 />
      </Canvas>
      <Interface />
    </div>
  );
}

export default App;
