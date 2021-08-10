import PropTypes from "prop-types";
import { useEffect } from "react";
import { fetchMostPopularMovies } from "../../General/fetchOptions.js";
import { Wrapper } from "../../General/General.styled.jsx";
import FilmList from "./FilmList.jsx";

export default function HomePage({ movies, setMovies }) {
  useEffect(() => {
    fetchMostPopularMovies().then((response) => {
      const { results } = response.data;

      setMovies([...results]);
    });
  }, [setMovies]);

  return (
    <Wrapper>
      <FilmList movies={movies} />
    </Wrapper>
  );
}

HomePage.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
  setMovies: PropTypes.func,
};
