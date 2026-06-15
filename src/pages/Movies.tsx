import { SearchBar } from "../components/SearchBar";
import { GridResultados } from "../components/GridResultados";
import { useMovies } from "../hooks/useMovies";
import { Loader } from "../components/Loader";
import { Pagination } from "../components/Pagination";
import { RecentBadges } from "../components/RecentBadges";

export const Movies = () => {
  const {
    movies,
    totalResults,
    loading,
    error,
    query,
    page,
    handleSearch,
    handlePageChange,
    searches,
  } = useMovies();

  return (
    <div className="movies-page">
      <SearchBar initialSearchTerm={query} onQuery={handleSearch} />
      <RecentBadges searches={searches} onSelectBadge={handleSearch} />

      {totalResults > 0 && !loading && (
        <p className="results-count">
          Se encontraron {totalResults} resultados para "{query}"
        </p>
      )}

      {loading && <Loader text="Buscando películas..." />}

      {!query && !loading && (
        <p className="no-results">
          Ingresá una película para empezar a buscar.
        </p>
      )}

      {error && query && !loading && <p className="error-text">{error}</p>}

      {!loading && !error && query && movies.length > 0 && (
        <>
          <Pagination
            currentPage={page}
            totalResults={totalResults}
            onPageChange={handlePageChange}
          />

          <GridResultados movies={movies} />

          <Pagination
            currentPage={page}
            totalResults={totalResults}
            onPageChange={handlePageChange}
          />
        </>
      )}
    </div>
  );
};
