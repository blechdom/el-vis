import React, { FC, useMemo } from "react";
import "./webaudio-controls/webaudio-controls-module";
import { WACKnobProps } from "./WACKnob.types";

export const WACKnob: FC<WACKnobProps> = (props: WACKnobProps) => {
  const threeColors = useMemo(() => {
    return `${props.indicatorColor};${props.bodyColor};${props.highlightColor};`;
  }, [props.highlightColor, props.bodyColor, props.indicatorColor]);

  // @ts-ignore
  return <webaudio-knob colors={threeColors ?? ""} {...props}/>;
};
