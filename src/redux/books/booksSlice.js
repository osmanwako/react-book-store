import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const domain = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net';
const path = '/bookstoreApi/apps/tfleH2JbMQnGF2hWxOL9/books';
const url = `${domain}${path}`;

const initialState = {
  book: [],
  status: 'idle',
  load: Date.now(),
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

export const addBook = createAsyncThunk('bookstores/addBook', async (book) => {
  const response = await axios.post(url, book);
  return response.data;
});
export const Bookslice = createSlice({
  name: 'bookstore',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBooks.pending, (state) => {
      state.status = 'pending';
      state.book = [];
    }).addCase(fetchBooks.fulfilled, (state, action) => {
      state.status = 'fulfilled';
      state.book = action.payload;
    }).addCase(fetchBooks.rejected, (state, action) => {
      state.status = 'rejected';
      state.message = action.payload;
      state.book = [];
    });
    builder.addCase(deleteBook.fulfilled, (state) => {
      state.load += 1;
    });
    builder.addCase(addBook.fulfilled, (state) => {
      state.load += 1;
    });
  },
});
export const { setLoading } = Bookslice;
export default Bookslice.reducer;
