import React from "react";
import styled from "styled-components";
import NavigationBar from "../../shared/NavigationBar/NavigationBar.component";
import HomeLogo from "../../shared/HomeLogo/HomeLogo.component";
import LayoutContainerCss from "../LayoutContainer/LayoutContainer.style";

const Container = styled.header`
  ${LayoutContainerCss}
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 15px 0;
`;

const Header = () => {
  return (
    <Container>
      <Content>
        <HomeLogo />
        <NavigationBar />
      </Content>
    </Container>
  );
};

export default Header;
