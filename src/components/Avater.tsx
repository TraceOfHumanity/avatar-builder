import {useAnimations, useGLTF} from "@react-three/drei";
import {useRef} from "react";

import * as THREE from "three";

export const Avater = () => {
  const group = useRef<THREE.Group>(null);
  const {nodes, materials, animations} = useGLTF("/3dModels/ComplateCat.gltf");
  const {actions} = useAnimations(animations, group);

  return (
    // <group ref={group} dispose={null}>
    //   {/* <group name="Scene"> */}
    //   <group name="Cat">
    //     <skinnedMesh
    //       name="cat"
    //       // geometry={nodes.cat.geometry}
    //       // material={materials.cat}
    //       // skeleton={nodes.cat.skeleton}
    //     />
    //   </group>
    //   {/* </group> */}
    // </group>
    <group position={[0, -1, 0]}>
      <primitive object={avatar.scene} />
    </group>
  );
};
