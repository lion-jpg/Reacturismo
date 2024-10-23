import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Tabletfutur(props) {
  const { nodes, materials } = useGLTF('./models/tabletfutur.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh geometry={nodes.defaultMaterial.geometry} material={materials.MAT_TabletGlass} />
          <mesh geometry={nodes.defaultMaterial_1.geometry} material={materials.MAT_OpacityText} />
          <mesh geometry={nodes.defaultMaterial_2.geometry} material={materials.MAT_Tablet} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('./models/tabletfutur.glb')
