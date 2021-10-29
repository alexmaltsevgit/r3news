import { createGlobalStyle } from "styled-components";
import ThemeScheme from "./themes/scheme";
import { mix, normalize } from "polished";

type GlobalStyleProps = {
  theme: ThemeScheme;
};

export const GlobalStyle = createGlobalStyle`
  ${normalize()}
  
  *,
  *::before,
  *::after {
    margin: 0;
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
    padding-top: 150px !important;
  }
  
  h1 {
    font-size: 3rem;
    font-weight: 600;
    margin: 0;
  }
  
  h2 {
    font-size: 2rem;
    font-weight: 600;
  }
  
  h3 {
    font-size: 1.5rem;
    font-weight: 500;
  }
  
  form {
    width: 100%;
    max-width: 600px;
  }
  
  input {
    width: 100%;
    
    border: 2px solid ${({ theme }) => mix(0.5, theme.colors.primary, "gray")};
    border-radius: 4px;
    
    color: #000;
    
    transition: all .2s linear;
    
    &:focus {
      outline: none;
      border: 2px solid ${({ theme }) => theme.colors.blue};
    }
  }
  
  input[type="submit"] {
    cursor: pointer;
  }
`;
