import {useAnimations, useGLTF} from "@react-three/drei";
import React, {useEffect} from "react";

import {useAppDispatch, useAppSelector} from "hooks/useReduxToolkit";
import {SkeletonUtils} from "three-stdlib";

import {setActions} from "../redux/slices/avatarActions";

export function Woman(props: any) {
  const group = React.useRef();
  const dispatch = useAppDispatch();
  const {scene, animations, materials} = useGLTF("/3dModels/woman.gltf");
  const {actions, names} = useAnimations(animations, group);
  const {currentAction} = useAppSelector((state) => state.avatarActions);
  useEffect(() => {
    actions[currentAction]?.reset().fadeIn(0.5).play();

    return () => {
      actions[currentAction]?.reset().fadeOut(0.5);
    };
  }, [currentAction, actions]);

  useEffect(() => {
    dispatch(setActions(names));
  }, [names]);

  return (
    <group ref={group} {...props} dispose={null}>
      <primitive object={scene} />
    </group>
  );
}

useGLTF.preload("/3dModels/woman.gltf");
