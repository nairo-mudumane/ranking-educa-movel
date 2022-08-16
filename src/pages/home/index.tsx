import React from "react";
import { Container } from "@mui/material";
import { Head, Layout } from "../../components";
import { Carousel, CarouselProps } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Ranking, Welcome } from "./content";
import { CarouselItem, StyledHome } from "./styles";
import { useCarousel } from "../../hooks";

export function Home() {
  const carousel = useCarousel();

  const carouselConfig = {
    showThumbs: false,
    interval: carousel.interval,
    infiniteLoop: true,
    showIndicators: false,
    autoPlay: true,
  } as CarouselProps;

  return (
    <React.Fragment>
      <Head />

      <Layout>
        <Container>
          <StyledHome>
            <Carousel {...carouselConfig}>
              <CarouselItem>
                <Welcome />
              </CarouselItem>

              <CarouselItem>
                <Ranking />
              </CarouselItem>
            </Carousel>
          </StyledHome>
        </Container>
      </Layout>
    </React.Fragment>
  );
}
