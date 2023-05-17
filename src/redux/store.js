import { configureStore } from '@reduxjs/toolkit';
import bookreducer from './books/booksSlice';
import categoryreducer from './categories/categoriesSlice';

const Store = configureStore({
  reducer: {
    bookstore: bookreducer,
    category: categoryreducer,
  },
});

export default Store;
