import React from "react";
import { Container, Content } from "./HomeMain.styles";
import { queryParameters } from "./HomeMain.utils";
import ArticleCard from "../../components/ArticleCard/ArticleCard.component";
import useArticles from "../../hooks/useArticles";
import Loadable from "../Loadable/Loadable.component";

const HomeMain = () => {
  const articles = useArticles(queryParameters);

  return (
    <Container>
      <Loadable isLoading={true}>
        <Content>
          {articles?.map((article) => (
            <ArticleCard key={article.url} article={article} />
          ))}
        </Content>
      </Loadable>
    </Container>
  );
};

export default HomeMain;
