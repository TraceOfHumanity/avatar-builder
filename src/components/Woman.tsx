import {useAnimations, useGLTF} from "@react-three/drei";
import React, {useEffect} from "react";

import {useAppDispatch} from "hooks/useReduxToolkit";
import {SkeletonUtils} from "three-stdlib";

import {setActions} from "../redux/slices/avatarActions";

export function Woman(props: any) {
  const group = React.useRef();
  const dispatch = useAppDispatch();
  const {scene, animations, materials} = useGLTF("/3dModels/woman.gltf");
  const {actions, names} = useAnimations(animations, group);

  useEffect(() => {
    actions[0]?.reset().fadeIn(0.5).play();
  }, [actions, names]);

  useEffect(() => {
    dispatch(setActions(names));
  }, []);

  return (
    <group ref={group} {...props} dispose={null}>
      <primitive object={scene} />
    </group>
  );
}

useGLTF.preload("/3dModels/woman.gltf");
