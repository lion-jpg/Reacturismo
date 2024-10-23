import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Letrero(props) {
  const { nodes, materials } = useGLTF('./models/letrero.glb')
  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <mesh geometry={nodes.Stub_matBaked_Stub_0.geometry} material={materials.matBaked_Stub} position={[0, 81.49, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={21.719} />
        <mesh geometry={nodes.Beton_matBaked_Beton_0.geometry} material={materials.matBaked_Beton} position={[0, 81.49, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={21.719} />
        <mesh geometry={nodes.Srafovi_SrafoviMetal_0.geometry} material={materials.SrafoviMetal} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.Drzac_matBaked_Drzac_0.geometry} material={materials.matBaked_Drzac} position={[0, 491.493, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={34.743} />
        <mesh geometry={nodes.DrzacGrid_matBaked_DrzacGrid_0.geometry} material={materials.matBaked_DrzacGrid} position={[-4.703, 491.493, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={34.743} />
        <mesh geometry={nodes.Sluba_SlubeZelezo_0.geometry} material={materials.SlubeZelezo} position={[48.006, 603.979, -8.551]} rotation={[-Math.PI / 2, 0, 0]} scale={5.311} />
        <mesh geometry={nodes.Bilbord_BilbordZelezo_0.geometry} material={materials.BilbordZelezo} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.Poster_Poster_0.geometry} material={materials.Poster} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
      </group>
    </group>
  )
}

useGLTF.preload('./models/letrero.glb')
