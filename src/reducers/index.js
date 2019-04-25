import { combineReducers } from "redux";
import courses from "./courseReducer";
import trips from "./tripReducer";
import authors from "./authorReducer";
import ajaxCallsInProgress from "./ajaxStatusReducer";

const rootReducer = combineReducers({
  courses,
  trips,
  authors,
  ajaxCallsInProgress
});

export default rootReducer;
