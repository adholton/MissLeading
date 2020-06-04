import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { searchMovie } from "../actions";
import { Link } from "react-router-dom";

class PostsShow extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchPost(id);
  }

  //Once again we used the params from the URL to figure out which post we're actually wanting to delete. 
  onDeleteClick() {
    const { id } = this.props.match.params;

    //When using React Router, we now have access to the history package and all it's methods via props. One of those methods is push, which allows us to change our browser's route.
    //the callback is the anonymous function for routing back to main page
    this.props.deletePost(id, () => {
      this.props.history.push("/");
    });
  }

  render() {
    const { post } = this.props;

    if (!post) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <Link to="/">Back To Index</Link>
        <button
          className="btn btn-danger pull-xs-right"
          onClick={this.onDeleteClick.bind(this)}
        >
          Delete Post
        </button>
        <h3>{post.title}</h3>
        <h6>Categories: {post.categories}</h6>
        <p>{post.content}</p>
      </div>
    );
  }
}



function mapStateToProps({ posts }, ownProps) {
  return { post: posts[ownProps.match.params.id] };
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchPost, deletePost}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsShow);