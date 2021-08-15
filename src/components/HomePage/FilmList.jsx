import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { List, Item } from "./HomePage.styled.jsx";
import defaultImage from "../../images/imageNotFound.jpg";

export default function FilmList({ movies, history }) {
  console.log(history);

  return (
    <List>
      {movies.map(({ id, backdrop_path, original_title, original_name }) => {
        const imgUrl =
          "https://www.themoviedb.org/t/p/original/" + backdrop_path;
        const defaultImg = defaultImage;

        return (
          <Item key={id}>
            <Link
              className="link "
              to={{
                pathname: `/movies/${id}`,
                state: { params: history.location?.search },
              }}
            >
              <img
                src={backdrop_path ? imgUrl : defaultImg}
                alt={original_title}
              />
              <h2>
                {original_title} {original_name}
              </h2>
            </Link>
          </Item>
        );
      })}
    </List>
  );
}

FilmList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
};
