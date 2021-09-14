import { connect } from "react-redux";
import {
  deleteReservation,
  fetchReservation,
} from "../../actions/reservation_actions";
import ShowReservation from "./reservation_show";

const mapSTP = (state, ownProps) => {
  return {
    reservation: state.reservation,
  };
};

const mapDTP = (dispatch) => ({
  fetchReservation: (resId) => dispatch(fetchReservation(resId)),
  deleteReservation: (resId) => dispatch(deleteReservation(resId)),
});

export default connect(mapSTP, mapDTP)(ShowReservation);
