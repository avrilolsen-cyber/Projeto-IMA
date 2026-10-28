
import { useState } from "react";
import "./header.css";

 function Header({
  currentScreen,
  setCurrentScreen,
  cartCount,
  user,
  setUser
}) {
  const [mostrarPerfil, setMostrarPerfil] = useState(false);

  return (
    <header className="header">
      <div className="brand">
        <span className="header-heart">♥</span>
        <span className="header-title">BOOKS</span>
      </div>

      <nav className="top-nav">
        <button onClick={() => setCurrentScreen("home")}>
          Início
        </button>

        <button onClick={() => setCurrentScreen("library")}>
          Biblioteca
        </button>

        <button onClick={() => setCurrentScreen("cart")}>
          Carrinho ({cartCount})
        </button>

        <div className="perfil-container">
          <button
            className="perfil-botao"
            onClick={() => setMostrarPerfil(!mostrarPerfil)}
          >
            {user?.foto ? (
              <img
                src={user.foto}
                alt="Foto do perfil"
                className="perfil-avatar"
              />
            ) : (
              <span className="perfil-avatar perfil-inicial">
                {user?.nome?.charAt(0)?.toUpperCase() || "👤"}
              </span>
            )}

            <span>{user?.nome || "Minha conta"}</span>
            <span>⌄</span>
          </button>

          {mostrarPerfil && (
            <div className="perfil-menu">
              <div className="perfil-info">
                {user?.foto ? (
                  <img
                    src={user.foto}
                    alt="Foto do perfil"
                    className="perfil-foto-grande"
                  />
                ) : (
                  <div className="perfil-foto-grande perfil-inicial">
                    {user?.nome?.charAt(0)?.toUpperCase() || "👤"}
                  </div>
                )}

                <h3>{user?.nome || "Leitor(a)"}</h3>
                <p>{user?.email || "E-mail não informado"}</p>
              </div>

              <button
                className="perfil-opcao"
                onClick={() => {
                  setMostrarPerfil(false);
                  setCurrentScreen("profile");
                }}
              >
                Meu perfil
              </button>

              <button
                className="perfil-opcao"
                onClick={() => {
                  setMostrarPerfil(false);
                  setCurrentScreen("library");
                }}
              >
                Minha biblioteca
              </button>
              <button
                className="perfil-sair"
                onClick={() => {
                   setUser(null);
                   setMostrarPerfil(false);
                   setCurrentScreen("home");
                }}
              >
                Sair da conta
              </button>
      
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
export default Header