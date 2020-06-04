import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchMovies } from "../actions";
import { Link } from "react-router-dom";
import _ from "lodash";
import { render } from "@testing-library/react";

class MyList extends Component {
  renderMovies() {
    return this.props.movies.map(movie => {
      return (
        <tr key={movie.id}>
          <td>{movie.title}</td>
          <td>{movie.rating}</td>
          <td>{movie.rating}</td>
          <td>{movie.rating}</td>
          <td><button className="btn btn-primary">Delete Movie</button></td>
        </tr>
      )
    })
  }


  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Title</th>
            <th>Two Female Characters</th>
            <th>Female Conversation</th>
            <th>Not About Men</th>
          </tr>
        </thead>
        <tbody>{this.renderMovies()}</tbody>
      </table>
    )
  }
}




function mapStateToProps(state) {
  console.log('Inside mapStateToProps', state);
  return { movies: state.selectedMovies }
}


// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ deleteMovie }, dispatch);
// }

export default connect(mapStateToProps)(MyList);



// class BookList extends Component {
//   renderList() {
//     return this.props.books.map(book => {
//       return (
//         <li
//           key={book.title}
//           onClick={() => this.props.selectBook(book)}
//           className="list-group-item"
//         >
//           {book.title}
//         </li>
//       );
//     });
//   }

//   render() {
//     return (
//       <ul className="list-group col-sm-4">
//         {this.renderList()}
//       </ul>
//     );
//   }
// }

//taking state and turning into props
//this is the function that allows this component to have access to the store. We are only allowing access to the books array for this component so we limit the return to just books: state.books
//it seems the default is to put state as the parameter and redux will tie the reducers return (the store) to this state
//it also tells React that when something in this state changes, to re-render
// function mapStateToProps(state) {
//   // Whatever is returned will show up as props
//   // inside of BookList
//   console.log(state)  //{books: Array(4), activeBook: null}
//   return {
//     books: state.books
//   };
// }