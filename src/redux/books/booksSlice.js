import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

const domain = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net';
const path = '/bookstoreApi/apps/tfleH2JbMQnGF2hWxOL9/books';
const url = `${domain}${path}`;

const initialState = {
  books: [],
  status: 'idle',
  message: 'Everything is good',
  total: 0,
};

export const fetchBooks = createAsyncThunk('bookstores/fetchBooks', async () => {
  const response = await axios.get(url);
  return response.data;
});

export const deleteBook = createAsyncThunk('bookstores/deleteBook', async (id) => {
  const response = await axios.delete(`${url}/${id}`);
  return response.data;
});

export const addBook = createAsyncThunk('bookstores/fetchBooks', async (book) => {
  const response = await axios.get(url);
  return response.data;
});
export const Bookslice = createSlice({
  name: 'bookstore',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchBooks.pending, (state) => {
      state.status = 'pending';
      state.books = [];
    }).addCase(fetchBooks.fulfilled, (state, action) => {
      state.status = 'fulfilled';
      state.books = action.payload;
    }).addCase(fetchBooks.rejected, (state, action) => {
      state.status = 'rejected';
      state.message = action.payload;
      state.users = [];
    });
  },
});

export default Bookslice.reducer;
