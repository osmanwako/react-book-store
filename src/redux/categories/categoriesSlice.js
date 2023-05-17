import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
  status: 'Under construction',
};

export const Categoryslice = createSlice({
  name: 'bookstore',
  initialState,
  reducers: {
    checkstatus: (state) => state.status,
  },
});

export const { checkstatus } = Categoryslice.actions;

export default Categoryslice.reducer;
