import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import type { Movie } from "../types/movie";
import { fetchMoviesService } from "../services/movieService";
import { useRecentSearches } from "./useRecentSearches";

export const useMovies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { addSearch, searches } = useRecentSearches();

  // Si existe en el localStorage (incluso si es un string vacío ""), lo usamos.
  // Si es null (primera vez que entra), usamos el historial o "Batman".
  const savedLastSearch = localStorage.getItem("lastQuery");
  const initialSearch =
    savedLastSearch !== null
      ? savedLastSearch
      : searches.length > 0
        ? searches[0]
        : "Batman";
  const savedLastPage = localStorage.getItem("lastPage") || "1";

  const query = searchParams.has("q")
    ? searchParams.get("q") || ""
    : initialSearch;
  const page = parseInt(searchParams.get("page") || savedLastPage, 10);

  const [movies, setMovies] = useState<Movie[]>([]);
  const [totalResults, setTotalResults] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!searchParams.has("q") || !searchParams.has("page")) {
      setSearchParams({ q: query, page: page.toString() }, { replace: true });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    // Guardamos siempre el valor actual, incluso si está vacío
    localStorage.setItem("lastQuery", query);
    localStorage.setItem("lastPage", page.toString());

    // Si borraron el input, limpiamos la grilla y no hacemos la petición HTTP
    if (!query.trim()) {
      setMovies([]);
      setTotalResults(0);
      setError(null);
      return;
    }

    const searchMovies = async () => {
      setLoading(true);
      setError(null);
      try {
        const { results, total } = await fetchMoviesService(query, page);
        if (results.length === 0) {
          setError("No se encontraron películas.");
          setMovies([]);
          setTotalResults(0);
        } else {
          setMovies(results);
          setTotalResults(total);
          addSearch(query); // Agregamos a los badges
        }
      } catch (err) {
        setError("Error al conectar con la API.");
      } finally {
        setLoading(false);
      }
    };

    searchMovies();
  }, [query, page]);

  const handleSearch = (newQuery: string) => {
    setSearchParams({ q: newQuery, page: "1" });
  };

  const handlePageChange = (newPage: number) => {
    setSearchParams({ q: query, page: newPage.toString() });
  };

  // Exportamos searches desde acá para sincronizar todo perfectamente
  return {
    movies,
    totalResults,
    loading,
    error,
    query,
    page,
    handleSearch,
    handlePageChange,
    searches,
  };
};
