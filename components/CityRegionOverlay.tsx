import React from "react";
import { cityDetails } from "../constant";
import { useMaskLoader, useTextureLoader } from "../hooks";
import { useBadgeLoader } from "../hooks";
import { CityRegion } from "./CityRegion";
interface Props {
  isShowRegion: boolean;
}
export const CityRegionOverlay = ({ isShowRegion }: Props) => {
  const { texture } = useTextureLoader();
  const { badge } = useBadgeLoader();
  const { mask } = useMaskLoader();
  return (
    <mesh>
      {cityDetails.map((city, index) => {
        return (
          <CityRegion
            key={index}
            name={city.name}
            badge={badge[city.name as keyof object]}
            badge_hover={badge[(city.name + "_hover") as keyof object]}
            highlight={texture[(city.name + "_highlight") as keyof object]}
            mask={mask.depth_z1}
            position={city.position}
            scale={city.scale}
            isShowRegion={isShowRegion}
            rotation={city.rotation}
          />
        );
      })}
    </mesh>
  );
};
