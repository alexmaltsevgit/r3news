import { createGlobalStyle } from "styled-components";
import ThemeScheme from "./themes/scheme";

type GlobalStyleProps = {
  theme: ThemeScheme;
};

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    transition: background-color .2s linear;
  }
  
  body {
    background-color: ${({ theme }: GlobalStyleProps) => theme.colors.primary};
    color: ${({ theme }: GlobalStyleProps) => theme.colors.secondary};
  }
  
  .switch {
    svg {
      width: 70%;
      height: 70%;
      margin: auto;
    }
    
    .react-switch-bg > div {
      display: flex;
    }
  }
`;
