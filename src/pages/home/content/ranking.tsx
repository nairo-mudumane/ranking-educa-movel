import { Alert, Box, CircularProgress, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { CustomContainer, Title } from "../../../components";
import { getRanking } from "../../../services";
import { StyledRanking } from "../styles";

export function Ranking() {
  const {
    data: ranking,
    isLoading: isLoadingRanking,
    isError: isErrorRanking,
  } = useQuery(["ranking"], getRanking, {
    refetchInterval: 2000,
    staleTime: 2000,
  });

  if (isLoadingRanking) {
    return (
      <StyledRanking>
        <Box className="heading">
          <Title text="Aguarde..." />
        </Box>

        <Box className="content">
          <CustomContainer>
            <Box className="isLoading">
              <CircularProgress color="inherit" />
            </Box>
          </CustomContainer>
        </Box>
      </StyledRanking>
    );
  }

  if (isErrorRanking) {
    return (
      <StyledRanking>
        <Box className="content">
          <Alert severity="error">
            <Typography variant="body1">
              Failed to fetch data. DATA: ERR26DX
            </Typography>
          </Alert>
        </Box>
      </StyledRanking>
    );
  }

  if (!ranking) {
    return (
      <StyledRanking>
        <Box className="heading">
          <Title text="Top 10 Quiz Educa Móvel" />
        </Box>

        <Box className="content">
          <CustomContainer>
            <Box className="isLoading">
              <Typography variant="h4" className="error-msg">
                Nenhum usuário encontrado!
              </Typography>
            </Box>
          </CustomContainer>
        </Box>
      </StyledRanking>
    );
  }

  if (ranking.length === 0) {
    return (
      <StyledRanking>
        <Box className="heading">
          <Title text="Top 10 Quiz Educa Móvel" />
        </Box>

        <Box className="content">
          <CustomContainer>
            <Box className="isLoading">
              <Typography variant="h4" className="error-msg">
                Sem usuários hoje!
              </Typography>
            </Box>
          </CustomContainer>
        </Box>
      </StyledRanking>
    );
  }

  return (
    <StyledRanking>
      <Box className="heading">
        <Title text="Top 10 Quiz Educa Móvel" />
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
