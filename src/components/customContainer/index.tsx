import { StyledCustomContainer } from "./styles";
import { ICustomContainerProps } from "./types";

export function CustomContainer(props: ICustomContainerProps) {
  const defaultStylesSettings = {
    bg: true,
  };

  return (
    <StyledCustomContainer {...defaultStylesSettings}>
      {props.children}
    </StyledCustomContainer>
  );
}
