import React from "react";
import type { Movie } from "../types/movie";
import { CardItem } from "./CardItem";

interface GridResultadosProps {
  movies: Movie[];
}

export const GridResultados: React.FC<GridResultadosProps> = ({ movies }) => {
  if (movies.length === 0) {
    return (
      <p className="no-results">
        No se encontraron películas. Intentá con otra búsqueda.
      </p>
    );
  }

  return (
    <div className="movies-grid">
      {movies.map((movie) => (
        <CardItem key={movie.imdbID} movie={movie} />
      ))}
    </div>
  );
};
