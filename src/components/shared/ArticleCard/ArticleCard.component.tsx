import React, { FC } from "react";
import { Article } from "../../types";
import {
  Container,
  ImageWrapper,
  Image,
  Footer,
  Title,
  Description,
} from "./ArticleCard.style";
import { beautifyDescription } from "./ArticleCard.utils";

type ArticleCardProps = {
  article: Article;
};

const ArticleCard: FC<ArticleCardProps> = ({ article }: ArticleCardProps) => {
  const {
    source: { name },
    title,
    description,
    url,
    urlToImage,
  } = article;

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
      <Description>{beautifyDescription(description, 120)}</Description>
      <Footer>{name}</Footer>
    </Container>
  );
};

export default ArticleCard;
