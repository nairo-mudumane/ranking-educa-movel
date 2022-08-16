import React from "react";
import { Container } from "@mui/material";
import { Head, Layout } from "../../components";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Welcome } from "./content";
import { CarouselItem } from "./styles";

export function Home() {
  return (
    <React.Fragment>
      <Head />
      <Layout>
        <Container>
          <Carousel>
            <CarouselItem>
              <Welcome />
            </CarouselItem>
            <CarouselItem>
              <p>sdlfkds</p>
            </CarouselItem>
          </Carousel>
        </Container>
      </Layout>
    </React.Fragment>
  );
}
