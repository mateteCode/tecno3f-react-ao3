import { useGlobalContext } from "../hooks/useGlobalContext";

export const LogoutModal = () => {
  const { isLogoutModalOpen, closeLogoutModal, logout } = useGlobalContext();

  if (!isLogoutModalOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h3>¿Cerrar Sesión?</h3>
        <p>¿Estás seguro que querés abandonar la sala de cine?</p>
        <div className="modal-actions">
          <button className="btn-outline" onClick={closeLogoutModal}>
            Cancelar
          </button>
          <button className="btn-primary" onClick={logout}>
            Sí, Salir
          </button>
        </div>
      </div>
    </div>
  );
};
