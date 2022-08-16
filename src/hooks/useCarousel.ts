import React from "react";
import { CarouselContext } from "../contexts";

export function useCarousel() {
  const context = React.useContext(CarouselContext);
  return context;
}
