import { usePlane } from "@react-three/cannon";
import { useLoader } from "@react-three/fiber";
import * as THREE from "three";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { useMaskLoader, useTextureLoader } from "../hooks";

export const TerrainPlane = () => {
  const { texture } = useTextureLoader();
  const { mask } = useMaskLoader();
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]}>
      <planeBufferGeometry attach="geometry" args={[18, 18, 1024, 1024]} />
      {/* <meshLambertMaterial map={fog} transparent={true} /> */}
      <meshStandardMaterial
        map={texture.terrain_z1}
        displacementMap={mask.depth_z1}
        displacementScale={1}
        metalnessMap={mask.ocean_z1}
        metalness={2.25}
        fog={true}
      />
    </mesh>
  );
};
