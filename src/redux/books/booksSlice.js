import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from "uuid";

const initialState = {
  books: [
    {
      id: uuidv4(),
      title: 'The Great Gatsby',
      author: 'John Smith',
      category: 'Fiction',
    },
    {
      id: uuidv4(),
      title: 'Anna Karenina',
      author: 'Leo Tolstoy',
      category: 'Fiction',
    },
    {
      id: uuidv4(),
      title: 'The Selfish Gene',
      author: 'Richard Dawkins',
      category: 'Nonfiction',
    },
  ],
  total: 0,
};

export const Bookslice = createSlice({
  name: 'bookstore',
  initialState,
  reducers: {
    addbook: (state, { payload }) => {
      const book = { ...payload, progress: 0 };
      state.books = [...state.books, { ...book }];
      state.total += 1;
    },
    removebook: (state, action) => {
      if (state.books && state.books.length > 1) {
        const id = action.payload;
        state.books = state.books.filter((book) => book.id !== id);
        state.total -= 1;
      }
    },
  },
});

export const { addbook, removebook } = Bookslice.actions;

export default Bookslice.reducer;
