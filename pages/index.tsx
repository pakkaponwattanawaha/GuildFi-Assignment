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
import { WelcomeCover } from "components/WelcomeCover";
import { NavBar } from "components/NavBar";
import { MainCanvas } from "components/MainCanvas";

const Home: NextPage = () => {
  return (
    <div className="mainContainer relative">
      <Head>
        <title>Map of Runeterra</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainCanvas />
      <WelcomeCover />
    </div>
  );
};

export default Home;
