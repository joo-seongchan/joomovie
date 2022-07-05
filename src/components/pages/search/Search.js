import { useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { movieApi } from "../../../api";
import { imgUrl } from "../../../constants/constant";
import { Container } from "../../Container";
import { Loading } from "../../Loading";
import { PageTitle } from "../../PageTitle";
import { Link } from "react-router-dom";

const SearchWrap = styled.div`
  margin-top: 150px;
`;

const Input = styled.input`
  all: unset;
  box-sizing: border-box;
  width: 100%;
  border: 1px solid #555;
  padding: 20px;
  font-size: 20px;
  &::placeholder {
    font-size: 18px;
  }
`;

const ConWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  column-gap: 30px;
  row-gap: 50px;
  margin-top: 100px;
  @media screen {
    display: flex;
    flex-direction: column;
  }
`;
const Con = styled.div`
  /* width: 200px; */
`;
const Bg = styled.div`
  height: 300px;
`;
const Title = styled.div`
  margin-top: 10px;
  font-size: 18px;
  text-align: center;
`;

export const Search = () => {
  const [searchTerm, setSearchTerm] = useState();
  const [loading, setLoading] = useState();

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
    setError,
    clearErrors,
  } = useForm({
    mode: "onChange",
  });

  const searchMovie = async () => {
    const { search: term } = getValues();
    // =>getValues는 인풋태그에 작성된 내용을 가져옴
    setLoading(true);
    try {
      const {
        data: { results },
      } = await movieApi.search(term);

      if (results.length <= 0) {
        setError("result", {
          massage: "영화가 없어요..!",
        });
        // =>setError("변수명",{message:"출력내용"})
      } else {
        setSearchTerm(results);
      }

      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  // console.log(searchTerm);

  // console.log(errors);
  //  => 폼상태에 에러 처리 담당

  return (
    <div>
      <PageTitle title={"Search"} />
      <Container>
        <SearchWrap>
          <form onSubmit={handleSubmit(searchMovie)}>
            <Input
              {...register("search", {
                required: "내용은 필수 입니다.~_~",
                onChange() {
                  clearErrors("result");
                },
              })}
              type="text"
              placeholder="영화 검색...."
            />

            {errors?.search?.massage}
            {errors?.result?.massage}
          </form>
        </SearchWrap>

        {loading ? (
          <Loading />
        ) : (
          <>
            {searchTerm && (
              <ConWrap>
                {searchTerm.map((term) => (
                  <Con key={term.id}>
                    <Link to={`/detail/${term.id}`}>
                      <Bg
                        style={{
                          background: `url(${imgUrl}${term.poster_path}  ) no-repeat center/cover `,
                        }}
                      />
                      <Title>{term.title}</Title>
                    </Link>
                  </Con>
                ))}
              </ConWrap>
            )}
          </>
        )}
      </Container>
    </div>
  );
};
