import { useAudioPlayer } from "hooks";
import React, { useEffect, useState } from "react";

export const WelcomeCover = () => {
  const [isEnter, setIsEnter] = useState<boolean>(false);
  const { play_trans_intro, play_ui_welcome_click } = useAudioPlayer();
  useEffect(() => {
    if (isEnter) {
      play_trans_intro();
      play_ui_welcome_click();
    }
  }, [isEnter]);

  return (
    <div
      className={
        isEnter
          ? "cursor-pointer absolute grid gap-24 text-center w-full h-full transition duration-500 opacity-0 hidden"
          : "cursor-pointer absolute grid gap-24 p-24 bg-gray-900/30 text-center w-full h-full z-10"
      }
      onClick={() => {
        setIsEnter(true);
      }}
    >
      <div className="content-end grid gap-3">
        <span className="  text-[#c8aa6e] font-bold text-xl sm:text-2xl pt-10">
          Explore & Discover
        </span>
        <img
          className=" w-[250px] sm:w-[500px] h-fit justify-self-center "
          src="RuneterraLogo.png"
          alt=""
        />
      </div>

      <button
        className="mt-24 welcome-button border-2 border-[#c8aa6e] hover:border-[#e3c07b]  font-medium p-1 w-[195px] h-[58px] justify-self-center"
        onClick={() => {
          setIsEnter(true);
        }}
      >
        BEGIN EXPLORING
      </button>
    </div>
  );
};
