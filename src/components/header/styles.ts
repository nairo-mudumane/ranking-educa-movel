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

  @media only screen and (min-width: 2560px) {
    .header {
      padding: 2rem 0;
    }

    .logo {
      width: 6rem;
    }

    .title {
      font-size: 4em;
    }
  }

  @media only screen and (max-width: 768px) {
    .title {
      font-size: 2em;
    }
  }

  @media only screen and (max-width: 425px) {
    .logo {
      width: 3rem;
    }

    .title {
      font-size: 1.5em;
    }
  }

  @media only screen and (max-width: 320px) {
    .logo {
      display: none;
    }

    .title {
      margin: 0 auto;
    }
  }
`;
