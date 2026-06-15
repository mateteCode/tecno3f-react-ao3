import { Link } from "react-router-dom";
import { FaSearch, FaHeart, FaUser, FaSignOutAlt } from "react-icons/fa";
import { MdLocalMovies } from "react-icons/md"; // Importamos el ícono
import { useGlobalContext } from "../hooks/useGlobalContext";

export const Home = () => {
  const { isAuthenticated, openLogoutModal } = useGlobalContext();
  return (
    <div className="landing-container">
      <div className="hero-background">
        <MdLocalMovies className="bg-icon-animated" />
      </div>
      <div className="hero-section">
        <h1 className="hero-title">Bienvenido al Explorador de Pelis</h1>
        <p className="hero-subtitle">
          Tu base de datos definitiva. Buscá tus películas favoritas, guardalas
          en tu colección personal y explorá información detallada.
        </p>
        <div className="action-buttons">
          <Link to="/peliculas" className="btn-primary">
            <FaSearch /> Iniciar Búsqueda
          </Link>
          <Link to="/favoritos" className="btn-secondary">
            <FaHeart /> Mis Favoritos
          </Link>
          {isAuthenticated ? (
            <button onClick={openLogoutModal} className="btn-outline">
              <FaSignOutAlt /> Cerrar Sesión
            </button>
          ) : (
            <Link to="/login" className="btn-outline">
              <FaUser /> Ingresar
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
