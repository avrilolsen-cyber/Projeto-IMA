
export default function Header({ currentScreen, setCurrentScreen, cartCount, user, setUser }) {
    return (
      <header className="header">
        <div className="brand-section">
          <div className="brand" onClick={() => setCurrentScreen('home')} style={{ cursor: 'pointer' }}>
            <span className="header-heart">♥</span>
            <span className="header-title">LIVRARIA COMMERCIAL</span>
          </div>
        </div>
  
        <nav className="top-nav">
          <button className={`nav-btn ${currentScreen === 'home' ? 'active' : ''}`} onClick={() => setCurrentScreen('home')}>Casa</button>
          <button className={`nav-btn ${currentScreen === 'search' ? 'active' : ''}`} onClick={() => setCurrentScreen('search')}>Pesquisar</button>
          <button className={`nav-btn ${currentScreen === 'cart' ? 'active' : ''}`} onClick={() => setCurrentScreen('cart')}>
            Carrinho ({cartCount})
          </button>
          {user ? (
            <button className="nav-btn" onClick={() => setUser(null)}>Sair ({user})</button>
          ) : (
            <button className={`nav-btn ${currentScreen === 'login' ? 'active' : ''}`} onClick={() => setCurrentScreen('login')}>Conta</button>
          )}
        </nav>
      </header>
    );
  }
  