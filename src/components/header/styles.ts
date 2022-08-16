import styled from "styled-components";
import { globalColors } from "../../global";

export const StyledHeader = styled.div`
  background-color: ${globalColors.gray1};
  color: ${globalColors.white1};
  width: 100%;

  .header {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-content: center;
    justify-content: space-between;
    align-items: center;

    padding: 1.2rem 0;
  }

  .logo {
    width: 4rem;
  }

  .title {
    font-weight: 500;
    font-size: 3em;
  }
`;
