import { useState, useEffect } from "react";
import type { Movie } from "../types/movie";
import { fetchMoviesService } from "../services/movieService";

export const useMovies = (initialQuery: string) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const searchMovies = async (query: string) => {
    setLoading(true);
    setError(null);
    try {
      const results = await fetchMoviesService(query);
      if (results.length === 0) setError("No se encontraron películas.");
      setMovies(results);
    } catch (err) {
      setError("Error al conectar con la API.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    searchMovies(initialQuery);
  }, [initialQuery]);

  return { movies, loading, error, searchMovies };
};
