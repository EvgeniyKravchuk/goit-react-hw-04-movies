import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { Wrapper } from "../../General/General.styled.jsx";
import FilmList from "../HomePage/FilmList.jsx";
import { Input } from "./MoviesPage.styled.jsx";
import { fetchMoviesByName } from "../../General/fetchOptions.js";

export default function MoviesPage({ response, setResponse, history }) {
  const [search, setSearch] = useState(null);

  useEffect(() => {
    fetchMoviesByName(search).then((response) => {
      setResponse([...response.data.results]);
    });
  }, [search, setResponse]);

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
      {search && <FilmList movies={response} history={history} />}
    </Wrapper>
  );
}

MoviesPage.propTypes = {
  response: PropTypes.arrayOf(PropTypes.object),
  setResponse: PropTypes.func,
};
