import { Link, useNavigate } from "react-router-dom";
import { useGlobalContext } from "../hooks/useGlobalContext";
import {
  FaHome,
  FaHeart,
  FaMoon,
  FaSun,
  FaSignInAlt,
  FaSignOutAlt,
  FaSearch,
} from "react-icons/fa";
import { MdLocalMovies } from "react-icons/md";

export const CustomHeader = () => {
  const { theme, toggleTheme, isAuthenticated, openLogoutModal } =
    useGlobalContext();
  const navigate = useNavigate();

  const handleAuthClick = () => {
    if (isAuthenticated) {
      openLogoutModal();
    } else {
      navigate("/login");
    }
  };

  return (
    <header className="custom-header">
      <Link to="/" className="logo-container">
        <div className="logo-anim-wrapper">
          <MdLocalMovies className="logo-icon logo-icon-animated" />
        </div>
        <h1>Explorador de Pelis</h1>
      </Link>

      <nav className="header-nav">
        <Link to="/" title="Inicio">
          <FaHome />
        </Link>
        <Link to="/peliculas" title="Buscador">
          <FaSearch />
        </Link>
        <Link to="/favoritos" title="Favoritos">
          <FaHeart />
        </Link>
        <button onClick={toggleTheme} className="icon-btn" title="Cambiar Tema">
          {theme === "dark" ? <FaSun /> : <FaMoon />}
        </button>
        <button
          onClick={handleAuthClick}
          className="icon-btn"
          title={isAuthenticated ? "Cerrar Sesión" : "Iniciar Sesión"}
        >
          {isAuthenticated ? <FaSignOutAlt /> : <FaSignInAlt />}
        </button>
      </nav>
    </header>
  );
};
