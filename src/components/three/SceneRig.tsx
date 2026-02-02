import { PerspectiveCamera } from "@react-three/drei";
import { useRef } from "react";
import CameraScroll from "./CameraScroll";
import * as THREE from "three";

function SceneRig() {
  const rig = useRef<THREE.Group>(null);

  return (
    <group ref={rig}>
      <PerspectiveCamera makeDefault position={[14, 6, 30]} fov={18} />
      <CameraScroll rig={rig} />
    </group>
  );
}

export default SceneRig;
