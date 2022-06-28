import { Link } from "react-router-dom";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { imgUrl } from "../../../constants/constant";
import "swiper/css";

const Container = styled.div`
  margin-top: 120px;
`;
const Title = styled.h3`
  font-size: 40px;
  font-weight: 700;
`;
const MovieImg = styled.div`
  height: 250px;
  margin: 30px 0 20px 0;
`;
const MovieTitle = styled.div`
  font-size: 18px;
`;

export const Movies = ({ movieData, title }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Swiper slidesPerView={5.2} spaceBetween={20}>
        {movieData.map((play) => (
          <SwiperSlide key={play.id}>
            <Link to={"#"}>
              <MovieImg
                style={{
                  background: `url(${imgUrl}${play.backdrop_path}) no-repeat center/cover`,
                }}
              />
              <MovieTitle>{play.title}</MovieTitle>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};
