import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HomeLogoLink = styled(Link)`
  font-size: 24px;
`;

const HomeLogo = () => {
  return <HomeLogoLink to={"/"}>Home</HomeLogoLink>;
};

export default HomeLogo;
