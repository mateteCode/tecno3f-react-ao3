import { useParams, useNavigate } from "react-router-dom";
import { useMovieDetail } from "../hooks/useMovieDetail";
import { useGlobalContext } from "../hooks/useGlobalContext";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { Loader } from "../components/Loader";

export const Detail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { movie, loading, error } = useMovieDetail(id);
  const { toggleFavorite, isFavorite } = useGlobalContext();

  if (loading) return <Loader text="Buscando detalles..." />;
  if (error || !movie)
    return <p className="error-text">Película no encontrada.</p>;

  const movieToSave = {
    Title: movie.Title,
    Year: movie.Year,
    imdbID: movie.imdbID,
    Type: movie.Type,
    Poster: movie.Poster,
  };

  return (
    <div className="detail-container">
      <button onClick={() => navigate(-1)} className="back-btn">
        Volver
      </button>
      <div className="detail-card">
        <div className="poster-container-detail">
          <img
            src={movie.Poster !== "N/A" ? movie.Poster : "/no_poster.png"}
            alt={movie.Title}
          />
          <button
            className="heart-overlay detail-overlay"
            onClick={() => toggleFavorite(movieToSave)}
          >
            {isFavorite(movie.imdbID) ? (
              <FaHeart className="heart-filled" />
            ) : (
              <FaRegHeart className="heart-empty" />
            )}
          </button>
        </div>

        <div className="detail-info">
          <h2>
            {movie.Title} ({movie.Year})
          </h2>
          <p>
            <strong>Director:</strong> {movie.Director}
          </p>
          <p>
            <strong>Actores:</strong> {movie.Actors}
          </p>
          <p>
            <strong>Género:</strong> {movie.Genre}
          </p>
          <p>
            <strong>Trama:</strong> {movie.Plot}
          </p>
          <p>
            <strong>Premios:</strong> {movie.Awards}
          </p>

          <button
            className={`fav-btn ${isFavorite(movie.imdbID) ? "active" : ""}`}
            onClick={() => toggleFavorite(movieToSave)}
          >
            {isFavorite(movie.imdbID)
              ? "★ Quitar de Favoritos"
              : "☆ Agregar a Favoritos"}
          </button>
        </div>
      </div>
    </div>
  );
};
