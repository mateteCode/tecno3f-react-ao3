import { Link } from "react-router-dom";

export const NotFound = () => (
  <div className="not-found">
    <h2>404 - Página no encontrada</h2>
    <p>Parece que te perdiste en el hiperespacio.</p>
    <Link to="/">Volver al Inicio</Link>
  </div>
);
