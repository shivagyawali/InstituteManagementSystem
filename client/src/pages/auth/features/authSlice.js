import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import jwt_decode from "jwt-decode";
import authApi from "../api/auth";
import { toast } from "react-hot-toast";
import Cookies from "js-cookie";

const token = Cookies.get("token") || null;
const tokenData = token ? jwt_decode(token) : null;

const initialState = {
  token: token,
  userInfo: tokenData,
  isLoading: false,
  error: null,
  success: null,
};

export const login = createAsyncThunk(
  "api/auth/login",
  async ({ username, password }, { rejectWithValue }) => {
    try {
      const data = await authApi.login(username, password);
      return data;
    } catch (error) {
      if (error.response && error.response.data && error.response.data.msg) {
        return rejectWithValue(error.response.data.msg);
      } else {
        return rejectWithValue("An error occurred while logging in.");
      }
    }
  }
);
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setTokens: (state, action) => {
      const { token } = action.payload;
      state.token = token;
      Cookies.set("token", token);
    },
    clearTokens: (state) => {
      state.token = null;
      state.success = false;
      Cookies.remove("token", { path: "" });
      state.userInfo = null;
      toast("You are logged out!", {
        icon: "👏",
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
    },
    setUserInfo: (state, action) => {
      state.userInfo = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    setError: (state, action) => {
      state.error = action.payload; // set error message in state
      state.isLoading = false;
      toast.error(state.error); // show error toast message
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true;
        state.success = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        const { token } = action.payload;
        const user = jwt_decode(token);
        state.token = token;
        state.isLoading = false;
        state.error = null;
        state.userInfo = user;
        Cookies.set("token", token);
        toast.success(`Welcome back !!`);
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.success = null;
        state.error = action.payload || "Logging Failed!!";
        toast.error(state.error); // show error toast message
      });
  },
});

export const { setTokens, setError, clearTokens, setUserInfo } =
  authSlice.actions;

export const selectToken = (state) => state.auth.token;
export const selectUserInfo = (state) => state.auth.userInfo;
export const selectIsLoading = (state) => state.auth.isLoading;
export const selectError = (state) => state.auth.error;
export const selectSuccess = (state) => state.auth.success;
export default authSlice.reducer;
