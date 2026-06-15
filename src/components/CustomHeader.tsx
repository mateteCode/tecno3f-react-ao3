import { Link, useNavigate } from "react-router-dom";
import { useGlobalContext } from "../context/GlobalContext";
import {
  FaHome,
  FaHeart,
  FaMoon,
  FaSun,
  FaSignInAlt,
  FaSignOutAlt,
} from "react-icons/fa";
import { MdLocalMovies } from "react-icons/md";

export const Header = () => {
  const { theme, toggleTheme, isAuthenticated, logout } = useGlobalContext();
  const navigate = useNavigate();

  const handleAuthClick = () => {
    if (isAuthenticated) {
      logout();
    } else {
      navigate("/login");
    }
  };

  return (
    <header className="custom-header">
      <Link to="/" className="logo-container">
        <MdLocalMovies className="logo-icon" />
        <h1>Explorador de Pelis</h1>
      </Link>

      <nav className="header-nav">
        <Link to="/" title="Inicio">
          <FaHome />
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
