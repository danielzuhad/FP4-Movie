import { configureStore } from "@reduxjs/toolkit";
import MovieReducer from "./MovieSlice";

export const Store = configureStore({
  reducer: {
    movies: MovieReducer,
  },
});
