import NewsAPI from "../../../utils/NewsAPI";

const createQueryParameter = (key: NewsAPI.Keys, value: string) =>
  new NewsAPI.QueryParameter(key, value);

export const queryParameters = [
  createQueryParameter(NewsAPI.Keys.keywordsEverywhere, "cars"),
  createQueryParameter(NewsAPI.Keys.language, "ru"),
];
