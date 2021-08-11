import { useState, lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./General/Header";
import HomePage from "./components/HomePage/HomePage";
const MoviesPage = lazy(() =>
  import(
    "./components/MoviesPage/MoviesPage" /* webpackChunkName: "MoviesPage" */
  )
);
const MovieDetailsPage = lazy(() =>
  import(
    "./components/MovieDetailsPage/MovieDetailsPage" /* webpackChunkName: "MovieDetailsPage" */
  )
);

function App() {
  const [response, setResponse] = useState([]);

  return (
    <>
      <Header />
      <Switch>
        <Route path="/" exact>
          <HomePage movies={response} setMovies={setResponse} />
        </Route>
        <Suspense fallback={<div>...Загружаем</div>}>
          <Route path="/movies" exact>
            <MoviesPage movies={response} setMovies={setResponse} />
          </Route>
          <Route path="/movies/:movieId">
            <MovieDetailsPage movies={response} setMovies={setResponse} />
          </Route>
        </Suspense>
        {/* <Route>
          <HomePage movies={response} setMovies={setResponse} />
        </Route> */}
      </Switch>
    </>
  );
}

export default App;
