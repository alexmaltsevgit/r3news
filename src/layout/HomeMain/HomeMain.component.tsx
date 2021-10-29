import React from "react";
import { Container, Title } from "./HomeMain.style";
import ArticleGroup from "../ArticleGroup/ArticleGroup.component";

const HomeMain = () => {
  return (
    <Container>
      <Title>R3News</Title>
      <ArticleGroup />
      <ArticleGroup />
      <ArticleGroup />
      <ArticleGroup />
      <ArticleGroup />
    </Container>
  );
};

export default HomeMain;
