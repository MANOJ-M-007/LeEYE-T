import { configureStore } from '@reduxjs/toolkit'
//user
import userLoginReducer from '../Slices/userLoginSlice'
import userDetailsReducer from '../Slices/userDetailsSlice';
import profileEditReducer from '../Slices/profileEditSlice';
const store = configureStore({
  reducer: {
    userLogin: userLoginReducer,
    userDetails:userDetailsReducer,
    profileEdit:profileEditReducer
  }
})

export default store;