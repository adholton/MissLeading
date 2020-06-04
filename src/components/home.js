// import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";


class Home extends Component {


  render() {
    return (
      <div>
      <h1>Can You See Her?</h1>
        <div className="navigation">
          <Link className="btn btn-primary" to="/search">
            Search Movies
          </Link>
          <Link className="btn btn-primary" to="">
            Movies that Pass
          </Link>
          <Link className="btn btn-primary" to="/my-list">
            My List
          </Link>
        </div>

        <div className="description">
          <h3>What is the Bechdel Test?</h3>
          <p>The Bechdel test is a measure of the representation of women in fiction. It asks three simple questions...</p>

          <ol>
            <li>Does the movie have two named female characters</li>
            <li>Do these characters talk to one another?</li>
            <li>Do they talk about something other than a man?</li>
          </ol>

          <p>The test is named after American cartoonist Alison Bechdel, who asked these simple questions in her 1985 comic...</p>

          <div className="image-container">
          <img src="https://nofilmschool.com/sites/default/files/styles/article_wide/public/bechdel_test_-_the_rule.png?itok=eQ6C-S7K" alt="Bechdel test comic strip"></img>
          </div>

        </div>
      </div>
    );
  }
}

// function mapStateToProps(state) {//make all of our posts from our Redux Store available to the component's props
//   return { posts: state.posts };
// }
//
// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ fetchPosts }, dispatch);
// }

// export default connect(mapStateToProps, mapDispatchToProps)(PostsIndex);
export default Home;
