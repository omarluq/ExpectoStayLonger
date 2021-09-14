import React from "react";
import { closeModal } from "../../actions/modal_actions";
import { connect } from "react-redux";
import LoginFormContainer from "../session_form/login_form_container";
import SignupFormContainer from "../session_form/singup_form_container";
import { Divider } from "@material-ui/core";

const Modal = (props) => {
  if (!props.modal) {
    return null;
  }
  let component;
  switch (props.modal) {
    case "login":
      component = <LoginFormContainer />;
      break;
    case "signup":
      component = <SignupFormContainer />;
      break;
    default:
      return null;
  }

  return (
    <div className="background" onClick={() => this.closeModal()}>
      <div className="child" onClick={(e) => e.stopPropagation()}>
        {component}
      </div>
    </div>
  );
};

const mapSTP = (state) => ({
  modal: state.modal,
});

const mapDTP = (dispatch) => ({
  closeModal: () => dispatch(closeModal),
});

export default connect(mapSTP, mapDTP)(Modal);
