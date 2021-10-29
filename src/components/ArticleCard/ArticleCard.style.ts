import styled from "styled-components";
import { darken, mix, readableColor } from "polished";

export const Container = styled.a`
  display: flex;
  flex-direction: column;

  padding: 10px 15px 20px;
  background-color: ${({ theme }) =>
    mix(0.97, theme.colors.primary, theme.colors.secondary)};

  border: 2px solid transparent;
  border-radius: 5px;

  transition: border-color 0.2s linear, background-color 0.2s linear;

  user-select: none;

  height: ${({ theme }) => (theme.small ? "350px" : "500px")};

  &:hover {
    border-color: ${({ theme }) => theme.colors.blue};
    // yeah that's cringe
    background-color: ${({ theme }) =>
      readableColor(
        theme.colors.primary,
        mix(0.95, theme.colors.primary, theme.colors.blue),
        darken(0.58, theme.colors.blue),
        false
      )};
  }
`;

export const ImageWrapper = styled.div`
  height: ${({ theme }) => (theme.small ? "200px" : "300px")};
  margin-bottom: 1em;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const Title = styled.h3`
  letter-spacing: 1px;
  line-height: 1.1em;
  margin-bottom: 1em;
`;

export const Description = styled.p`
  display: ${({ theme }) => (theme.small ? "none" : "block")};
  margin-bottom: 1.5em;
`;

export const Footer = styled.div`
  flex: 1;
  display: flex;
  align-items: flex-end;
`;
