import { combineReducers } from "@reduxjs/toolkit";
import projectReducer from "./project";
import userReducer from "./user";

const rootReducer = combineReducers({
  projects: projectReducer,
  users: userReducer,
});

export default rootReducer;
