/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.2 xCorundum.glb 
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

export function XCorundum(props) {
  const { nodes, materials } = useGLTF('/3dModels/xCorundum.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Cube001.geometry} material={nodes.Cube001.material} />
    </group>
  )
}

useGLTF.preload('/3dModels/xCorundum.glb')