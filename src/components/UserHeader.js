import React from "react";

import { connect } from "react-redux";
import { fetchUser } from "../actions";

class UserHeader extends React.Component {
  componentDidMount() {
    //this.props.fetchUser(this.props.userId); uncomment to use seperate action
  }
  render() {
    // console.log(this.props);
    const { user } = this.props;
    if (!user) {
      return null;
    } else {
      return <div className="user-header">{"By - " + user.name}</div>;
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  return { user: state.users.find((user) => user.id === ownProps.userId) };
};
export default connect(mapStateToProps)(UserHeader);
