import React from "react";
import NavigationBar from "../../components/NavigationBar/NavigationBar.component";
import HomeLogo from "../../components/HomeLogo/HomeLogo.component";
import Search from "../../components/Search/Search.component";
import ThemeSwitch from "../../components/ThemeSwitch/ThemeSwitch.component";
import { Container, Content } from "./Header.style";

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
