import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
  currentUser: [],
  currentUserRepositories: [],
  currentRepositoryContent: [],
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

export const getUser = createAsyncThunk("users/getUser", async (user) => {
  const apiUrl = import.meta.env.VITE_REACT_APP_API_URL;
  const response = await fetch(`${apiUrl}/users/${user}`, {
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

export const getUserRepositories = createAsyncThunk(
  "users/getUserRepositories",
  async (user) => {
    const apiUrl = import.meta.env.VITE_REACT_APP_API_URL;

    const response = await fetch(`${apiUrl}/users/${user}/repos`, {
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
  }
);

export const getRepository = createAsyncThunk(
  "users/getRepository",
  async ({ user, repository }) => {
    const apiUrl = import.meta.env.VITE_REACT_APP_API_URL;
    const token = import.meta.env.VITE_TOKEN;

    const response = await fetch(
      `${apiUrl}/repos/${user}/${repository}/contents`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    const totalData = {
      data,
    };

    if (data.error) {
      throw new Error(data.message);
    }
    return totalData;
  }
);

export const getRepositoryContent = createAsyncThunk(
  "users/getRepositoryContent",
  async (path) => {
    const apiUrl = import.meta.env.VITE_REACT_APP_API_URL;
    const token = import.meta.env.VITE_TOKEN;

    const response = await fetch(`${apiUrl}/repos${path}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    const totalData = {
      data,
    };
    if (data.error) {
      throw new Error(data.message);
    }
    return totalData;
  }
);

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
      })
      .addCase(getUser.pending, (state) => {
        state.isPending = true;
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.isPending = false;
        state.error = false;
        state.currentUser = action.payload;
      })
      .addCase(getUser.rejected, (state, action) => {
        state.isPending = false;
        state.error = action.error.message;
      })
      .addCase(getUserRepositories.pending, (state) => {
        state.isPending = true;
      })
      .addCase(getUserRepositories.fulfilled, (state, action) => {
        state.isPending = false;
        state.error = false;
        state.currentUserRepositories = action.payload;
      })
      .addCase(getUserRepositories.rejected, (state, action) => {
        state.isPending = false;
        state.error = action.error.message;
      })
      .addCase(getRepository.pending, (state) => {
        state.isPending = true;
      })
      .addCase(getRepository.fulfilled, (state, action) => {
        state.isPending = false;
        state.error = false;
        state.currentRepositoryContent = action.payload.data;
      })
      .addCase(getRepository.rejected, (state, action) => {
        state.isPending = false;
        state.error = action.error.message;
      })
      .addCase(getRepositoryContent.pending, (state) => {
        state.isPending = true;
      })
      .addCase(getRepositoryContent.fulfilled, (state, action) => {
        state.isPending = false;
        state.error = false;
        state.currentRepositoryContent = action.payload.data;
      })
      .addCase(getRepositoryContent.rejected, (state, action) => {
        state.isPending = false;
        state.error = action.error.message;
      });
  },
});

export default usersSlice.reducer;
