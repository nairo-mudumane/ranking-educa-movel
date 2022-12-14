import styled from "styled-components";
import { globalColors } from "../../global";

export const StyledFooter = styled.div`
  background-color: ${globalColors.white1};
  color: ${globalColors.gray1};
  width: 100%;

  .footer {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-content: center;
    justify-content: space-between;
    align-items: center;

    padding: 0.5rem 0;
  }

  .logo {
    width: 4.6rem;
  }

  .copyright {
    font-weight: 500;
    font-size: 1.6em;
  }

  @media only screen and (min-width: 2560px) {
    .header {
      padding: 2rem 0;
    }

    .logo {
      width: 8rem;
    }

    .copyright {
      font-size: 1.6em;
    }
  }

  @media only screen and (max-width: 768px) {
    .copyright {
      font-size: 2em;
    }
  }

  @media only screen and (max-width: 425px) {
    .logo {
      width: 4rem;
    }

    .copyright {
      font-size: 1.5em;
    }
  }

  @media only screen and (max-width: 320px) {
    .logo {
      display: none;
    }

    .copyright {
      margin: 0 auto;
    }
  }
`;
