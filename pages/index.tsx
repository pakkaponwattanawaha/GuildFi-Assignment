import type { NextPage } from "next";
import Head from "next/head";

import styles from "../styles/Home.module.css";

import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { Physics, usePlane, useBox } from "@react-three/cannon";
import * as THREE from "three";

function Box() {
  const [ref, api] = useBox(() => ({
    rotation: [-Math.PI / 2, 0, 0],
    position: [0, -2, 0],
  }));
  const [texture, displacement, emissive] = useLoader(THREE.TextureLoader, [
    "terrain_z1.jpg",
    "depth_z1.jpg",
    "ocean_z1.jpg",
  ]);
  return (
    <mesh
      onClick={() => {
        api.velocity.set(0, 2, 0);
      }}
      ref={ref}
      position={[0, 2, 0]}
    >
      <planeBufferGeometry attach="geometry" args={[18, 18, 1024, 1024]} />
      <meshDepthMaterial
        map={texture}
        displacementMap={displacement}
        displacementScale={1}
        fog={true}
      />
    </mesh>
  );
}
function Plane() {
  const [ref] = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0],
  }));
  const [texture, displacement, emissive] = useLoader(THREE.TextureLoader, [
    "terrain_z1.jpg",
    "depth_z1.jpg",
    "ocean_z1.jpg",
  ]);

  return (
    <mesh ref={ref} rotation={[-Math.PI / 2, 0, 0]}>
      <planeBufferGeometry attach="geometry" args={[18, 18, 1024, 1024]} />
      {/* <meshLambertMaterial attach="material" color="lightblue" /> */}
      <meshStandardMaterial
        map={texture}
        displacementMap={displacement}
        displacementScale={1}
        metalnessMap={emissive}
        metalness={2.25}
        fog={true}
      />
    </mesh>
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
      <Canvas>
        <OrbitControls />
        <Stars />
        <ambientLight intensity={0.5} />
        {/* <spotLight position={[10, 15, 3]} angle={0.25} /> */}
        <Physics>
          {/* <Box /> */}
          <Plane />
        </Physics>
      </Canvas>
    </div>
  );
};

export default Home;
