export const getSlicedArticleDescription = (
  description: string,
  maxSymbolCount: number
) => {
  while (description.charAt(maxSymbolCount) !== " " && maxSymbolCount > 0) {
    maxSymbolCount--;
  }

  return description.substring(0, maxSymbolCount);
};

export const beautifyDescription = (
  description: string,
  maxSymbolCount: number
) => {
  return getSlicedArticleDescription(description, maxSymbolCount) + "...";
};
