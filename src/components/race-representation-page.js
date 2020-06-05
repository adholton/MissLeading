import React, { Component } from "react";
import { Link } from "react-router-dom";

class RaceRep extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };

  }

  onInputChange = (event) => {
    this.setState({ term: event.target.value });

  }

  onSearchClick = (event) => {
    event.preventDefault();
    this.setState({ results: 'No results found...' });
    console.log(this.state);

  }


  render() {
    const results = this.state.results;
    return (
      <div>
        <div className="navigation">
          <br />
          <h1 className="heading">Race Representation</h1>
          <br />
        </div>
        <div className="col-md-8 offset-md-2 opacity">
          <h3>What if we want to search by race representation?</h3>
          <form className="input-group">
            <input
              placeholder="Type movie to search here"
              className="form-control"
              value={this.state.term}
              onChange={this.onInputChange}
            />
            <span className="input-group-btn">
              <button onClick={this.onSearchClick} type="submit" className="btn btn-secondary">
                Search</button>
            </span>
          </form>
          <br />
          <div className="default-search">
            <h3>{results}</h3>
          </div>
          <Link to="/"><button className="btn btn-secondary">Back to Homepage</button></Link>
          <div className="divider"></div>
          <Link to="/my-list"><button className="btn btn-secondary">View My List</button></Link>
        </div>
      </div>
    )
  }
}
export default RaceRep;