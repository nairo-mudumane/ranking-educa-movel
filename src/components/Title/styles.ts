import styled from "styled-components";
import { globalColors } from "../../global";

export const StyledTitle = styled.div`
  background-color: ${globalColors.yellow1};
  color: ${globalColors.white1};
  border: 4px solid ${globalColors.white1};
  border-radius: 6%;

  width: max-content;
  min-width: 550px;
  margin: 0 auto;
  padding: 0.5rem 1rem;

  .title {
    font-weight: 550;
    font-size: 1.6em;
    text-align: center;
  }
`;
