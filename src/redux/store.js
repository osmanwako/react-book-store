import { configureStore } from "@reduxjs/toolkit";
import bookreducer from "./books/booksSlice";

const Store = configureStore({
    reducer: {
        bookstore: bookreducer,
    }
});