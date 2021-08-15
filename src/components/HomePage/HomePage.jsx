import PropTypes from "prop-types";
import { useEffect } from "react";
import { fetchMostPopularMovies } from "../../General/fetchOptions.js";
import { Wrapper } from "../../General/General.styled.jsx";
import FilmList from "./FilmList.jsx";

export default function HomePage({ history, response, setResponse }) {
  console.log(history);
  useEffect(() => {
    fetchMostPopularMovies().then((response) => {
      const { results } = response.data;

      setResponse([...results]);
    });
  }, [setResponse]);

  return (
    <Wrapper>
      <FilmList movies={response} history={history} />
    </Wrapper>
  );
}

HomePage.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
  setMovies: PropTypes.func,
};
