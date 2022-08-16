import React from "react";
import { StyledTitle } from "./styles";
import { ITitleProps } from "./types";

export function Title(props: ITitleProps) {
  return (
    <StyledTitle>
      <h2 className="title">{props.text}</h2>
    </StyledTitle>
  );
}
