import React, { FC } from "react";
import "./webaudio-controls/webaudio-controls-module";
import { WACKnobProps } from "./WACKnob.types";

export const WACKnob: FC<WACKnobProps> = (props) => {
  return <webaudio-knob {...props}></webaudio-knob>;
};
