import TripApi from "../api/mockTripApi";
import * as types from "./actionTypes";
import { beginAjaxCall, ajaxCallError } from "./ajaxStatusActions";

export function loadTripsSuccess(trips) {
  return { type: types.LOAD_TRIP_SUCCESS, trips };
}

export function createTripSuccess(trip) {
  return { type: types.CREATE_TRIP_SUCCESS, trip };
}

export function updateTripSuccess(trip) {
  return { type: types.UPDATE_TRIP_SUCCESS, trip };
}

// Functions below handle asynchronous calls.
// Each returns a function that accepts a dispatch.
// These are used by redux-thunk to support asynchronous interactions.
export function loadTrips() {
  return function(dispatch) {
    dispatch(beginAjaxCall());
    return TripApi.getAllTrips()
      .then(trips => {
        dispatch(loadTripsSuccess(trips));
      })
      .catch(error => {
        throw error;
      });
  };
}

export function saveTrip(trip) {
  return function(dispatch, getState) {
    dispatch(beginAjaxCall());
    return TripApi.saveTrip(trip)
      .then(trip => {
        trip.id
          ? dispatch(updateTripSuccess(trip))
          : dispatch(createTripSuccess(trip));
      })
      .catch(error => {
        dispatch(ajaxCallError(error));
        throw error;
      });
  };
}
