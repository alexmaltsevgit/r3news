import styled from "styled-components";
import { Swiper } from "swiper/react/swiper-react";
import { mix } from "polished";

export const Container = styled.div`
  &:not(:first-child) {
    margin-top: 100px;
  }

  padding-left: 30px;
  border-left: ${({ theme }) =>
    `3px solid ${mix(0.8, theme.colors.primary, "gray")}`};
`;

export const Content = styled.div`
  height: 350px;
`;

export const Title = styled.h2``;

export const Slider = styled(Swiper)`
  height: 100%;
  margin: 30px -15px;
`;
