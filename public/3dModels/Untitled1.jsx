/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.2 untitled1.glb 
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/untitled1.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Object_75.geometry} material={materials.Blue} scale={0.454} />
    </group>
  )
}

useGLTF.preload('/untitled1.glb')
