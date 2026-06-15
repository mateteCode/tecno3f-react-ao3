import { useState, useEffect } from "react";
import type { MovieDetail } from "../types/movie";
import { fetchMovieByIdService } from "../services/movieService";

export const useMovieDetail = (id: string | undefined) => {
  const [movie, setMovie] = useState<MovieDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;
    const loadMovie = async () => {
      setLoading(true);
      try {
        const data = await fetchMovieByIdService(id);
        setMovie(data);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("Error al cargar los detalles.");
        }
      } finally {
        setLoading(false);
      }
    };
    loadMovie();
  }, [id]);

  return { movie, loading, error };
};
