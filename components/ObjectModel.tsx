import { useAudioPlayer } from "hooks";
import React, { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";
import { Mesh, Vector3 } from "three";

interface Props {
  object: THREE.Group;
  texture: THREE.Texture;
  scale?: any;
  position?: any;
  isShowObject: boolean;
  rotation?: any;
}

export const ObjectModel = ({
  object,
  texture,
  scale,
  position,
  isShowObject,
  rotation,
}: Props) => {
  const ref = useRef<any>();
  const [isHover, setIsHover] = useState<boolean>(false);
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

  useEffect(() => {
    document.body.style.cursor = isHover ? "pointer" : "auto";
    ref.current.metalness = isHover ? 2 : 0;
  }, [isHover]);
  const { play_ui_button, play_trans_zoom, play_sidedrawer_open } =
    useAudioPlayer();
  return (
    <mesh
      onPointerOver={(e) => {
        setIsHover(true);
        play_ui_button();
      }}
      onPointerOut={(e) => {
        setIsHover(false);
      }}
      onClick={(e) => {
        setIsHover(true);
        play_trans_zoom();
        play_sidedrawer_open();
      }}
      geometry={geometry}
      scale={scale}
      position={isShowObject ? position : [0, -20, 0]}
      rotation={rotation}
    >
      <meshStandardMaterial ref={ref} map={texture} metalness={2.25} />
    </mesh>
  );
};
