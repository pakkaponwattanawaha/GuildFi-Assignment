import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useMemo, useRef, useState } from "react";
import { LoadingSuspense } from "./LoadingSuspense";
import { Cloud, PerspectiveCamera, Stars } from "@react-three/drei";

import { TerrainPlane } from "../components/TerrainPlane";

import { ObjectModelOverlay } from "../components/ObjectModelOverlay";
import { CityRegionOverlay } from "../components/CityRegionOverlay";
import { CameraControl } from "components/CameraControl";

function Fog() {
  return (
    <mesh rotation={[0, 0, 0]}>
      <Cloud width={13} position={[0, 3, -3]} speed={0.3} opacity={0.15} />
    </mesh>
  );
}
export const MainCanvas = () => {
  const [isShowObject, setIsShowObject] = useState<boolean>(false);
  return (
    <div className="absolute w-full h-full">
      <Canvas camera={{ position: [0, 0, 0] }}>
        <Suspense fallback={<LoadingSuspense />}>
          <color attach="background" args={["black"]} />
          <PerspectiveCamera position={[0, 8.5, 0]} makeDefault />
          <CameraControl
            isShowObject={isShowObject}
            onNotShow={() => setIsShowObject(false)}
            onShow={() => setIsShowObject(true)}
          />
          <Stars />
          {/* <Fog /> */}
          <ambientLight intensity={0.8} />
          <CityRegionOverlay isShowRegion={!isShowObject} />
          <ObjectModelOverlay isShowObject={isShowObject} />
          <TerrainPlane />
        </Suspense>
      </Canvas>{" "}
    </div>
  );
};
