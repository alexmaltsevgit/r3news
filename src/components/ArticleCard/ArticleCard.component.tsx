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

type ArticleCardProps = {
  article: Article;
};

const ArticleCard = ({ article }: ArticleCardProps) => {
  const {
    source: { name },
    title,
    description,
    url,
    urlToImage,
  } = article;

  const maxSymbolCount = 120;

  return (
    <Container href={url ?? ""}>
      <ImageWrapper>
        <Image
          lazy-load
          src={
            urlToImage ??
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
  );
};

export default ArticleCard;
