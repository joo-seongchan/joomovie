import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { movieApi } from "../../../api";

import { ScrollTop } from "../../../ScrollTop";

import { Loading } from "../../Loading";
import { MovieDetail } from "./MovieDetail";

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
      <ScrollTop />
      {loading ? (
        <Loading />
      ) : (
        <>
          {detailDb && <MovieDetail detailDb={detailDb} />}
          {videoDb && (
            <iframe
              src={`https://www.youtube.com/embed/${videoDb}`}
              allowfullscreen
            ></iframe>
          )}
        </>
      )}
    </div>
  );
};
