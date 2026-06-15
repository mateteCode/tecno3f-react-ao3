import { Link } from "react-router-dom";
import { FaSearch, FaHeart, FaUser } from "react-icons/fa";

export const Home = () => {
  return (
    <div className="landing-container">
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
          <Link to="/login" className="btn-outline">
            <FaUser /> Ingresar
          </Link>
        </div>
      </div>
    </div>
  );
};
