import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { Wrapper } from "../../General/General.styled.jsx";
import FilmList from "../HomePage/FilmList.jsx";
import { Input } from "./MoviesPage.styled.jsx";
import { fetchMoviesByName } from "../../General/fetchOptions.js";

export default function MoviesPage({ movies, setMovies }) {
  const [search, setSearch] = useState(null);

  useEffect(() => {
    fetchMoviesByName(search).then((response) => {
      setMovies([...response.data.results]);
    });
  }, [search, setMovies]);

  const onSubmit = (evt) => {
    const value = evt.target[0].value;

    evt.preventDefault();

    setSearch(value);

    evt.target[0].value = "";
  };

  return (
    <Wrapper>
      <form name="search" onSubmit={onSubmit}>
        <Input name="search" placeholder="Введите ключевое слово" />
      </form>
      {search && <FilmList movies={movies} />}
    </Wrapper>
  );
}

MoviesPage.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
  setMovies: PropTypes.func,
};
