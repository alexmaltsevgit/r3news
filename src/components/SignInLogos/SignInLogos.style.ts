import styled from "styled-components";
import { mix } from "polished";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  column-gap: 20px;

  > * {
    cursor: pointer;
    transition: fill 0.2s linear;

    &:hover {
      fill: ${({ theme }) =>
        mix(0.7, theme.colors.secondary, theme.colors.red)};
    }
  }
`;
