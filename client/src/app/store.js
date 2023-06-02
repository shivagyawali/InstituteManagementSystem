import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../pages/auth/features/authSlice";

export default configureStore({
  reducer: {
    auth: authReducer,
  },
});
