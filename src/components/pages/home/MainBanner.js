import styled from "styled-components";
import { imgUrl } from "../../../constants/constant";
import { mainStyle } from "../../../styles/globalStyle";

const Banner = styled.section`
  height: 100vh;
  background-color: gray;
  padding: ${mainStyle.padding};
  padding-top: 250px;
  @media screen and (max-width: 500px) {
    position: relative;
    height: 100vh;
  }
`;

const Title = styled.h1`
  max-width: 650px;
  /* width: 100%; */
  font-size: 80px;
  font-weight: 700;
  line-height: 6rem;
  @media screen and (max-width: 500px) {
    font-size: 40px;
    line-height: 3rem;
    position: absolute;
    bottom: 20%;
    left: 20px;
  }
`;

const Desc = styled.p`
  font-size: 18px;
  margin-top: 20px;
  max-width: 700px;
  width: 100%;
  line-height: 2rem;
  opacity: 0.9;
  font-weight: 300;
  @media screen and (max-width: 500px) {
    display: none;
  }
`;

export const MainBanner = ({ playData }) => {
  return (
    <Banner
      style={{
        background: `url(${imgUrl}${playData.backdrop_path}) no-repeat center/cover`,
      }}
    >
      <Title>{playData.title}</Title>
      <Desc> {playData.overview.slice(0, 100) + "..."} </Desc>
    </Banner>
  );
};

// 반응형????
// =>각 디바이스 기기에 따라 디자인이 변경 되도록 구현하는 것?
// @media screen and (max-width: 1000px ;) {
//   .box{
//     width:300px;
//   }
// }
