import { Environment } from "./Environment";

export namespace NewsAPI {
  export enum Endpoints {
    everything = "everything",
    topHeadlines = "top-headlines",
  }

  export enum QueryParameterKeys {
    keywordsEverywhere = "q",
    keywordTitle = "qInTitle",
    language = "language",
    pageSize = "pageSize",
    page = "page",
  }

  export class QueryParameter {
    public readonly key: QueryParameterKeys;
    public value: string;

    constructor(key: QueryParameterKeys, value: string) {
      this.key = key;
      this.value = value;
    }

    public stringify = () => `${this.key}=${this.value}`;
  }

  export class QueryBuilder {
    private apiKey: string = Environment.getNewsAPIKey();
    private baseURL: string = "https://newsapi.org/v2";
    private endpoint: Endpoints = Endpoints.everything;

    private queryParameters: Array<QueryParameter> = [];

    private stringifyQueryParameters = () => {
      return this.queryParameters.reduce((accum, queryParameter, index) => {
        const isLastElement = index === this.queryParameters.length - 1;
        const delimeter = isLastElement ? "" : "&";
        return accum + queryParameter.stringify() + delimeter;
      }, "");
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

    public removeQueryParameter = (key: QueryParameterKeys) => {
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
  }
}
