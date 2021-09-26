import React, { useEffect, useState } from "react";
import styled from "styled-components";
import LayoutContainerCss from "../LayoutContainer/LayoutContainer.style";
import { NewsAPIQueryBuilder } from "../../../utils/NewsAPIQueryBuilder";
import { queryParameters } from "./HomeMain.utils";
import { Article } from "../../types";
import ArticleCard from "../../shared/ArticleCard/ArticleCard.component";
import JSON_EXAMPLE from "../../../json-example";

const Container = styled.main`
  ${LayoutContainerCss}
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 15px;
  grid-row-gap: 20px;
`;

const HomeMain = () => {
  const [news, setNews] = useState<Array<Article>>([]);

  useEffect(() => {
    const fetchNews = async (url: string) => {
      const response = await fetch(url);
      const data = await response.json();
      setNews(data["articles"]);
    };

    const fetchFake = () => {
      // @ts-ignore
      setNews(JSON_EXAMPLE.articles);
    };

    const queryBuilder = new NewsAPIQueryBuilder();
    queryBuilder.setQueryParameters(queryParameters);
    const url = queryBuilder.getUrl();

    try {
      //fetchNews(url);
      fetchFake();
    } catch (e) {
      console.error(e);
    }
  }, []);

  return (
    <Container>
      <Content>
        {news.map((article) => (
          <ArticleCard key={article.url} article={article} />
        ))}
      </Content>
    </Container>
  );
};

export default HomeMain;
