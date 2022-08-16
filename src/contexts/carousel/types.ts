export interface ICarouselContextData {
  activeSlide: number;
  interval: number;
}

export interface ICarouselContext extends ICarouselContextData {
  updateActiveSlide: (activeSlide: number) => void;
  updateInterval: (interval: number) => void;
}
