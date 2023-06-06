import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import instituteApi from "../api/instituteApi";

export const fetchInstitute = createAsyncThunk(
  "institute/single",
  async (id) => {
    const res = await instituteApi.fetchOne(id);
    return res;
  }
);
export const fetchAllInstitute = createAsyncThunk(
  "institute/fetch",
  async () => {
    const res = await instituteApi.fetchAll();
    return res;
  }
);
export const createInstitute = createAsyncThunk(
  "institute/create",
  async (data) => {
    try {
      const res = await instituteApi.create(data);
      return res;
    } catch (error) {
      return error && "something went wrong";
    }
  }
);
export const updateInstitute = createAsyncThunk(
  "institute/update",
  async (id, data) => {
    const res = await instituteApi.edit(id, data);
    return res;
  }
);
export const deleteInstitute = createAsyncThunk(
  "institute/delete",
  async (id) => {
    const res = await instituteApi.delete(id);
    return res;
  }
);

export const STATUS = Object.freeze({
  LOADING: "loading",
  IDLE: "idle",
  ERROR: "error",
});

const instituteSlice = createSlice({
  name: "institute",
  initialState: {
    data: [],
    status: STATUS.IDLE,
  },
  reducers: {},

  extraReducers: (builder) => {
    //Fetch Institute Table
    builder
      .addCase(fetchInstitute.pending, (state) => {
        state.status = STATUS.LOADING;
      })
      .addCase(fetchInstitute.fulfilled, (state, action) => {
        state.status = STATUS.IDLE;
        state.data = action.payload;
      })
      .addCase(fetchInstitute.rejected, (state) => {
        state.status = STATUS.ERROR;
      })

      //Fetch ALL Institute Table

      .addCase(fetchAllInstitute.pending, (state) => {
        state.status = STATUS.LOADING;
      })
      .addCase(fetchAllInstitute.fulfilled, (state, action) => {
        state.status = STATUS.IDLE;
        state.data = action.payload;
      })
      .addCase(fetchAllInstitute.rejected, (state) => {
        state.status = STATUS.ERROR;
      })

      //Create Institute Table

      .addCase(createInstitute.pending, (state) => {
        state.status = STATUS.LOADING;
      })
      .addCase(createInstitute.fulfilled, (state, action) => {
        state.status = STATUS.IDLE;
        state.data.push(action.payload);
      })
      .addCase(createInstitute.rejected, (state) => {
        state.status = STATUS.ERROR;
      })
      //Update Institute Table

      .addCase(updateInstitute.pending, (state) => {
        state.status = STATUS.LOADING;
      })
      .addCase(updateInstitute.fulfilled, (state, action) => {
        state.status = STATUS.IDLE;
        state.data = action.payload;
      })
      .addCase(updateInstitute.rejected, (state) => {
        state.status = STATUS.ERROR;
      })

      //DELETE Institute Table

      .addCase(deleteInstitute.pending, (state) => {
        state.status = STATUS.LOADING;
      })
      .addCase(deleteInstitute.fulfilled, (state, action) => {
        state.status = STATUS.IDLE;
        return state.filter(
          (institute) => institute._id !== action.payload._id
        );
      })
      .addCase(deleteInstitute.rejected, (state) => {
        state.status = STATUS.ERROR;
      });
  },
});


export default instituteSlice.reducer;