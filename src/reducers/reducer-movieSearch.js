import { FETCH_MOVIES } from '../actions/index';

export default function(state = [], action) {
    console.log('Action', action)
    switch (action.type) {
        case FETCH_MOVIES:
            //we never want to mutate the state, so we usually concat any new data and 
            //we could have written return state.concat([action.payload.data]); but with destructuring we can write it below as..
            return [action.payload.data, ...state];
        default: 
            return state;
    }
}