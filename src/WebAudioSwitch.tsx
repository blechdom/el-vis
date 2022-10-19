import React, { FC } from "react";
import "./webaudio-controls/webaudio-controls-module.js";
import { WebAudioSwitchProps } from "./WebAudioSwitch.types";

export const WebAudioSwitch: FC<WebAudioSwitchProps> = (props) => {
  return <webaudio-switch {...props}></webaudio-switch>;
};
