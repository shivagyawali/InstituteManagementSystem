import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../pages/auth/features/authSlice";
import instituteReducer from "../pages/institute/feature/instituteSlice";

export default configureStore({
  reducer: {
    auth: authReducer,
    institute : instituteReducer,
  },
});
