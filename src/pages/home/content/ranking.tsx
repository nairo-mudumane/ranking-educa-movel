import { Box } from "@mui/material";
import { CustomContainer, Title } from "../../../components";
import { StyledRanking } from "../styles";

export function Ranking() {
  return (
    <StyledRanking>
      <Box className="heading">
        <Title text="Concurso" />
      </Box>

      <Box className="content">
        <CustomContainer>
          <p>
            Nulla consectetur culpa velit eiusmod nulla qui eu esse laborum esse
            ut. Consequat sit ea occaecat labore nostrud dolore et eu. Consequat
            excepteur deserunt esse enim aliquip sit officia nulla et
            exercitation fugiat magna aliqua eiusmod.
          </p>
        </CustomContainer>
      </Box>
    </StyledRanking>
  );
}
