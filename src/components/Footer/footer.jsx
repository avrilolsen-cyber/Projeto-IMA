import './footer.css';
import { FaGithub } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
    return (
      <footer className="main-footer">
        <div className="footer-content">
          <p>&copy; 2026 Livraria Web Comercial. Todos os direitos reservados.</p>
          <div className="social-links">
            <a href="https://github.com/avrilolsen-cyber/Projeto-IMA.git" target="_blank" rel="noreferrer" className="social-item">
              <span><FaGithub /></span> GitHub
            </a>
            <a href="https://instagram@livraria.com" target="_blank" rel="noreferrer" className="social-item">
              <span><IoLogoInstagram /></span> Instagram
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="social-item">
              <span><FaLinkedin /></span> LinkedIn
            </a>
          </div>
        </div>
      </footer>
    );
  }

export default Footer