import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchMovies, addMovie, fetchImage } from "../actions";
import { Link } from "react-router-dom";
import _ from "lodash";
class SearchPage extends Component {
  constructor(props) {
    super(props);
    //console.log(props);
    //the props is an object that just contains the fetchMovies function
    this.state = { term: '' };
    this.onInputChange = this.onInputChange.bind(this);
    this.onSearchButtonClick = this.onSearchButtonClick.bind(this);
    this.renderMovies = this.renderMovies.bind(this);
   // this.addMovie = this.addMovie.bind(this);
  }
  onInputChange(event) {
    this.setState({ term: event.target.value });
    console.log(this.state);
  }
  onSearchButtonClick(event) {
    event.preventDefault();
    // We need to go and fetch movie data based on the search term
    // the state at this point is already updated from event handler of the user typing, so we invoke the fetch movies function (making the api call) and then resetting the state back back to it's original state (clearing term)
    console.log(this.props.fetchImage(this.state.term));
    this.props.fetchImage(this.state.term);
    this.props.fetchMovies(this.state.term);
    this.setState({ term: '' });
  }
  // addMovie(movie) {
  //   console.log('Inside add movie')
  //   console.log(movie)
  // }
  renderMovies() {
    console.log(this.props.images.data);
    const rating = this.props.movies.rating
    return _.map(this.props.movies, movie => {

      // if (rating === 0) {
      //   return (<tr key={movie.id}>
      //     <td>{movie.title}</td>
      //     <td>rating</td>
      //     <td>rating</td>
      //     <td>rating</td>
      //     <td><button className="btn btn-secondary" onClick={() => this.props.addMovie(movie)}>Add To My List</button></td>
      //   </tr>)
      // } else if ( rating === 1) {
      //   return (<tr key={movie.id}>
      //     <td>{movie.title}</td>
      //     <td>rating</td>
      //     <td>rating</td>
      //     <td>rating</td>
      //     <td><button className="btn btn-secondary" onClick={() => this.props.addMovie(movie)}>Add To My List</button></td>
      //   </tr>)
      // } else if ( rating === 2 ) {
      //   return (<tr key={movie.id}>
      //     <td>{movie.title}</td>
      //     <td>rating</td>
      //     <td>rating</td>
      //     <td>rating</td>
      //     <td><button className="btn btn-secondary" onClick={() => this.props.addMovie(movie)}>Add To My List</button></td>
      //   </tr>)
      // } else if ( rating  === 3) {
      //   return (<tr key={movie.id}>
      //     <td>{movie.title}</td>
      //     <td>rating</td>
      //     <td>rating</td>
      //     <td>rating</td>
      //     <td><button className="btn btn-secondary" onClick={() => this.props.addMovie(movie)}>Add To My List</button></td>
      //   </tr>
      // )
      // }

//this was the original return that works

      return (
        <tr key={movie.id}>
          <td>{movie.title}</td>
          <td>{movie.rating}</td>
          <td>{movie.rating}</td>
          <td>{movie.rating}</td>
          <td><button className="btn btn-secondary" onClick={() => this.props.addMovie(movie)}>Add To My List</button></td>
        </tr>
      );
    });
  }
  /*
  rating: 3
  date: "2008-07-21 00:00:00"
  id: 58
  dubious: "0"
  year: 2003
  submitterid: 1
  imdbid: "0234215"
  visible: "1"
  title: "Matrix Reloaded, The"


  */
  render() {
    const { movies } = this.props;
    console.log(movies);
    return (
      <div>
        <div className="navigation">

          <br/>
            <h1 className="heading">Can You See Her?</h1>
          <br/>
        </div>

          <div className="col-md-8 offset-md-2 opacity">
          <h3>Search a movie here to see Bechdel Test Results</h3>
          <form onSubmit={this.onSearchButtonClick} className="input-group">
            <input
              placeholder="Type movie to search here"
              className="form-control"
              value={this.state.term}
              onChange={this.onInputChange}
            />
            <span className="input-group-btn">
              <button type="submit" className="btn btn-secondary">
                Search</button>
            </span>
          </form>
          <br/>
          {/* <ul className="list-group">
            {this.renderMovies()}
          </ul> */}
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
          <Link to="/my-list"><button className="btn btn-secondary">View My List</button></Link>

        </div>
      </div>

    )
  }
}
// export default SearchPage;
function mapStateToProps(state) {
  console.log('Inside mapStateToProps', state);
  return { movies: state.movies,
            images: state.images}
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchMovies, addMovie, fetchImage }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
