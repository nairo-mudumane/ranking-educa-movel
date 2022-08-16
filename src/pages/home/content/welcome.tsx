import { StyledWelcome } from "../styles";
import logo from "../../../assets/logo.png";
import { Box } from "@mui/material";

export function Welcome() {
  return (
    <StyledWelcome>
      <Box className="logo">
        <img src={logo} srcSet={logo} alt="logo" />
      </Box>
    </StyledWelcome>
  );
}
