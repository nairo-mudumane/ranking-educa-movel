import styled from "styled-components";

export const StyledHome = styled.div`
  .heading {
    margin: 0.5rem 0;
  }

  .content {
    margin: 0.5rem 0;
    margin-top: 2rem;
  }
`;

export const CarouselItem = styled.main`
  width: 100%;
  min-height: 64vh;
  margin: 1rem 0;

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

export const StyledRanking = styled.div``;
