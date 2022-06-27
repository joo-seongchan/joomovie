import { useEffect, useState } from "react";
import { movieApi } from "../../../api";
// console.log(movieApi.nowPlaying());
// console.log(movieApi.nowPlaying());

export const Home = () => {
  const [playing, setPlaying] = useState();
  const [rated, setRated] = useState();
  const [upComming, setUpComming] = useState();

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
      } catch (error) {
        console.log(error);
      }
    };
    movieData();
  }, []);

  console.log(`현재상영 영화:`, playing);
  console.log(`인기 영화:`, rated);
  console.log(`개봉예정 영화 :`, upComming);
  return <div>Home</div>;
};
