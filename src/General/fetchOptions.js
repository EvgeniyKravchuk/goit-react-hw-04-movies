import API from "./api.js";

export async function fetchMostPopularMovies() {
  try {
    const response = await API.get(
      "3/trending/all/day?api_key=072ba5d3ab696b78ba3c61da98d3ebeb"
    );
    return response;
  } catch (error) {
    alert(`Случилось страшное: ${error.message}`);
  }
}

export async function fetchMoviesByName(movieName) {
  try {
    const response = await API.get(
      `3/search/movie?api_key=072ba5d3ab696b78ba3c61da98d3ebeb&language=en-US&query=${movieName}&page=1&include_adult=false`
    );
    return response;
  } catch (error) {
    alert(`Случилось страшное: ${error.message}`);
  }
}

export async function fetchMovieDetailsById(movieId) {
  try {
    const response = await API.get(
      `3/movie/${movieId}?api_key=072ba5d3ab696b78ba3c61da98d3ebeb&language=en-US`
    );
    return response;
  } catch (error) {
    alert(`Случилось страшное: ${error.message}`);
  }
}

export async function fetchMovieReviewsById(movieId) {
  try {
    const response = await API.get(
      `3/movie/${movieId}/reviews?api_key=072ba5d3ab696b78ba3c61da98d3ebeb&language=en-US`
    );
    return response;
  } catch (error) {
    alert(`Случилось страшное: ${error.message}`);
  }
}

export async function fetchMovieActorsById(movieId) {
  try {
    const response = await API.get(
      `3/movie/${movieId}/credits?api_key=072ba5d3ab696b78ba3c61da98d3ebeb&language=en-US`
    );
    return response;
  } catch (error) {
    alert(`Случилось страшное: ${error.message}`);
  }
}
