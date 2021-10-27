type StringOrNull = string | null;

export type NewsAPIResponse = {
  status: string;
  code?: string;
  message?: string;
  articles?: Array<Article>;
};

export type Article = {
  source: {
    id: StringOrNull;
    name: string;
  };
  author: StringOrNull;
  title: string;
  description: string;
  url: string;
  urlToImage: StringOrNull;
  publishedAt: StringOrNull;
  content: StringOrNull;
};
