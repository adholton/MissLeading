import { combineReducers } from "redux";
import MovieReducer from "./reducer-movieSearch";
import ImageReducer from "./reducer-imageSearch";
import _ from "lodash";


// import ImageReducer from "./reducer-movieSearch";
//For now, we're only going to have one reducer, but you'll realize that we're going to pretty much use this pattern of utilizing combineReducers all the time.
const rootReducer = combineReducers({
  images: ImageReducer,
  movies: MovieReducer,

  selectedMovies: function (state = [], action) {
    switch (action.type) {
      case "ADD_MOVIE":
        return [
          ...state,
          {
            id: action.payload.id,
            title: action.payload.title,
            rating: action.payload.rating
          }
        ]

      case "DELETE_MOVIE":
        const newState = state.filter( movie => movie !== action.payload );
     
        return newState; 

      default:
        return state
    }
  }
})
export default rootReducer;
