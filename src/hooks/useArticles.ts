import { useEffect, useState } from "react";
import { Article, NewsAPIResponse } from "../types/NewsAPI";
import JSON_EXAMPLE from "../json-example";
import NewsAPI from "../utils/NewsAPI";
import { Environment } from "../utils/Environment";
import QueryParameter = NewsAPI.QueryParameter;

const useArticles = (queryParameters: Array<QueryParameter>) => {
  const [articles, setNews] = useState<Array<Article>>([]);

  const fetchArticles = async (url: string) => {
    try {
      const response = await fetch(url);
      const data: NewsAPIResponse = await response.json();
      const articles = data.articles ?? [];
      setNews(articles);
    } catch (e) {
      console.error(e);
    }
  };

  const fetchFake = () => {
    // @ts-ignore
    setNews(JSON_EXAMPLE.articles);
  };

  useEffect(() => {
    const queryBuilder = new NewsAPI.QueryBuilder();
    queryBuilder.setQueryParameters(queryParameters);
    const url = queryBuilder.getUrl();

    Environment.isDebug() ? fetchFake() : fetchArticles(url);
  }, [queryParameters]);

  return articles;
};

export default useArticles;
