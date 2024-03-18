import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { createUser, checkUser, logoutUser } from './authAPI';
import { updateUser } from '../user/userAPI';

const initialState = {
  loggedInUser: null,
  status: 'idle',
  error: null
};

export const createUserAsync = createAsyncThunk(
  'counter/createUser',
  async (userData) => {
    const response = await createUser(userData);
    return response.data;
  }
);

export const checkUserAsync = createAsyncThunk(
  'counter/checkUser',
  async (loginInfo) => {
    const response = await checkUser(loginInfo);
    return response.data;
  }
);

export const updateUserAsync = createAsyncThunk(
  'counter/updateUser',
  async (update) => {
    const response = await updateUser(update);
    return response.data;
  }
);

export const logoutUserAsync = createAsyncThunk(
  'counter/logoutUser',
  async () => {
    const response = await logoutUser();
    return response.data;
  }
);

export const authSlice = createSlice({
  name: 'user',
  initialState,

  // reducers: {
  //   increment: (state) => {
  //     state.value += 1;
  //   },
  // },

  extraReducers: (builder) => {
    builder
      .addCase(createUserAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(createUserAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.loggedInUser = action.payload;
      })
      .addCase(checkUserAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(checkUserAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.loggedInUser = action.payload;
      })
      .addCase(checkUserAsync.rejected, (state, action) => {
        state.status = 'idle';
        state.error = action.error;
      })
      .addCase(updateUserAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(updateUserAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.loggedInUser = action.payload;
      })
      .addCase(logoutUserAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(logoutUserAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.loggedInUser = null;
      });
  },
});

export const { increment } = authSlice.actions;
export const selectError = (state)=>state.auth.error;
export const selectLoggedInUser = (state) => state.auth.loggedInUser;

export default authSlice.reducer;
