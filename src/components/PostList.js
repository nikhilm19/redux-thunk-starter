import React from "react";
import { connect } from "react-redux";
import { fetchPosts, fetchPostsAndUsers } from "../actions";
import UserHeader from "./UserHeader";

class PostList extends React.Component {
  componentDidMount() {
    this.props.fetchPostsAndUsers();
    // this.props.fetchPosts();  uncomment to use seperate actions
    console.log(this.props.posts);
  }

  renderList() {
    return this.props.posts.map((post) => {
      return (
        <div
          className="flex flex-row item w-full border-b-2 mb-8"
          key={post.id}
        >
          <div className="flex mr-8 items-center">
            <svg
              id="Capa_1"
              enable-background="new 0 0 512 512"
              height="50"
              viewBox="0 0 512 512"
              width="50"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                <path d="m256 0c-141.159 0-256 114.841-256 256s114.841 256 256 256 256-114.841 256-256-114.841-256-256-256zm0 482c-124.617 0-226-101.383-226-226s101.383-226 226-226 226 101.383 226 226-101.383 226-226 226z" />
                <path d="m256 270c57.897 0 105-47.103 105-105s-47.103-105-105-105-105 47.103-105 105 47.103 105 105 105zm0-180c41.355 0 75 33.645 75 75s-33.645 75-75 75-75-33.645-75-75 33.645-75 75-75z" />
                <path d="m424.649 335.443c-19.933-22.525-48.6-35.443-78.649-35.443h-180c-30.049 0-58.716 12.918-78.649 35.443l-7.11 8.035 5.306 9.325c34.817 61.187 100.131 99.197 170.453 99.197s135.636-38.01 170.454-99.198l5.306-9.325zm-168.649 86.557c-55.736 0-107.761-28.197-138.383-74.295 13.452-11.352 30.579-17.705 48.383-17.705h180c17.804 0 34.931 6.353 48.383 17.705-30.622 46.098-82.647 74.295-138.383 74.295z" />
              </g>
            </svg>
          </div>

          <div className="w-10/12">
            <h1 className="text-2xl text-teal-600">{post.title}</h1>
            <p className="mb-8">{post.body}</p>
            <UserHeader userId={post.userId} />
          </div>
        </div>
      );
    });
  }
  render() {
    console.log(this.props);
    return (
      <div className="flex justify-between  ml-8  flex-col">
        {this.renderList()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { posts: state.posts };
};

export default connect(mapStateToProps, { fetchPostsAndUsers, fetchPosts })(
  PostList
);
