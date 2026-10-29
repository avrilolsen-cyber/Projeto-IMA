import './footer.css';
function Footer() {
    return (
      <footer className="main-footer">
        <div className="footer-content">
          <p>&copy; 2026 Livraria Web Comercial. Todos os direitos reservados.</p>
          <div className="social-links">
            <a href="https://github.com/avrilolsen-cyber" target="_blank" rel="noreferrer" className="social-item">
              <span>💻</span> GitHub
            </a>
            <a href="https://instagram@livraria.com" target="_blank" rel="noreferrer" className="social-item">
              <span>📸</span> Instagram
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="social-item">
              <span>👔</span> LinkedIn
            </a>
          </div>
        </div>
      </footer>
    );
  }

export default Footer