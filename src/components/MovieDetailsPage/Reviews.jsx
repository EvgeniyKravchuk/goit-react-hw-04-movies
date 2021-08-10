import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { List } from "./MovieDetailsPage.styled.jsx";
import { fetchMovieReviewsById } from "../../General/fetchOptions";

export default function Review() {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    fetchMovieReviewsById(movieId).then((response) => {
      setReviews([...response.data.results]);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <List>
      {reviews.map(({ id, author, content, created_at }) => {
        return (
          <li key={id}>
            <h2>{author}:</h2>
            <p>{content}</p>
            <p>{created_at}</p>
          </li>
        );
      })}
    </List>
  );
}
