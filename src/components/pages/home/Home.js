import { useEffect, useState } from "react";
import { movieApi } from "../../../api";
import { imgNum } from "../../../constants/constant";
import { Loading } from "../../Loading";
import { MainBanner } from "./MainBanner";
import { Container } from "../../Container";
import { Movies } from "./Movies";

// console.log(movieApi.nowPlaying());
// console.log(movieApi.nowPlaying());

export const Home = () => {
  const [playing, setPlaying] = useState();
  const [rated, setRated] = useState();
  const [upComming, setUpComming] = useState();
  const [loading, setLoading] = useState("ture");

  useEffect(() => {
    const movieData = async () => {
      try {
        const {
          data: { results: playingDate },
        } = await movieApi.nowPlaying();
        setPlaying(playingDate);
        // =>비구조화 할당 이용시 변수명 변경할땐
        // 변수명:변경할명

        const {
          data: { results: ratedDate },
        } = await movieApi.topRated();
        setRated(ratedDate);

        const {
          data: { results: upCommingData },
        } = await movieApi.upComming();
        setUpComming(upCommingData);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    movieData();
  }, []);

  console.log(`현재상영 영화:`, playing);
  // console.log(`인기 영화:`, rated);
  // console.log(`개봉예정 영화 :`, upComming);
  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <>
          {playing && (
            <>
              <MainBanner playData={playing[imgNum]} />
              <Container>
                <Movies movieData={playing} title="현재 상영 영화" />
                <Movies movieData={rated} title="인기 영화" />
                <Movies movieData={upComming} title="개봉 예정 영화" />
              </Container>
            </>
          )}
        </>
      )}
    </div>
  );
};
