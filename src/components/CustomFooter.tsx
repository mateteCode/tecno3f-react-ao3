import { FaGithub, FaRocket } from "react-icons/fa";

export const CustomFooter = () => {
  return (
    <footer className="custom-footer">
      <div className="footer-content">
        <p>Sitio desarrollado por Matías Lorenzo</p>
        <div className="social-icons">
          <a
            href="https://github.com/mateteCode/tecno3f-react-ao3"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://tecno3f-react-ao3.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <FaRocket />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default CustomFooter;
