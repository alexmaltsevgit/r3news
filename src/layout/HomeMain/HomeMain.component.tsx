import React from "react";
import { Container } from "./HomeMain.styles";
import ArticleGroup from "../ArticleGroup/ArticleGroup.component";

const HomeMain = () => {
  return (
    <Container>
      <ArticleGroup />
      <ArticleGroup />
      <ArticleGroup />
      <ArticleGroup />
      <ArticleGroup />
    </Container>
  );
};

export default HomeMain;
