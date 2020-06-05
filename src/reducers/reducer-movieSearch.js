import { FETCH_MOVIES } from "../actions/index";
import _ from "lodash";

export default function(state = {}, action) {
    console.log('Action', action)
    switch (action.type) {
        case FETCH_MOVIES:
            //we never want to mutate the state, so we usually concat any new data and
            //we could have written return state.concat([action.payload.data]); but with destructuring we can write it below as..

            console.log('Inside reducer',action.payload.data);
            console.log(_.mapKeys(action.payload.data, "id"))  //{319607: {…}, 319608: {…}, 319609: {…}, 319610: {…}, 319611: {…}}
            return _.mapKeys(action.payload.data, "id");
           // return ([action.payload.data, ...state]);

        default:
            return state;
    }
}
