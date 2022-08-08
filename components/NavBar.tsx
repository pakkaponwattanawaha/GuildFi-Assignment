import { useAudioPlayer } from "hooks";
import React, { useState } from "react";

declare let window: any;
interface Props {
  account: string;
}
export const NavBar = ({ account }: Props) => {
  const openInNewTab = (url: string) => {
    window.open(url);
  };
  const { play_ui_generic_button_click, play_ui_button } = useAudioPlayer();
  const [isMute, setIsMute] = useState<boolean>(false);
  const handleMuteButton = () => {
    if (isMute) {
      setIsMute(false);
    } else {
      setIsMute(true);
    }
  };
  const connectWallet = async () => {
    window.ethereum
      .request({ method: "eth_requestAccounts" })
      .then((accounts: any) => {
        console.log("accounts", accounts);
      });
  };

  return (
    <div className="absolute  w-screen h-[50px] md:w-[50px] md:h-screen z-50">
      <nav className="w-full h-full bg-[#010a13] bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-60  ">
        <div className="w-full h-full flex justify-between md:flex-col">
          <div className="flex md:flex-col items-center self-center gap-5 md:gap-8 mx-3 md:mx-0 my-0 md:my-3">
            <button
              className="fill-[#c8aa6e] hover:fill-[#f0e6d2] curson-pointer"
              onPointerOver={(e) => {
                play_ui_button();
              }}
              onClick={() => {
                play_ui_generic_button_click();
                openInNewTab(
                  "https://universe.leagueoflegends.com/en_US/?_gl=1*y65ym6*_ga*OTAwMjkxOTMwLjE2NTk1OTg5ODU.*_ga_FXBJE5DEDD*MTY1OTk2Mzc4OS4yMC4xLjE2NTk5NjM4NzEuNjA.&_ga=2.74025490.1445366554.1659598985-900291930.1659598985"
                );
              }}
            >
              <svg
                width="26px"
                height="26px"
                viewBox="0 0 200 200"
                x="0px"
                y="0px"
              >
                <path d="M82.1,34.4V0H21.4l14.3,17.9v153.6v0.2c0,0,0,0-0.1-0.1L21.4,200h135.7l21.4-28.6H82.1V34.4z"></path>
                <path d="M181.3,107.1c0,22.3-9,42.4-23.6,57.1h13.1c12.6-15.6,20.2-35.5,20.2-57.1c0-50.2-40.9-91.1-91.1-91.1 c-3.6,0-7.2,0.2-10.7,0.6v9.8c3.5-0.5,7.1-0.7,10.7-0.7C144.9,25.8,181.3,62.3,181.3,107.1z"></path>
                <path d="M35.6,171.4c0,0,0.1,0.1,0.1,0.1l0.1-0.1H35.6z"></path>
                <path d="M28.6,50.8C16.3,66.3,8.9,85.9,8.9,107.1c0,21.3,7.4,40.9,19.6,56.4V146c-6.3-11.5-9.9-24.8-9.9-38.8s3.6-27.3,9.9-38.8 V50.8z"></path>
                <path d="M28.6,84.5c-2.3,7.1-3.6,14.7-3.6,22.6s1.3,15.5,3.6,22.6V84.5z"></path>
                <path d="M175,107.1c0-14.2-4-27.4-10.8-38.7l0-0.1c0,0-0.1,0-0.1,0c-31.9-0.4-31.9,24.6-31.9,24.6c0,57.1-42.9,65.2-42.9,65.2v2.7 v3.6h59.1C164.6,150.5,175,130.1,175,107.1z"></path>
                <path d="M95.7,147c2.2-1.1,4.4-2.3,6.4-3.7c2.5-1.7,4.9-3.6,7.2-5.6c2.5-2.4,4.9-5,6.9-7.9c2.3-3.2,4.1-6.7,5.5-10.4 c1.6-4.2,2.6-8.7,3.1-13.1c0.2-2.1,0.2-4.2,0.3-6.3c0-2.1,0-4.3,0.2-6.4c0.2-2.5,0.6-5,1.2-7.4c0.7-2.9,1.7-5.7,3-8.4 c1.4-2.9,3.2-5.6,5.5-8c2.5-2.6,5.5-4.7,8.7-6.1c4-1.8,8.4-2.6,12.7-2.9c0.8,0,1.6-0.1,2.5-0.1c-0.3-0.3-0.5-0.7-0.7-1 c-13.8-16.9-34.7-27.7-58.1-27.7c-3.6,0-7.2,0.3-10.7,0.8v70.6c0,0,0,46,0,46c0-0.1,1.7-0.6,1.8-0.6 C92.6,148.4,94.2,147.7,95.7,147z"></path>

                <path d=""></path>
              </svg>
            </button>
            <button
              className="fill-[#c8aa6e] hover:fill-[#f0e6d2] curson-pointer "
              onPointerOver={(e) => {
                play_ui_button();
              }}
            >
              <svg
                height="25px"
                viewBox="0 0 25 25"
                width="25px"
                x="0px"
                y="0px"
              >
                <path d="M12.5,4.5c-4.4,0-8,3.6-8,8c0,4.4,3.6,8,8,8c4.4,0,8-3.6,8-8C20.5,8.1,16.9,4.5,12.5,4.5z M18.1,11.4H16 c-0.1-1.4-0.4-2.7-1-4C16.6,8.1,17.7,9.6,18.1,11.4z M11.3,11.4c0.1-1.4,0.5-2.7,1.2-4c0.6,1.3,1,2.6,1.2,4H11.3z M13.7,13.6 c-0.1,1.5-0.5,2.9-1.2,4.2c-0.7-1.3-1.1-2.8-1.2-4.2H13.7z M10,7.4c-0.5,1.3-0.8,2.6-1,4H6.9C7.3,9.6,8.4,8.2,10,7.4z M6.9,13.6H9 c0.1,1.3,0.4,2.6,0.9,3.9C8.4,16.8,7.2,15.3,6.9,13.6z M15.1,17.6c0.5-1.3,0.8-2.6,0.9-3.9h2.1C17.7,15.4,16.6,16.8,15.1,17.6z"></path>
              </svg>
            </button>
            <button
              className="fill-[#c8aa6e] hover:fill-[#f0e6d2] curson-pointer"
              onPointerOver={(e) => {
                play_ui_button();
              }}
              onClick={() => openInNewTab("https://guildfi.com/")}
            >
              <svg
                height="18px"
                viewBox="0 0 23 22"
                width="20px"
                x="0px"
                y="0px"
              >
                <path d="M4,0v18h19V0H4z M21,11l-3-4h-1l-3,4V1h7V11z M21,20v2H0V2h2v18H21z"></path>
              </svg>
            </button>
          </div>
          <div className="flex md:flex-col items-center self-center gap-5 md:gap-8 mx-3 md:mx-0 my-0 md:my-3">
            <button
              className="fill-[#c8aa6e] hover:fill-[#f0e6d2] curson-pointer"
              onPointerOver={(e) => {
                play_ui_button();
              }}
              onClick={() => {
                play_ui_generic_button_click();
                handleMuteButton();
              }}
            >
              {!isMute ? (
                <svg
                  height="25px"
                  viewBox="0 0 25 25"
                  width="25px"
                  x="0px"
                  y="0px"
                >
                  <path d="M8.5,10.1H6.1v4.8h2.4l2.4,2.4h1.6V7.7h-1.6L8.5,10.1z M14.1,14.9h1.6v-4.8h-1.6V14.9z M17.3,8.5v8h1.6v-8 H17.3z"></path>
                </svg>
              ) : (
                <svg
                  height="25px"
                  viewBox="0 0 25 25"
                  width="25px"
                  x="0px"
                  y="0px"
                >
                  <path d="M8.3,10H7.5v5.1H10l2.5,2.6h1.7v-0.9l-5.8-6V10z M14.2,11.3V7.4h-1.7l-1.1,1.1L8.7,5.7L7.5,6.9l2.8,2.8L10,10 l4.2,4.3v-0.5l2.2,2.2l1.2-1.2L14.2,11.3z"></path>
                </svg>
              )}
            </button>
            {!account ? (
              <button
                className="fill-[#c8aa6e] hover:fill-[#f0e6d2]"
                onPointerOver={(e) => {
                  play_ui_button();
                }}
                onClick={() => {
                  play_ui_generic_button_click();
                  connectWallet();
                }}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20.762 7.325V5.021A2.036 2.036 0 0 0 18.724 3H4.458c-1.13 0-2.038.91-2.038 2.021v14.147c0 1.112.907 2.021 2.038 2.021h14.266c1.121 0 2.038-.909 2.038-2.02v-2.305c.602-.353 1.02-.99 1.02-1.738V9.063c0-.748-.418-1.384-1.02-1.738zm-1.018 1.738v6.063H12.61V9.063h7.134zM4.458 19.168V5.021h14.266v2.021H12.61c-1.12 0-2.038.91-2.038 2.021v6.063c0 1.112.917 2.021 2.038 2.021h6.114v2.021H4.458z"></path>
                  <path d="M15.667 13.61c.845 0 1.529-.678 1.529-1.515 0-.837-.684-1.516-1.529-1.516-.844 0-1.528.679-1.528 1.516s.684 1.515 1.528 1.515z"></path>
                </svg>
              </button>
            ) : (
              <button
                className="fill-[#c8aa6e] hover:fill-[#f0e6d2]"
                onPointerOver={(e) => {
                  play_ui_button();
                }}
                onClick={() => {
                  play_ui_generic_button_click();
                }}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20.762 7.325V5.021A2.036 2.036 0 0 0 18.724 3H4.458c-1.13 0-2.038.91-2.038 2.021v14.147c0 1.112.907 2.021 2.038 2.021h14.266c1.121 0 2.038-.909 2.038-2.02v-2.305c.602-.353 1.02-.99 1.02-1.738V9.063c0-.748-.418-1.384-1.02-1.738zm-1.018 1.738v6.063H12.61V9.063h7.134zM4.458 19.168V5.021h14.266v2.021H12.61c-1.12 0-2.038.91-2.038 2.021v6.063c0 1.112.917 2.021 2.038 2.021h6.114v2.021H4.458z"></path>
                  <path d="M15.667 13.61c.845 0 1.529-.678 1.529-1.515 0-.837-.684-1.516-1.529-1.516-.844 0-1.528.679-1.528 1.516s.684 1.515 1.528 1.515z"></path>
                </svg>
              </button>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};
