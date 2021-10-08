import { NewsAPI } from "../../../utils/NewsAPI.query";

const createQueryParameter = (key: NewsAPI.QueryParameterKeys, value: string) =>
  new NewsAPI.QueryParameter(key, value);

export const queryParameters = [
  createQueryParameter(NewsAPI.QueryParameterKeys.keywordsEverywhere, "cars"),
  createQueryParameter(NewsAPI.QueryParameterKeys.language, "ru"),
];
