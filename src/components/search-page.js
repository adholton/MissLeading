import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchMovies } from "../actions";
import { Link } from "react-router-dom";

class SearchPage extends Component {
  constructor(props) {
    super(props);
    //console.log(props);
    //the props is an object that just contains the fetchMovies function 

    this.state = { term: '' };

    this.onInputChange = this.onInputChange.bind(this);
    this.onSearchButtonClick = this.onSearchButtonClick.bind(this);
  }

  onInputChange(event) {
    this.setState({ term: event.target.value });
  }

  onSearchButtonClick(event) {
    event.preventDefault();

    // We need to go and fetch movie data based on the search term
    // the state at this point is already updated from event handler of the user typing, so we invoke the fetch movies function (making the api call) and then resetting the state back back to it's original state (clearing term)
    console.log(this.state.term);
    this.props.fetchMovies(this.state.term);
    this.setState({ term: '' });
  }

  render() {
    return (
      <div>
        <h1 className="heading">Can You See Her?</h1>
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
        <Link to="/">Back to Homepage</Link>
        {/* <h3>{post.title}</h3>
        <h6>Categories: {post.categories}</h6>
        <p>{post.content}</p> */}
      </div>

    )
  }
}

export default SearchPage;

function mapStateToProps({ movies }, ownProps) {
  return { movie: movies[ownProps.match.params.id] };
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchMovies }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);




