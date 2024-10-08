/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.2 girlCat.glb 
*/
import {useGLTF} from "@react-three/drei";
import React from "react";

export function GirlCat(props) {
  const {nodes, materials} = useGLTF("/3dModels/girlCat.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.heat.geometry}
        material={nodes.heat.material}
        position={[0, 0.419, 0]}
      />
      <mesh
        geometry={nodes.body.geometry}
        material={nodes.body.material}
        position={[0, -0.149, 0]}
        scale={0.201}
      />
      <mesh
        geometry={nodes.leg.geometry}
        material={nodes.leg.material}
        position={[0.093, -0.161, 0]}
        scale={[0.043, 0.047, 0.047]}
      />
      <mesh
        geometry={nodes.neck.geometry}
        material={nodes.neck.material}
        position={[0, 0.222, 0]}
        scale={0.052}
      />
      <mesh
        geometry={nodes.feet.geometry}
        material={nodes.feet.material}
        position={[0.098, -0.848, 0]}
        scale={0.058}
      />
      <mesh
        geometry={nodes.mandible.geometry}
        material={nodes.mandible.material}
        position={[0, 0.284, 0.072]}
        scale={[1, 1, 1.091]}
      />
      <mesh
        geometry={nodes.nose.geometry}
        material={nodes.nose.material}
        position={[0, 0.348, 0.319]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.035, 0.318, 0.035]}
      />
      <mesh
        geometry={nodes.mouth.geometry}
        material={nodes.mouth.material}
        position={[0.11, 0.288, 0.305]}
        rotation={[1.822, 0.394, -0.373]}
        scale={[0.015, 0.131, 0.015]}
      />
      <mesh
        geometry={nodes.eye.geometry}
        material={nodes.eye.material}
        position={[0.122, 0.432, 0.257]}
        rotation={[1.599, -0.038, 2.744]}
        scale={0.911}
      />
      <mesh
        geometry={nodes.pupil.geometry}
        material={nodes.pupil.material}
        position={[0.081, 0.433, 0.292]}
        rotation={[0.681, -1.202, -0.904]}
      />
      <mesh
        geometry={nodes.eyebrow.geometry}
        material={nodes.eyebrow.material}
        position={[0.061, 0.512, 0.302]}
        rotation={[0.681, -1.202, -0.904]}
      />
      <mesh
        geometry={nodes.heir.geometry}
        material={nodes.heir.material}
        position={[-0.078, 0.733, 0.113]}
        rotation={[0.836, -0.582, 0.546]}
      />
      <mesh
        geometry={nodes.heir001.geometry}
        material={nodes.heir001.material}
        position={[-0.079, 0.683, 0.157]}
        rotation={[1.293, -0.167, 0.767]}
      />
      <mesh
        geometry={nodes.heir002.geometry}
        material={nodes.heir002.material}
        position={[-0.048, 0.624, 0.157]}
        rotation={[1.524, -0.046, 0.775]}
      />
      <mesh
        geometry={nodes.coat.geometry}
        material={nodes.coat.material}
        position={[0, -0.149, 0]}
        scale={0.242}
      />
      <mesh
        geometry={nodes.Plane.geometry}
        material={nodes.Plane.material}
        position={[0, -0.017, 0]}
        scale={0.647}
      />
      <mesh
        geometry={nodes.Cube.geometry}
        material={nodes.Cube.material}
        position={[0.09, -0.328, 0]}
        scale={0.089}
      />
    </group>
  );
}

useGLTF.preload("/3dModels/girlCat.glb");
