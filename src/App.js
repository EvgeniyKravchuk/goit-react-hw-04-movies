import { useState } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./General/Header";
import HomePage from "./components/HomePage/HomePage";
import MoviesPage from "./components/MoviesPage/MoviesPage";
import MovieDetailsPage from "./components/MovieDetailsPage/MovieDetailsPage";

function App() {
  const [response, setResponse] = useState([]);

  return (
    <>
      <Header />
      <Switch>
        <Route path="/" exact>
          <HomePage movies={response} setMovies={setResponse} />
        </Route>
        <Route path="/movies" exact>
          <MoviesPage movies={response} setMovies={setResponse} />
        </Route>
        <Route path="/movies/:movieId">
          <MovieDetailsPage movies={response} setMovies={setResponse} />
        </Route>
        {/* <Route>
          <HomePage movies={response} setMovies={setResponse} />
        </Route> */}
      </Switch>
    </>
  );
}

export default App;
