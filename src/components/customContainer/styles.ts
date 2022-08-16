import styled from "styled-components";
import { globalColors } from "../../global";
import { ICustomContainerStyles } from "./types";

export const StyledCustomContainer = styled.div<ICustomContainerStyles>`
  background-color: ${(props) =>
    props.bg ? globalColors.white1 : "transparent"};

  box-shadow: 6px 2px 12px rgba(0, 0, 0, 0.6);
  border-radius: 6px;

  padding: 0.5rem 1rem;
  margin: 0.5rem 0;
  min-height: 64vh;
`;
