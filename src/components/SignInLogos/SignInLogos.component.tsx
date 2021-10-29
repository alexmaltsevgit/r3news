import { useSelector } from "react-redux";
import { AppState } from "../../types/AppState";
import { ReactComponent as Google } from "../../assets/images/google.svg";
import React from "react";
import { Container } from "./SignInLogos.style";
import { signInWithGoogle } from "../../firebase";

type SignInLogosProps = {
  className?: string;
};

const SignInLogos = ({ className }: SignInLogosProps) => {
  const theme = useSelector((state: AppState) => state.theme);

  return (
    <Container className={className}>
      <Google fill={theme.colors.secondary} onClick={signInWithGoogle} />
    </Container>
  );
};

export default SignInLogos;
