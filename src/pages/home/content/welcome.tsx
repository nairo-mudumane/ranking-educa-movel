import React from "react";
import { StyledWelcome } from "../styles";
import logo from "../../../assets/logo.png";
import { Box } from "@mui/material";
import { useCarousel } from "../../../hooks";

export function Welcome() {
  const carousel = useCarousel();

  React.useEffect(() => {
    carousel.updateInterval(100);
  }, []);

  return (
    <StyledWelcome>
      <Box className="logo">
        <img src={logo} srcSet={logo} alt="logo" />
      </Box>
    </StyledWelcome>
  );
}
