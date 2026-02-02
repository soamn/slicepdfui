import * as THREE from "three";
import { useRef, type JSX } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import type { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Cube001_1: THREE.Mesh;
    Cube001_2: THREE.Mesh;
    Cube003: THREE.Mesh;
    Cube004: THREE.Mesh;
    Cube: THREE.Mesh;
    Cube007: THREE.Mesh;
    Cube002_1: THREE.Mesh;
    Cube002_2: THREE.Mesh;
    Cube003_1: THREE.Mesh;
    Cube003_2: THREE.Mesh;
    Cube006: THREE.Mesh;
    Cube008: THREE.Mesh;
    Plane: THREE.Mesh;
    Cube005: THREE.Mesh;
    Object_2: THREE.Mesh;
    Object_3: THREE.Mesh;
    Object_3001: THREE.Mesh;
    defaultMaterial: THREE.Mesh;
    Plane001: THREE.Mesh;
    Bone: THREE.Bone;
    Bone_1: THREE.Bone;
  };
  materials: {
    outline: THREE.MeshStandardMaterial;
    Final_Base: THREE.MeshStandardMaterial;
    balls: THREE.MeshStandardMaterial;
    eyes: THREE.MeshStandardMaterial;
    Material: THREE.MeshStandardMaterial;
    lambert1: THREE.MeshStandardMaterial;
    ["MAT_Cardboard.001"]: THREE.MeshStandardMaterial;
    MAT_Paper_Decal: THREE.MeshStandardMaterial;
  };
};

// type ActionName = "ArmatureAction" | "Armature.001Action" | "Plane.001Action";
// type GLTFActions = Record<ActionName, THREE.AnimationAction>;

function Mascot(props: JSX.IntrinsicElements["group"]) {
  const group = useRef<THREE.Group>(null);
  const { nodes, materials, animations } = useGLTF(
    "/mascot.glb",
  ) as unknown as GLTFResult;

  const { actions } = useAnimations(animations, group);

  const handlePointerOver = () => {
    Object.values(actions).forEach((action) => {
      action?.reset().play();
    });
  };

  const handlePointerOut = () => {
    Object.values(actions).forEach((action) => {
      action?.fadeOut(0.3);
    });
  };
  return (
    <group
      ref={group}
      {...props}
      onPointerOver={handlePointerOver}
      onPointerOut={handlePointerOut}
      dispose={null}
    >
      <group name="Scene">
        <group name="amain">
          <mesh
            name="Cube001_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube001_1.geometry}
            material={materials.outline}
          />
          <mesh
            name="Cube001_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube001_2.geometry}
            material={materials.Final_Base}
          />
          <group
            name="Armature"
            position={[0.562, 1.916, -1.224]}
            rotation={[-1.147, -0.831, 0.251]}
            scale={0.546}
          >
            <mesh
              name="Cube003"
              castShadow
              receiveShadow
              geometry={nodes.Cube003.geometry}
              material={materials.Final_Base}
              position={[0.471, 3.292, -0.01]}
              rotation={[0.978, 1.47, 0.523]}
              scale={0.571}
            />
            <primitive object={nodes.Bone} />
          </group>
          <group
            name="Armature001"
            position={[-1.539, 1.798, -1.272]}
            rotation={[0.443, -1.264, 1.823]}
            scale={0.41}
          >
            <mesh
              name="Cube004"
              castShadow
              receiveShadow
              geometry={nodes.Cube004.geometry}
              material={materials.Final_Base}
              position={[0.095, 4.341, -1.451]}
              rotation={[2.825, 0.007, -1.593]}
              scale={0.761}
            />
            <primitive object={nodes.Bone_1} />
          </group>
          <mesh
            name="Cube"
            castShadow
            receiveShadow
            geometry={nodes.Cube.geometry}
            material={materials.balls}
            position={[-0.213, 2.877, -1.556]}
            scale={0.147}
          >
            <mesh
              name="Cube007"
              castShadow
              receiveShadow
              geometry={nodes.Cube007.geometry}
              material={materials.eyes}
              position={[0, 0.211, -0.54]}
              scale={-0.497}
            />
          </mesh>
          <group
            name="Cube001"
            position={[0.172, 2.989, -1.253]}
            rotation={[0, 0, -0.574]}
            scale={0.936}
          >
            <mesh
              name="Cube002_1"
              castShadow
              receiveShadow
              geometry={nodes.Cube002_1.geometry}
              material={materials.outline}
            />
            <mesh
              name="Cube002_2"
              castShadow
              receiveShadow
              geometry={nodes.Cube002_2.geometry}
              material={materials.Final_Base}
            />
          </group>
          <group name="Cube002" position={[-0.459, 1.841, -0.968]}>
            <mesh
              name="Cube003_1"
              castShadow
              receiveShadow
              geometry={nodes.Cube003_1.geometry}
              material={materials.outline}
            />
            <mesh
              name="Cube003_2"
              castShadow
              receiveShadow
              geometry={nodes.Cube003_2.geometry}
              material={materials.Final_Base}
            />
          </group>
          <mesh
            name="Cube006"
            castShadow
            receiveShadow
            geometry={nodes.Cube006.geometry}
            material={materials.balls}
            position={[-0.814, 2.877, -1.518]}
            scale={0.147}
          >
            <mesh
              name="Cube008"
              castShadow
              receiveShadow
              geometry={nodes.Cube008.geometry}
              material={materials.eyes}
              position={[-0.163, 0.211, -0.488]}
              scale={-0.497}
            />
          </mesh>
        </group>
        <mesh
          name="Plane"
          castShadow
          receiveShadow
          geometry={nodes.Plane.geometry}
          material={materials.Material}
        />
        <mesh
          name="Cube005"
          castShadow
          receiveShadow
          geometry={nodes.Cube005.geometry}
          material={materials.lambert1}
          position={[-0.501, 0.987, -3.16]}
        />
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="f216860e0d6042649bd1e2533119f3c3objcleanermaterialmergergles">
            <mesh
              name="Object_2"
              castShadow
              receiveShadow
              geometry={nodes.Object_2.geometry}
              material={materials["MAT_Cardboard.001"]}
              position={[3.469, 3.957, 0.009]}
              scale={1.702}
            />
            <mesh
              name="Object_3"
              castShadow
              receiveShadow
              geometry={nodes.Object_3.geometry}
              material={materials.MAT_Paper_Decal}
              position={[-1.054, 3.433, 0.009]}
            />
            <mesh
              name="Object_3001"
              castShadow
              receiveShadow
              geometry={nodes.Object_3001.geometry}
              material={materials.MAT_Paper_Decal}
              position={[1.69, 7.023, 0.009]}
            />
          </group>
        </group>
        <group
          name="Sketchfab_model001"
          position={[-2.97, 0.843, -7.196]}
          rotation={[-Math.PI / 2, 0, 0]}
        >
          <group
            name="Collada_visual_scene_group"
            rotation={[Math.PI / 2, 0, 0]}
          >
            <group name="pCube1">
              <mesh
                name="defaultMaterial"
                castShadow
                receiveShadow
                geometry={nodes.defaultMaterial.geometry}
                material={materials.lambert1}
                position={[2.383, -0.478, 1.996]}
                scale={0.492}
              />
            </group>
          </group>
        </group>
        <mesh
          name="Plane001"
          castShadow
          receiveShadow
          geometry={nodes.Plane001.geometry}
          material={materials.Material}
          position={[-0.508, 0.069, -5.074]}
          rotation={[0.045, 0, 0]}
          scale={0.354}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/mascot.glb");
export default Mascot;
