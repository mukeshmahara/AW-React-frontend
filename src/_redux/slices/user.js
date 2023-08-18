import { createSlice } from "@reduxjs/toolkit";
import { fetchWrapper } from "../../_helper/fetchWrapper";
import { jwtCheck, setToken } from "../../_helper/jwt-check";
import { ErrorMessageHandler } from "../../_helper/_methods";

export const initialState = {
  loading: false,
  user: null,
  logginError: null,
  isLoggedin: jwtCheck() ? true : false,
};

// A user slice
const usersSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setUserLogin: (state, action) => {
      state.isLoggedin = true;
      state.user = action.payload;
    },
    setUserLoginError: (state,action)=>{
      state.logginError = action.payload;
    },
    setUserLogout: (state) => {
      state.isLoggedin = false;
      state.user = null;
    },
    startLoading: (state) => {
      state.loading = true;
    },
    stopLoading: (state) => {
      state.loading = false;
    },
  },
});

// Actions generated from the slice
const { setUser, setUserLogin,setUserLoginError, setUserLogout, startLoading, stopLoading } =
  usersSlice.actions;

// export user selector to get the slice in any component
export const userSelector = (state) => state.users;

// export the reducers
const userReducer = usersSlice.reducer;

export default userReducer;

export const userLogin = (credentials, navigate) => async (dispatch) => {
  try {
    let response = await fetchWrapper.post("auth/signin/", credentials);
    setToken(response.token, null, null);
    dispatch(setUserLogin({ isLoggedin: true }));
    dispatch(setUser({ data: response.data.attributes }));
    navigate("/admin");
  } catch (error) {
    // ErrorMessageHandler(error);
    dispatch(setUserLoginError(error))
  }
};

export const userLogout = (navigate) => async (dispatch) => {
  localStorage.removeItem("token");
  dispatch(setUserLogout({ isLoggedin: false }));
  dispatch(setUser({ user: null }));

  navigate("/login");
};
