import { combineReducers } from "@reduxjs/toolkit";
import projectReducer from "./project"

const rootReducer =combineReducers({
  projects: projectReducer
});

export default rootReducer;