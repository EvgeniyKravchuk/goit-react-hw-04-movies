import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { List, Item } from "./MovieDetailsPage.styled";
import { fetchMovieActorsById } from "../../General/fetchOptions";

export default function Cast() {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    fetchMovieActorsById(movieId).then((response) => {
      setCast([...response.data.cast]);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <List>
      {cast.map(({ cast_id, character, name }) => {
        return (
          <Item key={cast_id}>
            <p>
              {name} в роли: {character}
            </p>
          </Item>
        );
      })}
    </List>
  );
}
