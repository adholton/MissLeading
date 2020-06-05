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
    this.setState({ results: 'Oh no! No results found... unfortunately no data or API exists on this topic. Maybe it\'s time we make one!',
                    image: 'https://media.giphy.com/media/VABbCpX94WCfS/giphy.gif'})
  }
  render() {
    const results = this.state.results;
    const image = this.state.image;
    return (
      <div>
        <div className="navigation">
          <br />
          <h1 className="heading">Race Representation</h1>
          <br />
        </div>
        <div className="col-md-8 offset-md-2 opacity navigation">
        <h4>What about race?</h4>
        <br />
        <p>Looking at female representation is important, but the Bechdel Test alone does
        not take the intersections of race and identity into consideration.  What if we ask the same basic questions, in a different way?</p>
        <p>Does the movie have two characters of color</p>
        <p>Do these characters talk to one another?</p>
        <p>Do they talk about something other than a white person?</p>
        <p>Let's try!</p>
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
            <img src={image}></img>
          </div>
          <br />
          <Link to="/"><button className="btn btn-secondary">Back to Homepage</button></Link>
          <div className="divider"></div>
          <Link to="/my-list"><button className="btn btn-secondary">View My List</button></Link>
        </div>
      </div>
    )
  }
}
export default RaceRep;