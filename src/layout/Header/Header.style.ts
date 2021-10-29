import styled from "styled-components";
import LayoutContainerCss from "../LayoutContainer/LayoutContainer.style";

export const Container = styled.header`
  position: fixed;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
  z-index: 100;
`;

export const Content = styled.div`
  ${LayoutContainerCss};

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding-top: 15px;
  padding-bottom: 15px;
`;
