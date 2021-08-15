import { useState, lazy, Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
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
  const ExtraProps = { response, setResponse };

  return (
    <>
      <Header />
      <Suspense fallback={<div>...Загружаем</div>}>
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => <HomePage {...props} {...ExtraProps} />}
          />
          <Route
            exact
            path="/movies"
            render={(props) => <MoviesPage {...props} {...ExtraProps} />}
          />
          <Route
            path="/movies/:movieId"
            render={(props) => <MovieDetailsPage {...props} {...ExtraProps} />}
          />
          <Route path="/movies/:movieId">
            <MovieDetailsPage movies={response} setMovies={setResponse} />
          </Route>
          <Redirect to="/" />
        </Switch>
      </Suspense>
    </>
  );
}

export default App;
