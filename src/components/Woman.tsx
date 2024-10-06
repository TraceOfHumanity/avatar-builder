import {useAnimations, useGLTF} from "@react-three/drei";
import React, {useEffect, useRef} from "react";

import {useAppDispatch, useAppSelector} from "hooks/useReduxToolkit";
import * as THREE from "three";

import {setActions} from "../redux/slices/avatarActions";

export function Woman(props: any) {
  const group = useRef<THREE.Group>();
  const dispatch = useAppDispatch();
  const {scene, nodes, animations, materials} = useGLTF("/3dModels/woman.gltf");
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
    // <group ref={group} {...props} dispose={null}>
    //   <group name="Scene">
    //     {/* <primitive object={scene} /> */}
    //     <skinnedMesh
    //       name="LeftHand"
    //       geometry={(nodes["LeftHand"] as THREE.Mesh).geometry}
    //       material={materials["Heir"]}
    //       castShadow
    //     />
    //   </group>
    // </group>
    <group ref={group} {...props} dispose={null}>
      <primitive object={scene} />
    </group>
  );
}

useGLTF.preload("/3dModels/woman.gltf");
