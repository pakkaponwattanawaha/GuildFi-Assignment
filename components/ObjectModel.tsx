import React, { useMemo } from "react";
import * as THREE from "three";
import { Mesh, Vector3 } from "three";

interface Props {
  object: THREE.Group;
  texture: THREE.Texture;
  scale?: any;
  position?: any;
  rotation?: any;
}

export const ObjectModel = ({
  object,
  texture,
  scale,
  position,
  rotation,
}: Props) => {
  const geometry = useMemo(() => {
    let g;
    object.traverse((c) => {
      if (c.type === "Mesh") {
        const _c = c as Mesh;
        g = _c.geometry;
      }
    });
    return g;
  }, [object]);
  return (
    <mesh
      onPointerOver={(e) => {
        e.stopPropagation();
        console.log("over");
      }}
      geometry={geometry}
      scale={scale}
      position={position}
      rotation={rotation}
    >
      <meshStandardMaterial map={texture} />
    </mesh>
  );
};
