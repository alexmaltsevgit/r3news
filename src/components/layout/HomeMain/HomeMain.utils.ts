import {
  NewsAPIQueryBuilder,
  NewsAPIQueryParameter,
  NewsAPIQueryParameterKeys,
} from "../../../utils/NewsAPIQueryBuilder";
import { Article } from "../../types";

const createQueryParameter = (key: NewsAPIQueryParameterKeys, value: string) =>
  new NewsAPIQueryParameter(key, value);

export const queryParameters = [
  createQueryParameter(
    NewsAPIQueryParameterKeys.keywordsEverywhere,
    "javascript"
  ),
  createQueryParameter(NewsAPIQueryParameterKeys.language, "ru"),
];
