
import React from 'react'
import { useGLTF } from '@react-three/drei'

export function SueloVerde(props) {
  const { nodes, materials } = useGLTF('./models/sueloVerde.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.geometry_0.geometry} material={nodes.geometry_0.material} />
    </group>
  )
}

useGLTF.preload('./models/sueloVerde.glb')
