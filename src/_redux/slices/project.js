import { createSlice } from "@reduxjs/toolkit";
import { fetchWrapper } from "../../_helper/fetchWrapper";

export const initialState = {
  loading: false,
  projects: [],
  totalCount: 0
};


//A project slice
const projectSlice = createSlice({
  name:"projects",
  initialState,
  reducers:{
    getProjects:(state,action)=>{
      state.projects = action.payload
      state.totalCount = action.payload.totalCount
    }
  }
})

//Action generated from slice
const {
  getProjects
} = projectSlice.actions


// export the slice reducers
const projectReducer = projectSlice.reducer;

export default projectReducer;

// Actions 
export const fetchProjects = (url) =>async(dispatch)=>{
  try {
    const response = await fetchWrapper.get(url);
    dispatch(getProjects({ projects: response.data, totalCount: response.data.length}))
    
  } catch (error) {
    console.log(error); 
  }
}

export const getProjectById = (project) =>async(dispatch)=>{

}