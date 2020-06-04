import { combineReducers } from 'redux';
import MovieReducer from './reducer-movieSearch';

//For now, we're only going to have one reducer, but you'll realize that we're going to pretty much use this pattern of utilizing combineReducers all the time.
const rootReducer = combineReducers({
  movies: MovieReducer
});

export default rootReducer;