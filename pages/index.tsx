import type { NextPage } from "next";
import Head from "next/head";

import styles from "../styles/Home.module.css";

import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
import { Cloud, OrbitControls, Stars } from "@react-three/drei";
import { Physics, usePlane, useBox } from "@react-three/cannon";
import * as THREE from "three";
import { Mesh, PlaneGeometry } from "three";
import { Suspense, useMemo, useRef } from "react";
import { Water } from "three/examples/jsm/objects/Water.js";
import { TerrainPlane } from "../components/TerrainPlane";
import { LoadingSuspense } from "../components/LoadingSuspense";
import { ObjectModelOverlay } from "../components/ObjectModelOverlay";

function Fog() {
  return (
    <Cloud position={[0, 2, 0]} speed={0.2} opacity={0.25} />
    // <mesh ref={ref} rotation={[-Math.PI / 2, 0, 0]}>
    //   <planeBufferGeometry attach="geometry" args={[18, 18, 1024, 1024]} />
    //   <meshLambertMaterial map={fog} transparent={true} />
    //   {/* <meshStandardMaterial
    //     map={terrain}
    //     displacementMap={terrain_depth}
    //     displacementScale={1}
    //     metalnessMap={ocean}
    //     metalness={2.25}
    //     fog={true}
    //   /> */}
    // </mesh>
  );
}

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Suspense fallback={<LoadingSuspense />}>
        <Canvas>
          <OrbitControls
            enablePan={true}
            mouseButtons={{
              LEFT: THREE.MOUSE.PAN,
              MIDDLE: THREE.MOUSE.DOLLY,
              RIGHT: THREE.MOUSE.ROTATE,
            }}
          />
          <Stars />
          <ambientLight intensity={0.5} />
          {/* <spotLight position={[10, 15, 3]} angle={0.25} /> */}
          {/* <pointLight intensity={0.5} position={[0, 0, 1]} /> */}
          {/* <Fog /> */}
          {/* <Ocean /> */}
          <ObjectModelOverlay />
          <TerrainPlane />
        </Canvas>
      </Suspense>
    </div>
  );
};

export default Home;
