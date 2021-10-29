import styled from "styled-components";
import { mix } from "polished";
import SignInLogos from "../SignInLogos/SignInLogos.component";

export const Form = styled.form`
  width: 100%;
  max-width: 500px;
  margin-top: 50px;

  & > label {
    display: block;
    margin-top: 30px;

    > span {
      font-size: 1.5rem;
    }

    > input {
      margin-top: 15px;
      padding: 10px 20px;
      font-size: 1.2rem;
      line-height: 1em;
    }

    > input[type="submit"] {
      margin-top: 0;
      padding: 20px;
      background-color: ${({ theme }) => theme.colors.secondary};
      color: ${({ theme }) => theme.colors.primary};
      border-color: transparent;
      font-size: 1.3rem;
      text-transform: uppercase;
      letter-spacing: 2px;

      &:hover {
        background-color: ${({ theme }) =>
          mix(0.8, theme.colors.secondary, theme.colors.blue)};
      }
    }
  }
`;

export const StyledSignInLogos = styled(SignInLogos)`
  margin-top: 30px;
`;
