import React from "react";
import { IHeadProps } from "./types";

export function Head(props: IHeadProps) {
  React.useEffect(() => {
    window.document.title = props.title ? props.title : "Educa Móvel";
  }, [props.title]);

  return null;
}
