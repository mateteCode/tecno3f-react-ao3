import { SearchBar } from "../components/SearchBar";
import { GridResultados } from "../components/GridResultados";
import { useMovies } from "../hooks/useMovies";

export const Home = () => {
  const { movies, loading, error, searchMovies } = useMovies("Star Wars");

  return (
    <>
      <SearchBar initialSearchTerm="Star Wars" onQuery={searchMovies} />
      {loading && <p className="loading-text">Cargando películas...</p>}
      {error && !loading && <p className="error-text">{error}</p>}
      {!loading && !error && <GridResultados movies={movies} />}
    </>
  );
};
