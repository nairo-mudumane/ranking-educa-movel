import styled from "styled-components";
import { globalColors } from "../../global";

export const StyledHome = styled.div`
  .heading {
    margin: 0.5rem 0;
  }

  .content {
    margin: 0.5rem 0;
    margin-top: 2rem;
  }

  .isLoading {
    color: ${globalColors.yellow1};
    min-height: 50vh;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .error-msg {
    font-weight: 400;
  }
`;

export const CarouselItem = styled.main`
  height: 70vh;
  margin: 1rem 0;
  overflow: hidden;

  position: relative;

  & > div {
    position: absolute;
    width: 100%;
    height: 100%;
  }
`;

export const StyledWelcome = styled.div`
  display: flex;
  justify-content: center;
  justify-items: center;
  align-items: center;

  .logo {
    width: 20rem;
  }
`;

export const StyledRanking = styled.div`
  width: 100%;
  height: 100%;
`;
