import {useAnimations, useGLTF} from "@react-three/drei";

import * as THREE from "three";

export const Avater = () => {
  const avatar = useGLTF("/3dModels/ComplateCat.glb");

  return <group>{avatar && <primitive object={avatar.scene} />}</group>;
};
