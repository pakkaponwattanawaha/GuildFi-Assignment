import { useState } from "react";

import React from "react";
import { useLoader } from "@react-three/fiber";
import * as THREE from "three";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";

export const useObjectLoader = () => {
  const [
    demacia_city_landmark,
    frostguard,
    immortal_bastion,
    ixaocan,
    mount_targon,
    placidium,
    sun_disc,
    the_void,
  ] = useLoader(OBJLoader, [
    "object/demacia-city-landmark.obj",
    "object/frostguard.obj",
    "object/immortal-bastion.obj",
    "object/ixaocan.obj",
    "object/mount-targon.obj",
    "object/placidium.obj",
    "object/sun-disc.obj",
    "object/the-void.obj",
  ]);
  return {
    obj: {
      demacia_city_landmark,
      frostguard,
      immortal_bastion,
      ixaocan,
      mount_targon,
      placidium,
      sun_disc,
      the_void,
    },
  };
};
