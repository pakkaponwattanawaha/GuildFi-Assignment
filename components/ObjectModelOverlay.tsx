import React from "react";
import { objectDetails } from "../constant";
import { useObjectLoader, useTextureLoader } from "../hooks";
import { ObjectModel } from "./ObjectModel";
import * as THREE from "three";
interface Props {
  isShowObject: boolean;
}
export const ObjectModelOverlay = ({ isShowObject }: Props) => {
  //appear when tilt more than around 45deg
  const { texture } = useTextureLoader();
  const { obj } = useObjectLoader();
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
    </mesh>
  );
};
