
import { useState } from "react";
import "./login.css";

function Login({ onCadastro, onEntrar }) {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");

  function entrar(e) {
    e.preventDefault();

    const usuarios = JSON.parse(
      localStorage.getItem("usuariosLivraria") || "[]"
    );

    const encontrado = usuarios.find(
      (item) =>
        item.usuario.toLowerCase() ===
          usuario.trim().toLowerCase() &&
        item.senha === senha
    );

    if (!encontrado) {
      setErro("Usuário ou senha incorretos. Tente novamente.");
      return;
    }

    setErro("");
    onEntrar(encontrado.usuario);
  }

  return (
    <main className="auth-page">
      <section className="auth-card">
        <h2>Bem-vindo à Livraria!</h2>
        <p>Entre na sua conta para continuar lendo.</p>

        <form onSubmit={entrar}>
          <label htmlFor="usuario">Usuário</label>
          <input
            id="usuario"
            type="text"
            placeholder="Digite seu usuário"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
            autoComplete="username"
            required
          />

          <label htmlFor="senha">Senha</label>
          <input
            id="senha"
            type="password"
            placeholder="Digite sua senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            autoComplete="current-password"
            required
          />

          {erro && <p className="auth-error">{erro}</p>}

          <button className="auth-button" type="submit">
            Entrar
          </button>
        </form>

        <p className="auth-footer">
          Ainda não tem conta?{" "}
          <button
            className="auth-link"
            type="button"
            onClick={onCadastro}
          >
            Cadastre-se
          </button>
        </p>
      </section>
    </main>
  );
}

export default Login;
