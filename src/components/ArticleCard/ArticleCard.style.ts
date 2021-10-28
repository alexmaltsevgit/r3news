import styled from "styled-components";
import { darken } from "polished";

export const Container = styled.a`
  display: flex;
  flex-direction: column;

  padding: 10px 15px 20px;
  background-color: ${({ theme }) => theme.colors.primary};

  border: 2px solid transparent;
  border-radius: 5px;

  transition: border-color 0.2s linear, background-color 0.2s linear;

  &:hover {
    border-color: ${({ theme }) => theme.colors.blue};
    background-color: ${({ theme }) => darken(0.58, theme.colors.blue)};
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
  font-size: 1.5rem;
  font-weight: 600;
  letter-spacing: 1px;
  line-height: 1.1em;
  margin-bottom: ${({ theme }) => (theme.small ? "0.5em" : "1.5em")};
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
