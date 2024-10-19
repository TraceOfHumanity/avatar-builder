/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.2 xCorundum.glb 
*/
import {useGLTF} from "@react-three/drei";
import React from "react";

export function XCorundum4(props) {
  const {nodes, materials} = useGLTF("/3dModels/xCorundum4.glb");
  return (
    <group position={[-1, 0, 0]} {...props} dispose={null}>
      <mesh
        geometry={nodes.Cube001.geometry}
        material={nodes.Cube001.material}
      />
    </group>
  );
}

useGLTF.preload("/3dModels/xCorundum4.glb");
