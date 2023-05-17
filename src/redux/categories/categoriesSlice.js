import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
  status: 'Under Construction',
};

export const Categoryslice = createSlice({
  name: 'bookcategory',
  initialState,
  reducers: {
    checkstatus: (state) => state.status,
  },
});

export const { checkstatus } = Categoryslice.actions;

export default Categoryslice.reducer;
