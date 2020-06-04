import { FETCH_MOVIES } from "../actions/index";

export default function(state = [], action) {
    console.log('Action', action)
    switch (action.type) {
        case FETCH_MOVIES:
            //we never want to mutate the state, so we usually concat any new data and 
            //we could have written return state.concat([action.payload.data]); but with destructuring we can write it below as..
            
            console.log(action.payload.data);
            
            return ([action.payload.data, ...state]);
             
        default: 
            return state;
    }
}

/* action.payload.data is...
0: {title: "Matrix Reloaded, The", rating: 3, date: "2008-07-21 00:00:00", submitterid: 1, id: 58, …}
1: {visible: "1", dubious: "0", year: 2003, id: 59, imdbid: "0242653", …}
2: {visible: "1", dubious: "1", year: 2002, id: 4429, imdbid: "0303678", …}
3: {title: "Matrix, The", submitterid: 1, date: "2008-07-20 00:00:00", rating: 3, id: 36, …}

*/