import React from "react";
import { IChildren } from "../../types";
import { ICarouselContext, ICarouselContextData } from "./types";

const defaultValues: ICarouselContextData = {
  activeSlide: 0,
  interval: 1000,
};

export const CarouselContext = React.createContext<ICarouselContext>({
  ...defaultValues,
} as ICarouselContext);

export function CarouselProvider(props: IChildren) {
  const [activeSlide, setActiveSlide] = React.useState(0);
  const [interval, setInterval] = React.useState(1000);

  function updateActiveSlide(step: number) {
    setActiveSlide(step);
  }

  function updateInterval(newInterval: number) {
    setInterval(newInterval);
  }

  return (
    <CarouselContext.Provider
      value={{ interval, activeSlide, updateActiveSlide, updateInterval }}
    >
      {props.children}
    </CarouselContext.Provider>
  );
}
