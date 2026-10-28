
import { useState } from 'react';
import './Cadastro.css';

function Cadastro({ onVoltar }) {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [sucesso, setSucesso] = useState(false);

  function handleCadastro(event) {
    event.preventDefault();

    if (!usuario.trim() || !senha.trim()) {
      setMensagem('Preencha todos os campos!');
      setSucesso(false);
      return;
    }

    setMensagem('Conta criada com sucesso!');
    setSucesso(true);
  }

  return (
    <div className="cadastro-container">
      <div className="cadastro-box">
        <h2>Criar Conta</h2>

        <form onSubmit={handleCadastro}>
          <input
            type="text"
            placeholder="Crie seu usuário"
            value={usuario}
            onChange={(event) => setUsuario(event.target.value)}
          />

          <input
            type="password"
            placeholder="Crie sua senha"
            value={senha}
            onChange={(event) => setSenha(event.target.value)}
          />

          <button type="submit" className="cadastro-btn">
            Cadastrar
          </button>
        </form>

        {mensagem && (
          <p className={sucesso ? 'cadastro-sucesso' : 'cadastro-erro'}>
            {mensagem}
          </p>
        )}

        <p className="cadastro-footer">
          Já possui conta?{' '}
          <span onClick={onVoltar}>Fazer Login.</span>
        </p>
      </div>
    </div>
  );
}

export default Cadastro;
