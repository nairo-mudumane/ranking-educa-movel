import styled from "styled-components";

export const StyledWelcome = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  justify-items: center;
  align-items: center;

  .logo {
    width: 20rem;
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
