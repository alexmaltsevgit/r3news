import { createGlobalStyle } from "styled-components";
import ThemeScheme from "./themes/scheme";
import { normalize } from "polished";

type GlobalStyleProps = {
  theme: ThemeScheme;
};

export const GlobalStyle = createGlobalStyle`
  ${normalize()}
  
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
  
  #root {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
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
