import { Link } from "react-router-dom";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import { imgUrl } from "../../../constants/constant";
import "swiper/css";
import "swiper/css/navigation";

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
  const params = {
    breakpoints: {
      320: {
        slidesPerView: 2.2,
        spaceBetween: 10,
      },
      640: {
        slidesPerView: 5.2,
        spaceBetween: 20,
      },
    },
  };

  return (
    <Container>
      <Title>{title}</Title>
      <Swiper modules={[Navigation]} navigation {...params}>
        {movieData.map((play) => (
          <SwiperSlide key={play.id}>
            <Link to={`/detail/${play.id}`}>
              <MovieImg
                style={{
                  background: `url(${
                    play.backdrop_path
                      ? `${imgUrl}${play.backdrop_path}`
                      : `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwR31HeEDfrHDKRqOyKahOhSeSml9iTQLQFg&usqp=CAU`
                  }) no-repeat center/cover`,
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
