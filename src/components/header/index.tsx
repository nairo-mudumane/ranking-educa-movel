import { Box, Typography } from "@mui/material";
import { StyledHeader } from "./styles";
import logo from "../../assets/logo-cade.png";

export function Header() {
  return (
    <StyledHeader>
      <header className="header">
        <Box className="logo">
          <img src={logo} srcSet={logo} alt="logo" />
        </Box>

        <Box className="title">
          <Typography variant="h3">Educa Moçambique</Typography>
        </Box>
      </header>
    </StyledHeader>
  );
}
