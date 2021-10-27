import styled from "styled-components";
import LayoutContainerCss from "../LayoutContainer/LayoutContainer.style";

export const Container = styled.main`
  ${LayoutContainerCss}
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 15px;
  grid-row-gap: 20px;
`;
