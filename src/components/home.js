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
          <br/>
          <h1>Can You See Her?</h1>
          <br/>

          <div className="opacity navigation">
            <h4>What is the Bechdel Test?</h4>
            <br/>
            <p>The Bechdel test is a measure of the representation of women in fiction. It asks three simple questions...</p>

              <p>Does the movie have two named female characters</p>
              <p>Do these characters talk to one another?</p>
              <p>Do they talk about something other than a man?</p>
              <p>Let's get started! </p>

          </div>

          <br/>
            <div className="col-md-8 offset-md-2">
              <Link className="btn btn-outline-light" to="/search">
                Search Movies
              </Link>
              <div className="divider"></div>
              <Link className="btn btn-outline-light" to="">
                Movies that Pass
              </Link>
              <div className="divider"></div>
              <Link className="btn btn-outline-light" to="/my-list">
                My List
              </Link>
                <div>
                  <br/>
                </div>
            </div>
          </div>

          <br/>



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
