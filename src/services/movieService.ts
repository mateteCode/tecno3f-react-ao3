import type { Movie, MovieDetail, OMDBResponse } from "../types/movie";

const API_KEY = import.meta.env.VITE_OMDB_API_KEY;
const BASE_URL = import.meta.env.VITE_OMDB_BASE_URL;

export const fetchMoviesService = async (
  query: string,
  page: number = 1,
): Promise<{ results: Movie[]; total: number }> => {
  if (!query.trim()) return { results: [], total: 0 };

  const response = await fetch(
    `${BASE_URL}?s=${query}&type=movie&page=${page}&apikey=${API_KEY}`,
  );
  const data: OMDBResponse = await response.json();

  return {
    results: data.Response === "True" && data.Search ? data.Search : [],
    total: data.totalResults ? parseInt(data.totalResults, 10) : 0,
  };
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
