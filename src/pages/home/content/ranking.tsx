import Table from "@mui/material/Table";
import {
  Alert,
  Box,
  CircularProgress,
  Paper,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
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
          <CustomContainer bg>
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
          <CustomContainer bg>
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
          <CustomContainer bg>
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
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell align="left">#</TableCell>
                  <TableCell align="left">Nome</TableCell>
                  <TableCell align="left">Pontuacao</TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {ranking.slice(0, 11).map((user, index) => (
                  <TableRow
                    key={user.uid}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {index + 1}
                    </TableCell>
                    <TableCell align="left">{user.name}</TableCell>
                    <TableCell align="left">{user.score}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </CustomContainer>
      </Box>
    </StyledRanking>
  );
}
