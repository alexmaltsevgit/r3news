import { createGlobalStyle } from "styled-components";
import ThemeScheme from "./themes/scheme";

type GlobalStyleProps = {
  theme: ThemeScheme;
};

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }: GlobalStyleProps) => theme.colors.primary};
    color: ${({ theme }: GlobalStyleProps) => theme.colors.text};
  }
`;
