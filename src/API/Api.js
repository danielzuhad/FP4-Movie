import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getMovie = createAsyncThunk("movies/getMovies", async () => {
  const response = await axios.get("https://www.omdbapi.com/?s=batman&apikey=96a40ac0");
  return response.data.Search;
});
