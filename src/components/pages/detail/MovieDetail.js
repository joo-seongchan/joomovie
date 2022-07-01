import { mainStyle } from "../../../styles/globalStyle";
import { imgUrl } from "../../../constants/constant";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDay,
  faCircleQuestion,
  faClock,
  faStarHalf,
} from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
  padding: 0 250px;
  @media screen and (max-width: 500px) {
    padding: ${mainStyle.moPadding};
  }
`;

const Banner = styled.div`
  width: 100vw;
  height: 65vh;
  background-attachment: fixed;
  margin-bottom: 60px;
`;
const Title = styled.h3`
  font-size: 60px;
  text-align: center;
  margin-bottom: 60px;
`;
const InfoWrap = styled.div`
  width: 100%;
  display: flex;
  @media screen and (max-width: 500px) {
    display: block;
  }
`;
const RunTime = styled.div`
  width: 25%;
  border: 1px solid white;
  display: flex;
  align-items: cetner;
  justify-content: center;
  flex-direction: column;
  font-size: 28px;
  padding: 10px 0;
  @media screen and (max-width: 500px) {
    width: 100%;
  }
  span {
    text-align: center;
    margin-top: 10px;
  }
`;
const ReleaseDate = styled.div`
  width: 25%;
  border: 1px solid white;
  display: flex;
  align-items: cetner;
  justify-content: center;
  flex-direction: column;
  font-size: 28px;
  padding: 10px 0;
  @media screen and (max-width: 500px) {
    width: 100%;
  }
  span {
    text-align: center;
    margin-top: 10px;
  }
`;
const Genres = styled.ul`
  width: 25%;
  border: 1px solid white;
  display: flex;
  align-items: cetner;
  justify-content: center;
  flex-direction: column;
  font-size: 28px;
  padding: 10px 0;
  @media screen and (max-width: 500px) {
    width: 100%;
  }
  span {
    font-size: 22px;
    margin-top: 10px;
    display: flex;
    justify-content: center;
    li:after {
      content: "";
      font-size: 14px;
      height: 20px;
      margin: 0 10px;
    }
  }
`;
const Point = styled.div`
  width: 25%;
  border: 1px solid white;
  display: flex;
  align-items: cetner;
  justify-content: center;
  flex-direction: column;
  font-size: 28px;
  padding: 10px 0;
  @media screen and (max-width: 500px) {
    width: 100%;
  }
  span {
    text-align: center;
    margin-top: 10px;
  }
`;

export const MovieDetail = ({ detailDb }) => {
  return (
    <>
      <Banner
        style={{
          background: `url(${
            detailDb.backdrop_path
              ? `${imgUrl}${detailDb.backdrop_path}`
              : `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwR31HeEDfrHDKRqOyKahOhSeSml9iTQLQFg&usqp=CAU`
          }) no-repeat center/cover`,
        }}
      ></Banner>
      <Container>
        <Title>{detailDb.title}</Title>
        <InfoWrap>
          <RunTime>
            <FontAwesomeIcon icon={faClock} />
            <span>{detailDb.runtime} 분</span>
          </RunTime>
          <ReleaseDate>
            <FontAwesomeIcon icon={faCalendarDay} />
            <span>{detailDb.release_date}</span>
          </ReleaseDate>
          <Genres>
            <FontAwesomeIcon icon={faCircleQuestion} />
            <span>
              {detailDb.genres.map((genre) => (
                <li key={genre.id}>{genre.name}</li>
              ))}
            </span>
          </Genres>
          <Point>
            <FontAwesomeIcon icon={faStarHalf} />
            <span>{detailDb.vote_average}</span>
          </Point>
        </InfoWrap>
      </Container>
    </>
  );
};
