import styled from "styled-components";
import LayoutContainerCss from "../LayoutContainer/LayoutContainer.style";

export const Container = styled.main`
  ${LayoutContainerCss};
  flex: 1;
  display: flex;
  flex-direction: column;
  padding-top: 100px;
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: minmax(400px, auto);
  grid-column-gap: 15px;
  grid-row-gap: 20px;

  margin: 0 -15px;
`;
