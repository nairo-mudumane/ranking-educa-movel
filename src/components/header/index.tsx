import { Box, Container, Typography } from "@mui/material";
import { StyledHeader } from "./styles";
import logo from "../../assets/logo-educa.png";

export function Header() {
  return (
    <StyledHeader>
      <Container>
        <header className="header">
          <Box className="logo">
            <img src={logo} srcSet={logo} alt="logo" />
          </Box>

          <Typography variant="h3" className="title">
            Educa Móvel
          </Typography>
        </header>
      </Container>
    </StyledHeader>
  );
}
