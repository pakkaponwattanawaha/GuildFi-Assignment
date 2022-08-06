import React, { useEffect } from "react";
import useSound from "use-sound";
export const useAudioPlayer = () => {
  const play_trans_intro = () => {
    const sfx_hover_region = new Audio("sfx/sfx-trans-intro-01.mp3");
    sfx_hover_region.play();
  };
  const play_trans_zoom = () => {
    const sfx_hover_region = new Audio("sfx/sfx-trans-zoom-toplevel-01.mp3");
    sfx_hover_region.play();
  };
  const play_ui_button = () => {
    const sfx_hover_region = new Audio(
      "sfx/sfx-ui-buttons-circlegold-hover-01.mp3"
    );
    sfx_hover_region.play();
  };
  const play_ui_welcome_click = () => {
    const sfx_hover_region = new Audio("sfx/sfx-ui-click-firstclick-01.mp3");
    sfx_hover_region.play();
  };
  const play_ui_region_click = () => {
    const sfx_hover_region = new Audio("sfx/sfx-ui-click-region-01.mp3");
    sfx_hover_region.play();
  };
  const play_hover_region = () => {
    const sfx_hover_region = new Audio("sfx/sfx-ui-hover-regions-01.mp3");
    sfx_hover_region.play();
  };
  const play_sidedrawer_close = () => {
    const sfx_hover_region = new Audio("sfx/sfx-ui-sidedrawer-close-01.mp3");
    sfx_hover_region.play();
  };
  const play_sidedrawer_open = () => {
    const sfx_hover_region = new Audio("sfx/sfx-ui-sidedrawer-open-01.mp3");
    sfx_hover_region.play();
  };
  return {
    play_trans_intro,
    play_trans_zoom,
    play_ui_button,
    play_ui_welcome_click,
    play_ui_region_click,
    play_hover_region,
    play_sidedrawer_close,
    play_sidedrawer_open,
  };
};
