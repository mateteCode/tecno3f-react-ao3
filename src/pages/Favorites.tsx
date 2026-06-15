import { useGlobalContext } from "../hooks/useGlobalContext";
import { GridResultados } from "../components/GridResultados";

export const Favorites = () => {
  const { favorites } = useGlobalContext();

  return (
    <div className="favorites-page">
      <h2 style={{ textAlign: "center", marginTop: "2rem" }}>
        Tus Películas Favoritas
      </h2>
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
