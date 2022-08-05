import { useState } from "react";

import React from "react";
import { useLoader } from "@react-three/fiber";
import * as THREE from "three";

export const useMaskLoader = () => {
  const [depth_z1, fog_mask, ocean_z1, snow_mask] = useLoader(
    THREE.TextureLoader,
    [
      "mask/depth_z1.jpg",
      "mask/fog-mask.jpg",
      "mask/ocean_z1.jpg",
      "mask/snow-mask.jpg",
    ]
  );
  return {
    mask: { depth_z1, fog_mask, ocean_z1, snow_mask },
  };
};
