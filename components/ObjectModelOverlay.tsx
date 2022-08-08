import React, { useRef } from "react";
import { objectDetails } from "../constant";
import { useObjectLoader, useTextureLoader } from "../hooks";
import { ObjectModel } from "./ObjectModel";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
interface Props {
  isShowObject: boolean;
}
export const ObjectModelOverlay = ({ isShowObject }: Props) => {
  const { texture } = useTextureLoader();
  const { obj } = useObjectLoader();
  const beamRef = useRef<any>();
  useFrame(() => (beamRef.current.rotation.y += 0.2));
  return (
    <mesh>
      {objectDetails.map((model, index) => {
        return (
          <ObjectModel
            key={index}
            object={obj[model.name as keyof object]}
            texture={texture[model.name as keyof object]}
            position={model.position}
            scale={model.scale}
            isShowObject={isShowObject}
            rotation={model.rotation}
          />
        );
      })}

      <mesh
        ref={beamRef}
        position={isShowObject ? [-1.67, -0.17, 3.503] : [20, 0, 20]}
        rotation={[0, 0, 0]}
      >
        <cylinderBufferGeometry
          attach="geometry"
          args={[0.002, 0.002, 28, 6]}
        />
        <meshStandardMaterial
          attach="material"
          map={texture.beam}
          transparent={true}
          opacity={0.9}
          metalness={80}
        />
      </mesh>
    </mesh>
  );
};
