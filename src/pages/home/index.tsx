import React from "react";
import { Container } from "@mui/material";
import { Head, Layout } from "../../components";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Ranking, Welcome } from "./content";
import { CarouselItem, StyledHome } from "./styles";

export function Home() {
  return (
    <React.Fragment>
      <Head />

      <Layout>
        <Container>
          <StyledHome>
            <Carousel>
              <CarouselItem>
                <Ranking />
              </CarouselItem>
              <CarouselItem>
                <Welcome />
              </CarouselItem>
            </Carousel>
          </StyledHome>
        </Container>
      </Layout>
    </React.Fragment>
  );
}
