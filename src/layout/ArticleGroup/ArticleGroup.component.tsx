import React from "react";
import { Container, Title, Slider } from "./ArticleGroup.style";
import Loadable from "../Loadable/Loadable.component";
import useArticles from "../../hooks/useArticles";
import { queryParameters } from "../HomeMain/HomeMain.utils";
import ArticleCard from "../../components/ArticleCard/ArticleCard.component";
import { SwiperSlide } from "swiper/react/swiper-react";

const ArticleGroup = () => {
  const articles = useArticles(queryParameters);

  return (
    <Container>
      <Title>Категория</Title>
      <Loadable isLoading={false}>
        <Slider slidesPerView={3} spaceBetween={20}>
          {articles?.map((article) => (
            <SwiperSlide key={article.url}>
              <ArticleCard small={true} article={article} />
            </SwiperSlide>
          ))}
        </Slider>
      </Loadable>
    </Container>
  );
};

export default ArticleGroup;
