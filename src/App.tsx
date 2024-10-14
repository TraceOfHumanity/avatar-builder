import {OrbitControls} from "@react-three/drei";
import {Canvas} from "@react-three/fiber";

import {Menu} from "components";
import {Avatar} from "components/3DModels/Avatar";
import {GirlCat2} from "components/3DModels/GirlCat2";

function App() {
  return (
    <div className="h-screen w-screen">
      <Menu />
      <Canvas
        camera={{
          position: [0, 0, 3],
        }}
      >
        <color attach="background" args={["#303030"]} />
        <OrbitControls />
        <ambientLight intensity={10} />
        {/* <directionalLight color="white" position={[0, 0, 5]} /> */}
        {/* <directionalLight color="white" position={[2, 0, -3]} /> */}
        <pointLight position={[4, 5, 3]} intensity={100} />
        <mesh>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="red" />
        </mesh>
        <GirlCat2 />
        <Avatar />
      </Canvas>
    </div>
  );
}

export default App;
