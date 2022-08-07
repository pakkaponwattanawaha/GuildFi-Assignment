import React from "react";
import { cityDetails } from "../constant";
import { useMaskLoader, useTextureLoader } from "../hooks";
import { useBadgeLoader } from "../hooks";
import { CityRegion } from "./CityRegion";
interface Props {
  isShowRegion: boolean;
}
export const CityRegionOverlay = ({ isShowRegion }: Props) => {
  //also include terrain highlight
  const { texture } = useTextureLoader();
  const { badge } = useBadgeLoader();
  const { mask } = useMaskLoader();
  return (
    <mesh>
      {cityDetails.map((model, index) => {
        return (
          <CityRegion
            key={index}
            badge={badge[model.name as keyof object]}
            badge_hover={badge[(model.name + "_hover") as keyof object]}
            highlight={texture[(model.name + "_highlight") as keyof object]}
            mask={mask.depth_z1}
            position={model.position}
            scale={model.scale}
            isShowRegion={isShowRegion}
            rotation={model.rotation}
          />
        );
      })}
    </mesh>
  );
};
