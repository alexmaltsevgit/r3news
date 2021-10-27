import styled from "styled-components";
import ThemeScheme from "../../themes/scheme";

type ContainerProps = {
  theme: ThemeScheme;
};

export const Container = styled.a`
  display: flex;
  flex-direction: column;

  padding: 10px 15px;
  background-color: ${({ theme }: ContainerProps) => theme.colors.primary};
`;

export const ImageWrapper = styled.div`
  height: 300px;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const Title = styled.h3`
  font-size: 1.5rem;
  line-height: 1.1em;
  margin-bottom: 1.5em;
`;

export const Description = styled.p`
  margin-bottom: 1.5em;
`;

export const Footer = styled.div``;
