/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.2 Y.glb 
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Y2(props) {
  const { nodes, materials } = useGLTF('/3dModels/Y2.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Plane001.geometry} material={materials['Material.003']} position={[0.199, 1.652, 0.01]} scale={0.014} />
    </group>
  )
}

useGLTF.preload('/3dModels/Y2.glb')
