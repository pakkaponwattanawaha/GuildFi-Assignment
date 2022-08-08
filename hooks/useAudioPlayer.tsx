import React, { useEffect } from "react";
import useSound from "use-sound";
export const useAudioPlayer = () => {
  const play_trans_intro = () => {
    const audio = new Audio("sfx/sfx-trans-intro-01.mp3");
    audio.play();
  };
  const play_trans_zoom = () => {
    const audio = new Audio("sfx/sfx-trans-zoom-toplevel-01.mp3");
    audio.play();
  };
  const play_ui_button = () => {
    const audio = new Audio("sfx/sfx-ui-buttons-circlegold-hover-01.mp3");
    audio.play();
  };
  const play_ui_generic_button_click = () => {
    const audio = new Audio("sfx/sfx-ui-buttons-generic-click-01.mp3");
    audio.play();
  };
  const play_ui_welcome_click = () => {
    const audio = new Audio("sfx/sfx-ui-click-firstclick-01.mp3");
    audio.play();
  };
  const play_ui_region_click = () => {
    const audio = new Audio("sfx/sfx-ui-click-region-01.mp3");
    audio.play();
  };
  const play_hover_region = () => {
    const audio = new Audio("sfx/sfx-ui-hover-regions-01.mp3");
    audio.play();
  };
  const play_sidedrawer_close = () => {
    const audio = new Audio("sfx/sfx-ui-sidedrawer-close-01.mp3");
    audio.play();
  };
  const play_sidedrawer_open = () => {
    const audio = new Audio("sfx/sfx-ui-sidedrawer-open-01.mp3");
    audio.play();
  };
  return {
    play_trans_intro,
    play_trans_zoom,
    play_ui_button,
    play_ui_generic_button_click,
    play_ui_welcome_click,
    play_ui_region_click,
    play_hover_region,
    play_sidedrawer_close,
    play_sidedrawer_open,
  };
};
