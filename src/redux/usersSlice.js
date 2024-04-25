import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
  isPending: false,
  error: false,
};

export const getUsers = createAsyncThunk("users/getUsers", async () => {
  const apiUrl = import.meta.env.VITE_REACT_APP_API_URL;
  const response = await fetch(`${apiUrl}/users`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  if (data.error) {
    throw new Error(data.message);
  }
  return data;
});

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.pending, (state) => {
        state.isPending = true;
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.isPending = false;
        state.error = false;
        state.list = action.payload;
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.isPending = false;
        state.error = action.error.message;
      });
  },
});

export default usersSlice.reducer;
