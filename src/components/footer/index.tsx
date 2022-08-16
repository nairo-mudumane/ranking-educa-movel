import { Box, Container, Typography } from "@mui/material";
import { StyledFooter } from "./styles";
import logo from "../../assets/logo-cade.png";

export function Footer() {
  return (
    <StyledFooter>
      <Container>
        <footer className="footer">
          <Box className="logo">
            <img src={logo} srcSet={logo} alt="logo" />
          </Box>

          <Typography variant="h3" className="copyright">
            &copy; Educa Moçambique, 2022
          </Typography>
        </footer>
      </Container>
    </StyledFooter>
  );
}
