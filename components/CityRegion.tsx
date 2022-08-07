import { useEffect, useRef, useState } from "react";

import React from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useAudioPlayer, useMaskLoader } from "../hooks";
import { meshBounds } from "@react-three/drei";
interface Props {
  badge: THREE.Texture;
  badge_hover: THREE.Texture;
  highlight?: THREE.Texture;
  mask: THREE.Texture;
  scale?: any;
  position?: any;
  rotation?: any;
}

export const CityRegion = ({
  badge,
  badge_hover,
  highlight,
  mask,
  scale,
  position,
  rotation,
}: Props) => {
  const [isHover, setIsHover] = useState<boolean>(false);
  const mesh = useRef<any>();
  const { play_hover_region, play_ui_region_click, play_trans_zoom } =
    useAudioPlayer();
  useFrame(() => {
    if (isHover && highlight && mesh?.current.opacity <= 0.8) {
      mesh.current.opacity += 0.09;
    } else if (!isHover && highlight && mesh?.current.opacity >= 0) {
      mesh.current.opacity -= 0.08;
    }
  });
  useEffect(() => {
    document.body.style.cursor = isHover ? "pointer" : "auto";
  }, [isHover]);
  return (
    <>
      <group renderOrder={10}>
        {!isHover ? (
          <sprite
            onPointerOver={(e) => {
              setIsHover(true);
              play_hover_region();
            }}
            onClick={(e) => {
              play_ui_region_click();
              play_trans_zoom();
            }}
            scale={scale}
            position={position}
            renderOrder={10}
          >
            <spriteMaterial attach="material" map={badge} />
          </sprite>
        ) : (
          <>
            <sprite
              onPointerOut={(e) => {
                setIsHover(false);
              }}
              onClick={(e) => {
                play_ui_region_click();
              }}
              scale={scale}
              position={position}
            >
              <spriteMaterial attach="material" map={badge_hover} />
            </sprite>
          </>
        )}
      </group>

      <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, 0.01, 0]}
        renderOrder={1}
      >
        <planeBufferGeometry attach="geometry" args={[18, 18, 1024, 1024]} />
        <meshStandardMaterial
          ref={mesh}
          map={highlight}
          displacementMap={mask}
          transparent={true}
          opacity={0}
        />
      </mesh>
    </>
  );
};