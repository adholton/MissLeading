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
          <td><button className="btn btn-danger">Delete Movie</button></td>
        </tr>
      )
    })
  }
  render() {
    return (
      // <div>
      //   <h1 className="heading">Can You See Her?</h1>
      //   <h3>My List of Movies</h3>
      //   <table className="table table-hover">
      //   <thead>
      //     <tr>
      //       <th>Title</th>
      //       <th>Two Female Characters</th>
      //       <th>Female Conversation</th>
      //       <th>Not About Men</th>
      //     </tr>
      //   </thead>
      //   <tbody>{this.renderMovies()}</tbody>
      // </table>

      // <div>
      <div>
        <div className="navigation">
          <div className="col-md-8 offset-md-2">
          <br/>
            <h1 className="heading">MissLeading Movies</h1>
            <br/>
          </div>
        </div>

          <div className="col-md-8 offset-md-2 opacity">
            <h3>My List of Movies</h3>
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
          <Link to="/"><button className="btn btn-secondary">Back to Homepage</button></Link>
          <div className="divider"></div>
        </div>

      </div>
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
