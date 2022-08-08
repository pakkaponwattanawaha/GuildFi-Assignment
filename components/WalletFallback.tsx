import React from "react";

export const WalletFallback = () => {
  return (
    <div className="z-20 w-screen h-screen">
      <div className="p-3 text-center top-1/2  w-full absolute ">
        <span className="  text-[#c8aa6e] font-bold text-2xl sm:text-3xl pt-10">
          Please Connect To Metamask Wallet
        </span>
      </div>
      <img
        className="w-screen h-screen  object-cover bg-no-repeat"
        src="loading-background.jpg"
      ></img>
    </div>
  );
};
