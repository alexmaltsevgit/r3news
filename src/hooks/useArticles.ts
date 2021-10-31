import { useEffect, useState } from "react";
import { Article, NewsAPIResponse } from "../types/NewsAPI";
import NEWS_EXAMPLE from "../news-example";
import NewsAPI from "../utils/NewsAPI";
import QueryParameter = NewsAPI.QueryParameter;

const useArticles = (queryParameters: Array<QueryParameter>) => {
  const [articles, setNews] = useState<Array<Article> | null>(null);

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

  const fetchFake = async () => {
    await new Promise((res) => setTimeout(res, 2000));
    // @ts-ignore
    setNews(NEWS_EXAMPLE.articles);
  };

  useEffect(() => {
    const queryBuilder = new NewsAPI.QueryBuilder();
    queryBuilder.setQueryParameters(queryParameters);
    const url = queryBuilder.getUrl();

    // Environment.isDebug() ? fetchFake() : fetchArticles(url);
    fetchFake();
  }, [queryParameters]);

  return articles;
};

export default useArticles;
