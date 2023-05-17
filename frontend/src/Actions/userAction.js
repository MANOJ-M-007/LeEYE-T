
import { userLoginFail, userLoginReq, userLoginSuccess, userLogout, } from '../Slices/userLoginSlice'
import { userDetailsReq, userDetailsSuccess, userDetailsFail } from '../Slices/userDetailsSlice'
import { profileEditReq, profileEditSuccess, profileEditFail } from '../Slices/profileEditSlice'

import { axiosInstance } from '../ApiCalls/axios'


//Login
export const login = (email, password) => async (dispatch) => {
  console.log(email, password);
  try {
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    dispatch(userLoginReq());
    const { data } = await axiosInstance.post(
      "/api/users/login",
      { email, password, },
      config
    );
    if (data.message) {
      dispatch(userLoginFail(data.message));
      // toasts(data.message);
      return data.message
    } else {

      dispatch(userLoginSuccess(data));
      localStorage.setItem("userInfo", JSON.stringify(data));
    }


  } catch (error) {
    console.log(error);
    const errorIs =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch(userLoginFail(errorIs))
  }
}

//Logout
export const logout = () => async (dispatch) => {
  localStorage.removeItem("userInfo");
  dispatch(userLogout());
};

//user details
export const userDetailsAction = () => async (dispatch, getState) => {
  try {
    dispatch(userDetailsReq());
    const {
      userLogin: { userInfo },
    } = getState();
    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const { data } = await axiosInstance.get("/api/users/userDetails", config);
    dispatch(userDetailsSuccess(data));
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch(userDetailsFail(message));
  }
};

export const profileEditAction = (Data) => async (dispatch, getState) => {
  try {
    console.log(Data);
    dispatch(profileEditReq());
    const { userLogin: { userInfo }, } = getState();
    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const { data } = await axiosInstance.post("/api/users/editProfile", Data, config);
    dispatch(profileEditSuccess(data));
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch(profileEditFail(message));
  }
};