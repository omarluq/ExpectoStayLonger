import { connect } from "react-redux";
import React from "react";
import Header from "./header";
import { logout } from "../../actions/session_actions";
import { withRouter } from "react-router";
import { openModal } from "../../actions/modal_actions";

const mapSTP = (state) => {
  return {
    user: state.user,
    session: state.session,
  };
};

const mapDTP = (dispatch) => ({
  logout: () => dispatch(logout()),
  signup: () => dispatch(openModal("signup")),
  login: () => dispatch(openModal("login")),
});

export default withRouter(connect(mapSTP, mapDTP)(Header));
