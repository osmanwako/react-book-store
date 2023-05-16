import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    books: [],
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
            const id = action.payload;
            state.books = state.books.filter((book) => book.id !== id);
            state.total -= 1;
        },
    },
});

export const { addbook, removebook } = Bookslice.actions;

export default Bookslice.reducer;
