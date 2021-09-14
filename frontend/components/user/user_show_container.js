import { connect } from "react-redux";
import React from "react";
import { fetchUser } from "../../actions/user_actions";
import ShowUser from "./user_show";

const mapSTP = (state) => {
  return {
    user: Object.values(state.user),
  };
};

const mapDTP = (dispatch) => {
  return {
    fetchUser: (userId) => dispatch(fetchUser(userId)),
  };
};

export default connect(mapSTP, mapDTP)(ShowUser);
