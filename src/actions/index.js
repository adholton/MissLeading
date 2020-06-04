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

// we only have one action in this project and it will be from this action that that we actually make the request to the API
// we'll keep all our API info (url, api key, request promise) here in this action file
// export function fetchImage(searchParam) {
//   const url = `https://api.themoviedb.org/3/search/movie?api_key=ca63e741c6718e480cec9a3c6682d81c&query=${searchParam}`;
//   const request = axios.get(url);
//
//   return {
//     type: FETCH_IMAGE,
//     payload: request
//   };
// }

export function fetchMovies(searchParam) {
  const url = `https://bechdeltest.com/api/v1/getMoviesByTitle?title=${searchParam}`;
  const request = axios.get(url);
  // at this point the request doesn't contain the returned api data yet, it's probably still in the pending state. We need a way to set our store state until AFTER the promise is fulfilled (when the api returns data). We only want to call the reducer when the data is returned, this is where applyMiddleware comes in (see the main index.js)
  //the payload is a promise (request)
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


/* Example call to BT for a movie based on title:
Example (for call to http://bechdeltest.com/api/v1/getMoviesByTitle?title=matrix):

[
    {
        "visible": "1",
        "date": "2008-07-21 00:00:00",
        "submitterid": "1",
        "rating": "3",
        "dubious": "0",
        "imdbid": "0234215",
        "id": "58",
        "title": "Matrix Reloaded, The",
        "year": "2003"
    },
      ]

      */


      /*
 Example call to MovieDB based on imdb id

      {
"movie_results": [
{
"adult": false,
"backdrop_path": "/kQIzFGdVCwsuutMKyCVZ8LrJw3e.jpg",
"genre_ids": [
12,
28,
53,
878
],
"id": 604,
"original_language": "en",
"original_title": "The Matrix Reloaded",
"overview": "Six months after the events depicted in The Matrix, Neo has proved to be a good omen for the free humans, as more and more humans are being freed from the matrix and brought to Zion, the one and only stronghold of the Resistance.  Neo himself has discovered his superpowers including super speed, ability to see the codes of the things inside the matrix and a certain degree of pre-cognition. But a nasty piece of news hits the human resistance: 250,000 machine sentinels are digging to Zion and would reach them in 72 hours. As Zion prepares for the ultimate war, Neo, Morpheus and Trinity are advised by the Oracle to find the Keymaker who would help them reach the Source.  Meanwhile Neo's recurrent dreams depicting Trinity's death have got him worried and as if it was not enough, Agent Smith has somehow escaped deletion, has become more powerful than before and has fixed Neo as his next target.",
"poster_path": "/aA5qHS0FbSXO8PxcxUIHbDrJyuh.jpg",
"release_date": "2003-05-15",
"title": "The Matrix Reloaded",
"video": false,
"vote_average": 6.9,
"vote_count": 6876,
"popularity": 22.216
}
],
"person_results": [],
"tv_results": [],
"tv_episode_results": [],
"tv_season_results": []
}

*/
