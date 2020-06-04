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

/* action.payload.data is...
0: {title: "Matrix Reloaded, The", rating: 3, date: "2008-07-21 00:00:00", submitterid: 1, id: 58, …}
1: {visible: "1", dubious: "0", year: 2003, id: 59, imdbid: "0242653", …}
2: {visible: "1", dubious: "1", year: 2002, id: 4429, imdbid: "0303678", …}
3: {title: "Matrix, The", submitterid: 1, date: "2008-07-20 00:00:00", rating: 3, id: 36, …}

*/

// import _ from "lodash";
// //we have to import our actions from the actions file
// import { FETCH_POSTS, FETCH_POST, DELETE_POST, CREATE_POST } from "../actions";

// export default function (state = {}, action) {

//   switch (action.type) {
//     case FETCH_POST:
//       console.log(action.payload.data);  //{id: 319608, title: "Post 2", categories: "javascript", content: "My post"}
//       console.log(action.payload.data.id);  //319608
//       return { ...state, [action.payload.data.id]: action.payload.data };

//     //this returns all the posts in an object with id's as keys
//     case FETCH_POSTS:
//       console.log(_.mapKeys(action.payload.data, "id"))  //{319607: {…}, 319608: {…}, 319609: {…}, 319610: {…}, 319611: {…}}
//       return _.mapKeys(action.payload.data, "id");

//       //If we read the docs for _.omit, essentially it will return all of our posts, but without the one we wanted to delete.
//       //Also recall that action.payload is just the id of our post which is the "key" on posts 
//     case DELETE_POST:
//       return _.omit(state, action.payload);

//     case CREATE_POST:
//       return  

//     default:
//       return state;
//   }
// }