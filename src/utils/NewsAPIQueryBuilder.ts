export enum Endpoints {
  everything = "everything",
  topHeadlines = "top-headlines",
}

export enum NewsAPIQueryParameterKeys {
  keywordsEverywhere = "q",
  keywordTitle = "qInTitle",
  language = "language",
  pageSize = "pageSize",
  page = "page",
}

export class NewsAPIQueryParameter {
  public readonly key: NewsAPIQueryParameterKeys;
  public value: string;

  constructor(key: NewsAPIQueryParameterKeys, value: string) {
    this.key = key;
    this.value = value;
  }

  public stringify = () => `${this.key}=${this.value}`;
}

export class NewsAPIQueryBuilder {
  private apiKey: string = process.env.REACT_APP_NEWs_API_KEY as string;
  private baseURL: string = "https://newsapi.org/v2";
  private endpoint: Endpoints = Endpoints.everything;

  private queryParameters: Array<NewsAPIQueryParameter> = [];

  private stringifyQueryParameters = () => {
    return this.queryParameters.reduce((accum, queryParameter, index) => {
      const isLastElement = index === this.queryParameters.length - 1;
      const delimeter = isLastElement ? "" : "&";
      console.log(queryParameter.stringify());
      return accum + queryParameter.stringify() + delimeter;
    }, "");
  };

  public setQueryParameter = (queryParameter: NewsAPIQueryParameter) => {
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

  public setQueryParameters = (
    queryParameters: Array<NewsAPIQueryParameter>
  ) => {
    this.queryParameters = queryParameters;
    return this;
  };

  public removeQueryParameter = (key: NewsAPIQueryParameterKeys) => {
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
