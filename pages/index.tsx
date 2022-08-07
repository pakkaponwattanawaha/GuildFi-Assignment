import type { NextPage } from "next";
import Head from "next/head";

import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
import { Cloud, OrbitControls, Stars, useAnimations } from "@react-three/drei";
import { Physics, usePlane, useBox } from "@react-three/cannon";
import * as THREE from "three";
import { Mesh, PlaneGeometry } from "three";
import { PerspectiveCamera } from "@react-three/drei";
import { Suspense, useEffect, useMemo, useRef, useState } from "react";
import { Water } from "three/examples/jsm/objects/Water.js";
import { TerrainPlane } from "../components/TerrainPlane";
import { LoadingSuspense } from "../components/LoadingSuspense";
import { ObjectModelOverlay } from "../components/ObjectModelOverlay";
import { CityRegionOverlay } from "../components/CityRegionOverlay";
import { CameraControl } from "components/CameraControl";

function Fog() {
  const ref = useRef();
  const [cloud, cloud_texture] = useLoader(THREE.TextureLoader, [
    "https://rawcdn.githack.com/pmndrs/drei-assets/9225a9f1fbd449d9411125c2f419b843d0308c9f/cloud.png",
    "texture/clouds.jpg",
  ]);
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]}>
      {/* <planeBufferGeometry attach="geometry" args={[12, 12, 1024, 1024]} /> */}
      <Cloud width={12} position={[0, 3, 0]} speed={0.2} opacity={1.25} />
      {/* <meshLambertMaterial map={fog} transparent={true} /> */}
      {/* <meshStandardMaterial
        map={texture.terrain_z1}
        displacementMap={mask.depth_z1}
        displacementScale={1}
        metalnessMap={mask.ocean_z1}
        metalness={2.25}
        fog={true}
      /> */}
    </mesh>
  );
}
function Box() {
  return (
    <mesh position={[0, -20, -20]}>
      <boxBufferGeometry attach="geometry" />
      <meshLambertMaterial attach="material" color="hotpink" />
    </mesh>
  );
}

const Home: NextPage = () => {
  const [isShowObject, setIsShowObject] = useState<boolean>(false);
  return (
    <div className="mainContainer">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Suspense fallback={<LoadingSuspense />}>
        <Canvas camera={{ position: [0, 0, 0] }}>
          <PerspectiveCamera position={[0, 8.5, 0]} makeDefault />
          <CameraControl
            isShowObject={isShowObject}
            onNotShow={() => setIsShowObject(false)}
            onShow={() => setIsShowObject(true)}
          />
          {/* <Stars /> */}
          {/* <spotLight position={[10, 15, 3]} angle={0.25} /> */}
          {/* <pointLight intensity={0.5} position={[0, 0, 1]} /> */}
          {/* <Fog /> */}
          {/* <Ocean /> */}
          {/* <CityObject /> */}
          {/* <Box /> */}
          <ambientLight intensity={0.7} />
          <CityRegionOverlay isShowRegion={!isShowObject} />
          <ObjectModelOverlay isShowObject={isShowObject} />
          <TerrainPlane />
        </Canvas>
      </Suspense>
    </div>
  );
};

export default Home;
