import React from "react";
import styled from "styled-components";
import NavigationBar from "../../components/NavigationBar/NavigationBar.component";
import HomeLogo from "../../components/HomeLogo/HomeLogo.component";
import LayoutContainerCss from "../LayoutContainer/LayoutContainer.style";
import Search from "../../components/Search/Search.component";
import ThemeSwitch from "../../components/ThemeSwitch/ThemeSwitch.component";

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
        <Search />
        <ThemeSwitch />
        <NavigationBar />
      </Content>
    </Container>
  );
};

export default Header;
