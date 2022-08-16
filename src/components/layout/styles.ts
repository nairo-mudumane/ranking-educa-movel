import styled from "styled-components";
import image from "../../assets/bg-white-1.png";

export const StyledLayout = styled.div`
  background: url(${image}), transparent;

  width: 100%;
  min-height: 80vh;
  position: relative;

  .rgba {
    background: rgba(255, 255, 255, 0.8);
    width: 100%;
    height: 100%;
    position: absolute;
  }
`;
