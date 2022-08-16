import { StyledCustomContainer } from "./styles";
import { ICustomContainerProps } from "./types";

export function CustomContainer(props: ICustomContainerProps) {
  return (
    <StyledCustomContainer bg={props.bg}>
      {props.children}
    </StyledCustomContainer>
  );
}
