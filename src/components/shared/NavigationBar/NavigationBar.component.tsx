import React from "react";
import styled from "styled-components";
import NavigationLink from "../NavigationLink/NavigationLink.component";

const Container = styled.nav`
  display: flex;
`;

const NavigationBar = () => {
  return (
    <Container>
      <NavigationLink to={"/sign-up"}>Sign Up</NavigationLink>
    </Container>
  );
};

export default NavigationBar;
