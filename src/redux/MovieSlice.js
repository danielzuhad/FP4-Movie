import { createSlice } from "@reduxjs/toolkit";
import { getMovie } from "../API/Api";

const initialState = {
  movies: [],
};

const MovieSlice = createSlice({
  name: "movies",
  initialState,
  extraReducers: {
    [getMovie.fulfilled]: (state, { payload }) => {
      state.movies = payload;
    },
  },
});

export default MovieSlice.reducer;
