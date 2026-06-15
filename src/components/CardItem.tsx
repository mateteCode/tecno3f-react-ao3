import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../hooks/useGlobalContext";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import type { Movie } from "../types/movie";

interface Props {
  movie: Movie;
}

export const CardItem = ({ movie }: Props) => {
  const navigate = useNavigate();
  const { isFavorite, toggleFavorite } = useGlobalContext();
  const initialPoster =
    movie.Poster !== "N/A" ? movie.Poster : "/no_poster.png";
  const [posterSrc, setPosterSrc] = useState(initialPoster);

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    toggleFavorite(movie);
  };

  const handleCardClick = () => navigate(`/pelicula/${movie.imdbID}`);

  const handlePosterError = () => setPosterSrc("/no_poster.png");

  return (
    <div className="card" onClick={handleCardClick}>
      <div className="poster-container">
        <img src={posterSrc} alt={movie.Title} onError={handlePosterError} />
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
