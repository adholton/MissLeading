import { combineReducers } from "redux";
import MovieReducer from "./reducer-movieSearch";


//For now, we're only going to have one reducer, but you'll realize that we're going to pretty much use this pattern of utilizing combineReducers all the time.
const rootReducer = combineReducers({
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

      default:
        return state

    }
  }
})


export default rootReducer;


// const todos = (state = [], action) => {
//   switch (action.type) {
//     case 'ADD_TODO':
//       return [
//         ...state,
//         {
//           id: action.id,
//           text: action.text,
//           completed: false
//         }
//       ]
//     case 'TOGGLE_TODO':
//       return state.map(todo =>
//         todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
//       )
//     default:
//       return state
//   }
// }



// const rootReducer = combineReducers({
//   books: function() {
//     return [
//       { title: "Harry Potter and the Chamber of Secrets", pages: 357 },
//       { title: "Hunger Games", pages: 387 },
//       { title: "JavaScript: The Good Parts", pages: 176 },
//       { title: "Clojure for the Brave and True", pages: 329 }
//     ];
//   },
//   activeBook: function(state = null, action) {
//     switch (action.type) {
//       case "BOOK_SELECTED":
//         return action.payload;
//     }

//     return state;
//   }
// });

// export default rootReducer;