import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getMovie } from "../API/Api";
import Card from "../Components/Card";
import Header from "../Components/Header";

export default function MoviesPage() {
  const [movieSearch, setMovieSearch] = useState("");
  const [movieData, setMovieData] = useState([]);

  const dispatch = useDispatch();
  const { movies } = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(getMovie());
  }, [dispatch]);

  const changeData = (e) => {
    setMovieSearch(e.target.value);
  };

  const getMovieSearch = (e) => {
    e.preventDefault();

    axios.get(`https://www.omdbapi.com/?s=${movieSearch}&apikey=96a40ac0`).then((response) => {
      console.log(response.data.Search);
      setMovieData(response.data.Search);
    });
  };

  return (
    <div>
      <Header Change={changeData} Search={movieSearch} Submit={getMovieSearch} />
      {movieData.length === 0 ? (
        <div className="flex flex-wrap m-2 justify-around gap-8 mt-10">
          {movies.map((movie) => (
            <Card Title={movie.Title} Poster={movie.Poster} />
          ))}
        </div>
      ) : (
        <div className="flex flex-wrap m-2 justify-around gap-8 mt-10">
          {movieData.map((movie) => (
            <Card Title={movie.Title} Poster={movie.Poster} />
          ))}
        </div>
      )}
    </div>
  );
}
