import { Box } from "@mui/material";
import { IChildren } from "../../types";
import { StyledLayout } from "./styles";

export function Layout(props: IChildren) {
  return (
    <StyledLayout>
      <Box className="rgba">{props.children}</Box>
    </StyledLayout>
  );
}
