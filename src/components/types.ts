type StringOrNull = string | null;

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
