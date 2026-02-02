import { Canvas } from "@react-three/fiber";
import MainScene from "./MainScene";
import { Suspense } from "react";
import SceneRig from "./SceneRig";
import { OrbitControls } from "@react-three/drei";

const MainCanvas = () => {
  return (
    <div className="w-screen h-screen fixed top-0 left-0 ">
      <Canvas shadows>
        <SceneRig />
        <Suspense fallback={null}>
          <MainScene />
        </Suspense>
        <spotLight
          position={[2, 6, 6]}
          intensity={50}
          // color={"#FEFFC4"}
          penumbra={1}
        />
        <pointLight position={[-5, 5, 6]} intensity={1} color="white" />

        <OrbitControls
          enableZoom={false}
          minPolarAngle={Math.PI / 2.4} // can't look straight down
          maxPolarAngle={Math.PI / 2.1} // can't go under the ground
          // ⬅➡ horizontal rotation (left / right)
          minAzimuthAngle={-Math.PI / 5}
          maxAzimuthAngle={Math.PI / 5}
          enablePan={false}
        />
      </Canvas>
    </div>
  );
};

export default MainCanvas;
