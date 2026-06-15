import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../context/GlobalContext";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import type { Movie } from "../types/movie";

export const CardItem = ({ movie }: { movie: Movie }) => {
  const navigate = useNavigate();
  const { isFavorite, toggleFavorite } = useGlobalContext();
  const initialPoster =
    movie.Poster !== "N/A" ? movie.Poster : "/no_poster.png";
  const [posterSrc, setPosterSrc] = useState(initialPoster);

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Evita que al tocar el corazón, nos lleve a la ruta de detalle
    toggleFavorite(movie);
  };

  return (
    <div className="card" onClick={() => navigate(`/pelicula/${movie.imdbID}`)}>
      <div className="poster-container">
        <img
          src={posterSrc}
          alt={movie.Title}
          onError={() => setPosterSrc("/no_poster.png")}
        />
        <button className="heart-overlay" onClick={handleFavoriteClick}>
          {isFavorite(movie.imdbID) ? (
            <FaHeart className="heart-filled" />
          ) : (
            <FaRegHeart className="heart-empty" />
          )}
        </button>
      </div>
      <h3>{movie.Title}</h3>
      <p>{movie.Year}</p>
    </div>
  );
};
