// import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";
class Home extends Component {
  render() {
    return (



      <div >



        <div className="navigation">
          <br />
          <h1>MissLeading Movies</h1>
          <br />

          <div className="opacity navigation col-md-8 offset-md-2">
            <h4>What is the Bechdel Test?</h4>
            <br />
            <p>The Bechdel test is a measure of the representation of women in fiction. It asks three simple questions...</p>
            
            <h5>Does the movie have two named female characters?</h5>
            <h5>Do these characters talk to one another?</h5>
            <h5>Do they talk about something other than a man?</h5>
            <br />
            <p>Let's get started! </p>
            
            <br />
            <div>
              <Link className="btn btn-outline-light" to="/search">
                Search Movies
              </Link>
              <div className="divider"></div>
              <Link className="btn btn-outline-light nav-button" to="/my-list">
                My List
              </Link>

              <div className="divider"></div>
              <Link className="btn btn-outline-light nav-button" to="/race-representation">
                Race Representation
              </Link>
              <div>
                <br />
              </div>
            </div>
          </div>


        </div>

        <br />



      </div>
    );
  }
}

//<img src="https://nofilmschool.com/sites/default/files/styles/article_wide/public/bechdel_test_-_the_rule.png?itok=eQ6C-S7K" alt="Bechdel test comic strip"></img>

// function mapStateToProps(state) {//make all of our posts from our Redux Store available to the component's props
//   return { posts: state.posts };
// }
//
// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ fetchPosts }, dispatch);
// }
// export default connect(mapStateToProps, mapDispatchToProps)(PostsIndex);
export default Home;
