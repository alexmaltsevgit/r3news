import { Environment } from "./Environment";

namespace NewsAPI {
  export enum Endpoints {
    Everything = "Everything",
    TopHeadlines = "top-headlines",
  }

  export enum Keys {
    KeywordsEverywhere = "q",
    KeywordTitle = "qInTitle",
    Language = "Language",
    PageSize = "PageSize",
    Page = "Page",
  }

  export class QueryParameter {
    public readonly key: Keys;
    public value: string;

    constructor(key: Keys, value: string) {
      this.key = key;
      this.value = value;
    }

    public stringify = () => `${this.key}=${this.value}`;
  }

  export class QueryBuilder {
    private apiKey: string = Environment.getNewsAPIKey();
    private baseURL: string = "https://newsapi.org/v2";
    private endpoint: Endpoints = Endpoints.Everything;

    private queryParameters: Array<QueryParameter> = [];

    public setKeyword = (keyword: string) => {
      this.setQueryParameter(
        new QueryParameter(Keys.KeywordsEverywhere, keyword)
      );
    };

    public setPageSize = (pageSize: string | number) => {
      this.setQueryParameter(
        new QueryParameter(Keys.PageSize, pageSize.toString())
      );
    };

    public setPage = (page: string | number) => {
      this.setQueryParameter(new QueryParameter(Keys.Page, page.toString()));
    };

    public setQueryParameter = (queryParameter: QueryParameter) => {
      const existingQueryParameter = this.queryParameters.find(
        (currentQueryParameter) =>
          queryParameter.key === currentQueryParameter.key
      );

      if (existingQueryParameter) {
        existingQueryParameter.value = queryParameter.value;
      } else {
        this.queryParameters.push(queryParameter);
      }

      return this;
    };

    public setQueryParameters = (queryParameters: Array<QueryParameter>) => {
      this.queryParameters = queryParameters;
      return this;
    };

    public removeQueryParameter = (key: Keys) => {
      this.queryParameters = this.queryParameters.filter(
        (queryParameter) => queryParameter.key !== key
      );
      return this;
    };

    public getUrl = () => {
      const queryParameters = this.stringifyQueryParameters();
      const apiKeyQueryParameter = `apiKey=${this.apiKey}`;
      return `${this.baseURL}/${this.endpoint}?${apiKeyQueryParameter}&${queryParameters}`;
    };

    private stringifyQueryParameters = () => {
      return this.queryParameters.reduce((accum, queryParameter, index) => {
        const isLastElement = index === this.queryParameters.length - 1;
        const delimeter = isLastElement ? "" : "&";
        return accum + queryParameter.stringify() + delimeter;
      }, "");
    };
  }
}

export default NewsAPI;
