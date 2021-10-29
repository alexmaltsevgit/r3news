import React from "react";
import styled from "styled-components";
import LayoutContainerCss from "../LayoutContainer/LayoutContainer.style";
import { Title } from "./SignUpMain.style";
import SignUpForm from "../../components/SignUpForm/SignUpForm.component";

const Container = styled.main`
  ${LayoutContainerCss}
`;

const SignUpMain = () => {
  return (
    <Container>
      <Title>Регистрация</Title>
      <SignUpForm />
    </Container>
  );
};

export default SignUpMain;
