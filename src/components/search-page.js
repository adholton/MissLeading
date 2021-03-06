import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchMovies, addMovie, fetchImage } from "../actions";
import { Link } from "react-router-dom";
import _ from "lodash";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
//import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCheckCircle, faTimes } from '@fortawesome/free-solid-svg-icons'

library.add(faCheckSquare, faCheckCircle, faTimes)

class SearchPage extends Component {
  constructor(props) {
    super(props);
    //console.log(props);
    //the props is an object that just contains the fetchMovies function
    this.state = { term: '' };
    this.onInputChange = this.onInputChange.bind(this);
    this.onSearchButtonClick = this.onSearchButtonClick.bind(this);
    this.renderMovies = this.renderMovies.bind(this);

  }


  onInputChange(event) {
    this.setState({ term: event.target.value });
    console.log(this.state);
  }


  onSearchButtonClick(event) {
    event.preventDefault();
    // We need to go and fetch movie data based on the search term
    // the state at this point is already updated from event handler of the user typing, so we invoke the fetch movies function (making the api call) and then resetting the state back back to it's original state (clearing term)
    // const tableHead = this.refs.tableHead;
    // console.log('Inside search button', tableHead);
    // tableHead.style.visibility = 'visible';
    console.log(this.props.fetchImage(this.state.term));
    this.props.fetchImage(this.state.term);
    this.props.fetchMovies(this.state.term);
    this.setState({ term: '' });

  }



  renderMovies() {
    console.log('Inside renderMovies, images:', this.props.images)
    console.log('Inside renderMovies, movies:', this.props.movies)
    console.log(this.props.images.data);
      return _.map(this.props.movies, movie => {
        if (movie.rating == "0") {
          movie.icon1 = <FontAwesomeIcon icon={faTimes} size="2x" />
          movie.icon2 = <FontAwesomeIcon icon={faTimes} size="2x" />
          movie.icon3 = <FontAwesomeIcon icon={faTimes} size="2x" />
        } else if (movie.rating == "1") {
          movie.icon1 = <FontAwesomeIcon icon={faCheckCircle} size="2x" />
          movie.icon2 = <FontAwesomeIcon icon={faTimes} size="2x" />
          movie.icon3 = <FontAwesomeIcon icon={faTimes} size="2x" />
        } else if (movie.rating == "2") {
          movie.icon1 = <FontAwesomeIcon icon={faCheckCircle} size="2x" />
          movie.icon2 = <FontAwesomeIcon icon={faCheckCircle} size="2x" />
          movie.icon3 = <FontAwesomeIcon icon={faTimes} size="2x" />
        } else if (movie.rating == "3") {
          movie.icon1 = <FontAwesomeIcon icon={faCheckCircle} size="2x" />
          movie.icon2 = <FontAwesomeIcon icon={faCheckCircle} size="2x" />
          movie.icon3 = <FontAwesomeIcon icon={faCheckCircle} size="2x" />
        }
        return (
          <tr key={movie.id}>
            <td>{movie.title}</td>
            <td>{movie.icon1}</td>
            <td>{movie.icon2}</td>
            <td>{movie.icon3}</td>
            <td><button className="btn btn-secondary" onClick={(event) => {
              event.target.innerHTML = 'Added';
              event.target.disabled = 'true';
              return this.props.addMovie(movie)
            }}>Add To List</button></td>
          </tr>
        );
      });
    
  }

  render() {
    const { movies } = this.props;
    console.log(movies);
    return (
      <div>
        <div className="navigation">

          <br />
          <h1 className="heading">MissLeading Movies</h1>
          <br />
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
          <br />
          <table className="table table-hover search-table" ref="table">
            <thead ref="tableHead">
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

  return {
    movies: state.movies,
    images: state.images
  }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchMovies, addMovie, fetchImage }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
