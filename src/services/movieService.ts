import type { Movie, MovieDetail, OMDBResponse } from "../types/movie";

const API_KEY = import.meta.env.VITE_OMDB_API_KEY;
const BASE_URL = import.meta.env.VITE_OMDB_BASE_URL;

export const fetchMoviesService = async (query: string): Promise<Movie[]> => {
  if (!query.trim()) return [];
  const response = await fetch(
    `${BASE_URL}?s=${query}&type=movie&apikey=${API_KEY}`,
  );
  const data: OMDBResponse = await response.json();
  console.log(data);
  return data.Response === "True" && data.Search ? data.Search : [];
};

export const fetchMovieByIdService = async (
  id: string,
): Promise<MovieDetail> => {
  const response = await fetch(
    `${BASE_URL}?i=${id}&plot=full&apikey=${API_KEY}`,
  );
  const data = await response.json();
  if (data.Response === "False") throw new Error(data.Error);
  return data;
};
