import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { movieApi } from "../../../api";
import { ScrollTop } from "../../../ScrollTop";
import { Loading } from "../../Loading";
import { PageTitle } from "../../PageTitle";
import { MovieDetail } from "./MovieDetail";

const MovieWrap = styled.div`
  width: 100%;
  /* margin-top: 100px; */
  display: flex;
  justify-content: space-between;
  padding: 0 250px;
  margin-top: 100px;
  @media screen and (max-width: 500px) {
    display: block;
    margin-top: 30px;
    padding: 20px;
  }
  iframe {
    width: 48%;
    height: 300px;
    @media screen and (max-width: 500px) {
      width: 100%;
    }
  }
`;
const Movie = styled.div``;
const Text = styled.p`
  width: 48%;
  font-size: 22px;
  line-height: 30px;
  @media screen and (max-width: 500px) {
    width: 100%;
    font-size: 12px;
  }
`;

export const Detail = () => {
  const [detailDb, setDetailDb] = useState();
  const [videoDb, setVideoDb] = useState();
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  // =>url주소에 있는 변수값을 가져옴

  useEffect(() => {
    const movieData = async () => {
      try {
        const { data: movieDetailDb } = await movieApi.movieDetail(id);
        setDetailDb(movieDetailDb);

        const {
          data: { results: videoDetailDb },
        } = await movieApi.video(id);
        setVideoDb(videoDetailDb.length === 0 ? null : videoDetailDb[0].key);

        setLoading(false);
      } catch (error) {
        // console.log(error);
      }
    };
    movieData();
  }, []);
  console.log(videoDb);
  return (
    <div>
      <PageTitle title={"Detail"} />
      <ScrollTop />
      {loading ? (
        <Loading />
      ) : (
        <>
          {detailDb && <MovieDetail detailDb={detailDb} />}
          {videoDb && (
            <MovieWrap>
              <iframe
                src={`https://www.youtube.com/embed/${videoDb}`}
                allowfullscreen
              ></iframe>
              <Text>{detailDb.overview}</Text>
            </MovieWrap>
          )}
        </>
      )}
    </div>
  );
};
