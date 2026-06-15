import { FaGithub, FaRocket, FaWhatsapp, FaInstagram } from "react-icons/fa";

export const CustomFooter = () => {
  return (
    <footer className="custom-footer">
      <div className="footer-content">
        <p>Sitio desarrollado por Matías Lorenzo</p>
        <div className="social-icons">
          <a href="#" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
          <a href="#" target="_blank" rel="noreferrer">
            <FaRocket />
          </a>
          <a href="#" target="_blank" rel="noreferrer">
            <FaWhatsapp />
          </a>
          <a href="#" target="_blank" rel="noreferrer">
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default CustomFooter;
