import React from "react";
import {
  Container,
  ImageWrapper,
  Image,
  Footer,
  Title,
  Description,
} from "./ArticleCard.style";
import { beautifyDescription } from "./ArticleCard.utils";
import { Article } from "../../types/NewsAPI";
import { ThemeProvider, useTheme } from "styled-components";

type ArticleCardProps = {
  article: Article;
  small?: boolean;
};

const ArticleCard = ({ article, small = false }: ArticleCardProps) => {
  useTheme();
  const {
    source: { name },
    title,
    description,
    url,
    urlToImage,
  } = article;

  const maxSymbolCount = 120;

  return (
    <ThemeProvider theme={{ small }}>
      <Container href={url || ""}>
        <ImageWrapper>
          <Image
            loading={"lazy"}
            src={
              urlToImage ||
              "https://1080motion.com/wp-content/uploads/2018/06/NoImageFound.jpg.png"
            }
          />
        </ImageWrapper>
        <Title>{title}</Title>
        <Description>
          {beautifyDescription(description, maxSymbolCount)}
        </Description>
        <Footer>{name}</Footer>
      </Container>
    </ThemeProvider>
  );
};

export default ArticleCard;
