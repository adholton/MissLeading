import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { deleteMovie } from "../actions";
import { Link } from "react-router-dom";
import _ from "lodash";
import { render } from "@testing-library/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
//import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCheckCircle, faTimes } from '@fortawesome/free-solid-svg-icons'

library.add(faCheckSquare, faCheckCircle, faTimes)
class MyList extends Component {
  
  renderMovies() {
    return this.props.movies.map(movie => {
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
        movie.icon1 = <FontAwesomeIcon icon={faCheckCircle} size="2x"/>
        movie.icon2 = <FontAwesomeIcon icon={faCheckCircle} size="2x"/>
        movie.icon3 = <FontAwesomeIcon icon={faCheckCircle} size="2x"/>
      }
      return (
        <tr key={movie.id}>
          <td>{movie.title}</td>
          <td>{movie.icon1}</td>
          <td>{movie.icon2}</td>
          <td>{movie.icon3}</td>
          <td><button className="btn btn-danger" onClick={() => this.props.deleteMovie(movie)}>Delete</button></td>
        </tr>
      )
    })
  }
  render() {
    return (

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

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ deleteMovie }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MyList);


