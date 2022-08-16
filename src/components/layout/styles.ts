import styled from "styled-components";
import image from "../../assets/bg-white-1.png";

export const StyledLayout = styled.div`
  background: url(${image}), transparent;

  width: 100%;
  min-height: 76vh;
  position: relative;

  .rgba {
    background: rgba(255, 255, 255, 0.6);
    width: 100%;
    height: 100%;
    position: absolute;
  }
`;
