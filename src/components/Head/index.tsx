import React from "react";
import { IHeadProps } from "./types";

export function Head(props: IHeadProps) {
  React.useEffect(() => {
    window.document.title = props.title ? props.title : "Educa Moçambique";
  }, [props.title]);

  return null;
}
