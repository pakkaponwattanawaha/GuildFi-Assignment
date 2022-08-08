import React from "react";
import { Html, useProgress } from "@react-three/drei";
export const LoadingSuspense = () => {
  const { progress } = useProgress();
  console.log(progress);
  return (
    <Html>
      <div className="z-20 w-screen h-screen">
        <div className="p-3 text-center top-1/2  w-full absolute ">
          <h2 className="text-xl pb-2">{progress} % Loaded </h2>
          <progress
            className="mx-3 text-center top-1/2 p-0.5 border-2 border-[#c8aa6e] w-1/2 h-6 "
            value={progress}
            max="100"
          >
            {" "}
          </progress>
        </div>
        <img
          className="w-screen h-screen  object-cover bg-no-repeat"
          src="loading-background.jpg"
        ></img>
      </div>
    </Html>
  );
};
