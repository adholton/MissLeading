import axios from "axios";

//const API_KEY_MOVIEDB = 'ca63e741c6718e480cec9a3c6682d81c';
//const ROOT_URL_BT = `http://bechdeltest.com/api/v1/getMoviesByTitle?title=${searchParam}`;
//const ROOT_URL_MOVIEDB = `https://api.themoviedb.org/3/find/tt${imdbID}?api_key=${API_KEY_MOVIEDB}&language=en-US&external_source=imdb_id`


/*
Starting with Bechdel, searching by title, we'll get rating and imdb id
http://bechdeltest.com/api/v1/getMoviesByTitle?title=matrix

Then run a MovieDB api request based on the returned id and get the movie image/details
https://api.themoviedb.org/3/find/tt0234215?api_key=a0c386237c296940bf5b772239aac7e6&language=en-US&external_source=imdb_id

//https://api.themoviedb.org/3/search/movie?api_key=ca63e741c6718e480cec9a3c6682d81c&query=lord+of+the+rings
*/

export const ADD_MOVIE = 'ADD_MOVIE';
export const FETCH_MOVIES = 'FETCH_MOVIES';
export const FETCH_IMAGE = 'FETCH_IMAGE';
export const DELETE_MOVIE = 'DELETE_MOVIE';

// we only have one action in this project and it will be from this action that that we actually make the request to the API
// we'll keep all our API info (url, api key, request promise) here in this action file
export function fetchImage(searchParam) {
  const url = `https://api.themoviedb.org/3/search/movie?api_key=ca63e741c6718e480cec9a3c6682d81c&query=${searchParam}`;
  const request = axios.get(url);

  return {
    type: FETCH_IMAGE,
    payload: request
  };
}

export function fetchMovies(searchParam) {
  const url = `https://bechdeltest.com/api/v1/getMoviesByTitle?title=${searchParam}`;
  const request = axios.get(url);
 
  return {
    type: FETCH_MOVIES,
    payload: request
  };
}

export function addMovie(movie) {
  return {
    type: ADD_MOVIE,
    payload: movie
  }
}

export function deleteMovie(movie) {
  return {
    type: DELETE_MOVIE,
    payload: movie
  }
}

