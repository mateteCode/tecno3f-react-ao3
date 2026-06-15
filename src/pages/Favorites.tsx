import { useGlobalContext } from "../hooks/useGlobalContext";
import { GridResultados } from "../components/GridResultados";

export const Favorites = () => {
  const { favorites } = useGlobalContext();

  return (
    <div className="favorites-page">
      <h2 className="favorites-title">Tus Películas Favoritas</h2>
      {favorites.length === 0 ? (
        <p className="no-results">
          Aún no agregaste ninguna película a favoritos.
        </p>
      ) : (
        <GridResultados movies={favorites} />
      )}
    </div>
  );
};
