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
        {/* Mudado de 'Casa' para 'Início' */}
        <button 
          className={`nav-btn ${currentScreen === 'home' ? 'active' : ''}`} 
          onClick={() => setCurrentScreen('home')}
        >
          Início
        </button>
        
        <button 
          className={`nav-btn ${currentScreen === 'search' ? 'active' : ''}`} 
          onClick={() => setCurrentScreen('search')}
        >
          Pesquisar
        </button>
        
        <button 
          className={`nav-btn ${currentScreen === 'cart' ? 'active' : ''}`} 
          onClick={() => setCurrentScreen('cart')}
        >
          Carrinho ({cartCount})
        </button>

        {user ? (
          <button className="nav-btn" onClick={() => setUser(null)}>Sair ({user})</button>
        ) : (
          <>
            {/* Mantém o botão de Entrar na Conta */}
            <button 
              className={`nav-btn ${currentScreen === 'login' ? 'active' : ''}`} 
              onClick={() => setCurrentScreen('login')}
            >
              Conta
            </button>
            
            {/* Adicionado o botão especial de Abrir Conta */}
            <button 
              className={`nav-btn btn-abrir-conta ${currentScreen === 'cadastro' ? 'active' : ''}`} 
              onClick={() => setCurrentScreen('cadastro')}
            >
              Abrir Conta
            </button>
          </>
        )}
      </nav>
    </header>
  );
}
