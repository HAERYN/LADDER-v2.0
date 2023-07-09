import { combineReducers } from "redux";
import login_reducer from "./login_reducer";
import signup_reducer from "./signup_reducer";
import record_reducer from "./record_reducer";

const rootReducer = combineReducers({
  login_reducer,
  signup_reducer,
  record_reducer,
});

export { rootReducer };
