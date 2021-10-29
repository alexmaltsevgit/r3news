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
  
  main {
    padding-top: 150px;
  }
  
  h2 {
    font-size: 2rem;
    font-weight: 600;
  }
  
  h3 {
    font-size: 1.5rem;
    font-weight: 500;
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
