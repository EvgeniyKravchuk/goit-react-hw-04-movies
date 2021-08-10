import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Link, Route } from "react-router-dom";
import { Wrapper } from "../../General/General.styled";
import { Title, Button, Image } from "./MovieDetailsPage.styled";
import { fetchMovieDetailsById } from "../../General/fetchOptions";
import defaultImage from "../../images/imageNotFound.jpg";
import Cast from "./Cast";
import Reviews from "./Reviews";

export default function MovieDetailsPage({ movies }) {
  const [movie, setMovie] = useState({});
  const { movieId } = useParams();

  useEffect(() => {
    fetchMovieDetailsById(movieId).then(({ data }) => {
      setMovie({ ...data });
    });
  }, [movieId]);

  const {
    original_title,
    original_name,
    backdrop_path,
    budget,
    popularity,
    release_date,
    vote_average,
    vote_count,
  } = movie;

  const imgUrl = "https://www.themoviedb.org/t/p/original/" + backdrop_path;
  const defaultImg = defaultImage;

  return (
    <Wrapper>
      <Title>
        {original_title} {original_name}
      </Title>
      <Image src={backdrop_path ? imgUrl : defaultImg} alt={original_title} />
      <p>Бюджет: {budget}</p>
      <p>Популярность: {popularity}</p>
      <p>Дата релиза: {release_date}</p>
      <p>Оценка: {vote_average}/10</p>
      <p>Всего оценок: {vote_count} оценок</p>
      <Link className="link" to={`/movies/${movieId}/cast`}>
        <Button>Актёры</Button>
      </Link>
      <Link className="link" to={`/movies/${movieId}/reviews`}>
        <Button>Отзывы</Button>
      </Link>

      <Route path="/movies/:movieId/cast">
        <Cast />
      </Route>
      <Route path="/movies/:movieId/reviews">
        <Reviews />
      </Route>
    </Wrapper>
  );
}

MovieDetailsPage.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
};
