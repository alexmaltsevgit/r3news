import React from "react";
import { Container, Content } from "./HomeMain.styles";
import { queryParameters } from "./HomeMain.utils";
import ArticleCard from "../../components/ArticleCard/ArticleCard.component";
import useArticles from "../../hooks/useArticles";

const HomeMain = () => {
  const articles = useArticles(queryParameters);

  return (
    <Container>
      <Content>
        {articles.map((article) => (
          <ArticleCard key={article.url} article={article} />
        ))}
      </Content>
    </Container>
  );
};

export default HomeMain;
