import React, { useEffect, useRef } from 'react'
import { useGraph, useFrame } from '@react-three/fiber'
import { useGLTF, useAnimations } from '@react-three/drei'
import { SkeletonUtils } from 'three-stdlib'
import * as THREE from 'three'

export function Character1({ position, rotation, moveForward, moveBackward, moveLeft, moveRight, ...props }) {
  const group = useRef()
  const { scene, animations } = useGLTF('./models/glb/characters/character1.glb')
  
  // Añade este console.log para ver los nombres de las animaciones
  // console.log('Animations:', animations.map(anim => anim.name));

  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene])
  const { nodes, materials } = useGraph(clone)
  const { actions } = useAnimations(animations, group)

  useEffect(() => {
    // console.log(actions);
    actions.Walk.play();
  },);
  // useEffect(() => {
  //   const action = actions['idle']
  //   if (action) {
  //     action.reset().fadeIn(0.5).play()
  //   }
  // }, [actions])

  useFrame((state, delta) => {
    if (group.current) {
      const speed = 2
      if (moveForward) group.current.position.z -= speed * delta
      if (moveBackward) group.current.position.z += speed * delta
      if (moveLeft) group.current.position.x -= speed * delta
      if (moveRight) group.current.position.x += speed * delta

      // Rotate character based on movement direction
      if (moveForward || moveBackward || moveLeft || moveRight) {
        const angle = Math.atan2(
          (moveRight ? 1 : 0) - (moveLeft ? 1 : 0),
          (moveBackward ? 1 : 0) - (moveForward ? 1 : 0)
        )
        group.current.rotation.y = angle
      }
    }
  })

  return (
    <group ref={group} {...props} dispose={null} position={position} rotation={rotation}>
      <group name="AuxScene">
        <group name="entity_1">
          <group name="2" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <primitive object={nodes.mixamorigHips} />
          </group>
          <skinnedMesh name="2001" geometry={nodes['2001'].geometry} material={materials['characterTexture.006']} skeleton={nodes['2001'].skeleton} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('./models/glb/characters/character1.glb')
