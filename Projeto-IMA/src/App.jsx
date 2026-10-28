
import { useState } from "react";

import Header from "./components/Header/header";
import Main from "./components/Main/main";
import Footer from "./components/Footer/footer";
import Login from "./components/Login/login";
import "./index.css";
import "./App.css";

// LIVROS DA LOJA
const BOOKS_DATABASE = [
  {
    id: 0,
    topic: "Romance",
    accent: "#E8A5B0",
    title: "Melhor do Que Nos Filmes",
    author: "Lynn Painter",
    price: "39,90",
    img: "https://images.dlivros.org/Lynn-Painter/melhor-filmes-lynn-painter_large.webp",
    synopsis:
      "Liz Buxbaum precisa da ajuda de seu vizinho para chamar a atenção de seu antigo crush, mas descobre que o amor pode estar mais perto do que imagina."
  },
  {
    id: 1,
    topic: "Romance",
    accent: "#C3A2C8",
    title: "Love Hypothesis",
    author: "Ali Hazelwood",
    price: "29,90",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyJkEnzuSsTGQEvTS0x6PbEN4XhRUqQ_0eUxE-Sx_jyw&s",
    synopsis:
      "Uma aluna de doutorado em biologia inventa um namoro de mentira com um professor."
  },
  {
    id: 2,
    topic: "Fantasia",
    accent: "#8FA3C9",
    title: "O Nome do Vento",
    author: "Patrick Rothfuss",
    price: "49,90",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR091sWhLAC6IyyLIxErAnq8ovIYEJHTyBsvuI1Zy6iOQ&s=10",
    synopsis:
      "A história de Kvothe, um jovem prodígio que se torna um grande mago e músico."
  },
  {
    id: 3,
    topic: "Terror",
    accent: "#A87C80",
    title: "O Iluminado",
    author: "Stephen King",
    price: "45,00",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7Yvo64YpQ-0PI_Xt-26ChF_SM29dyQkM0qbcHUfTsEw&s",
    synopsis:
      "Jack Torrance aceita trabalhar como zelador em um hotel que esconde forças sinistras."
  },
  {
    id: 4,
    topic: "Romance",
    accent: "#E8A5B0",
    title: "É Assim que Acaba",
    author: "Colleen Hoover",
    price: "44,90",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRnJ94ZaW0lZDAGBx1apf-mdkNXg90Gr2ZuuXF9P_pwQ&s",
    synopsis:
      "Um romance emocionante sobre escolhas difíceis e a força necessária para romper ciclos dolorosos."
  },
  {
    id: 5,
    topic: "Romance",
    accent: "#C3A2C8",
    title: "Vermelho, Branco e Sangue Azul",
    author: "Casey McQuiston",
    price: "38,00",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzejuPTmIqVdbbHvmxV1vqKgMfJqxs1tiin69iDaWz4w&s=10",
    synopsis:
      "Uma disputa diplomática se transforma em um romance secreto entre o filho da presidenta dos EUA e um príncipe."
  },
  {
    id: 6,
    topic: "Fantasia",
    accent: "#8FA3C9",
    title: "Corte de Espinhos e Rosas",
    author: "Sarah J. Maas",
    price: "47,90",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTzjMoTt-z_tt11zxUys9fy0vm8DgsEg-urlgT8nJV8g&s=10",
    synopsis:
      "Feyre descobre segredos perigosos em uma terra mágica e traiçoeira."
  },
  {
    id: 7,
    topic: "Fantasia",
    accent: "#5A73A3",
    title: "O Hobbit",
    author: "J.R.R. Tolkien",
    price: "42,00",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkXQnUzxh_Zz7d4MUz2CEKnSnGnV90FEE2e0cqjAxkxg&s=10",
    synopsis:
      "Bilbo Bolseiro parte em uma jornada para recuperar um tesouro guardado por um dragão."
  },
  {
    id: 8,
    topic: "Fantasia",
    accent: "#8FA3C9",
    title: "Quarta Asa",
    author: "Rebecca Yarros",
    price: "69,90",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoqGSQy7V_xFCmmUl1DX7m3StEn64knU5cxNhdZbdQdA&s=10",
    synopsis:
      "Em um colégio militar de elite para cavaleiros de dragões, sobreviver é a regra."
  },
  {
    id: 9,
    topic: "Terror",
    accent: "#4A3638",
    title: "Drácula",
    author: "Bram Stoker",
    price: "35,90",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo-lHaqW3WlIjC2lcO3o1jX9cxs-973YCjUlsn7upe2g&s",
    synopsis:
      "A clássica história gótica do Conde Drácula e sua chegada à Inglaterra."
  },
  {
    id: 10,
    topic: "Terror",
    accent: "#A87C80",
    title: "O Vilarejo",
    author: "Raphael Montes",
    price: "29,90",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGvdfjKEO3g61vsQ3KdpAYQVSAYiK68ORqFQfJOoPU2w&s=10",
    synopsis:
      "Sete histórias macabras sobre moradores de um vilarejo isolado."
  },
  {
    id: 11,
    topic: "Ficção Científica",
    accent: "#728F85",
    title: "Duna",
    author: "Frank Herbert",
    price: "55,00",
    img: "https://images-na.ssl-images-amazon.com/images/I/81ym3QUd3KL.jpg",
    synopsis:
      "Paul Atreides enfrenta disputas políticas e religiosas em um planeta desértico."
  },
  {
    id: 12,
    topic: "Ficção Científica",
    accent: "#4C635B",
    title: "Matéria Escura",
    author: "Blake Crouch",
    price: "39,90",
    img: "https://th.bing.com/th/id/OIP.Xn4UY_XQSRccJCGoSIQdDgHaEK?w=287&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
    synopsis:
      "Um físico acorda em uma realidade alternativa onde sua vida é completamente diferente."
  },
  {
    id: 13,
    topic: "Desenvolvimento Pessoal",
    accent: "#D1A36E",
    title: "Hábitos Atômicos",
    author: "James Clear",
    price: "46,50",
    img: "https://th.bing.com/th/id/OIP.eka9Z7GUbzcc-UuXm71YIwHaLY?w=132&h=188&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
    synopsis:
      "Um guia prático sobre como pequenas mudanças diárias produzem grandes resultados."
  },
  {
    id: 14,
    topic: "Desenvolvimento Pessoal",
    accent: "#B5844A",
    title: "O Poder do Hábito",
    author: "Charles Duhigg",
    price: "41,90",
    img: "https://th.bing.com/th/id/OIP.I8Qhm4dr05dspGon2R-9pwHaKo?w=132&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
    synopsis:
      "Descubra como funcionam os hábitos e como transformar suas rotinas."
  },
  {
    id: 15,
    topic: "Desenvolvimento Pessoal",
    accent: "#D1A36E",
    title: "A Psicologia Financeira",
    author: "Morgan Housel",
    price: "37,90",
    img: "https://m.media-amazon.com/images/I/818D0oqaBML._SL1500_.jpg",
    synopsis:
      "Lições sobre comportamento, dinheiro e decisões financeiras."
  }
];

// CADASTRO
function Cadastro({ onVoltar, onCadastrar }) {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [erro, setErro] = useState("");

  function cadastrar(e) {
    e.preventDefault();

    if (senha !== confirmarSenha) {
      setErro("As senhas não coincidem.");
      return;
    }

    const usuarios = JSON.parse(
      localStorage.getItem("usuariosLivraria") || "[]"
    );

    const existe = usuarios.some(
      (item) =>
        item.usuario.toLowerCase() === usuario.trim().toLowerCase()
    );

    if (existe) {
      setErro("Este usuário já está cadastrado.");
      return;
    }

    const novoUsuario = {
      usuario: usuario.trim(),
      senha
    };

    localStorage.setItem(
      "usuariosLivraria",
      JSON.stringify([...usuarios, novoUsuario])
    );

    setErro("");
    onCadastrar(novoUsuario.usuario);
  }

  return (
    <main className="auth-page">
      <section className="auth-card">
        <h2>Criar Conta</h2>

        <form onSubmit={cadastrar}>
          <input
            type="text"
            placeholder="Seu usuário"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
            autoComplete="username"
            minLength={3}
            required
          />

          <input
            type="password"
            placeholder="Sua senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            autoComplete="new-password"
            minLength={4}
            required
          />

          <input
            type="password"
            placeholder="Confirme sua senha"
            value={confirmarSenha}
            onChange={(e) => setConfirmarSenha(e.target.value)}
            autoComplete="new-password"
            required
          />

          {erro && <p className="auth-error">{erro}</p>}

          <button className="auth-button" type="submit">
            Cadastrar
          </button>
        </form>

        <p className="auth-footer">
          Já tem uma conta?{" "}
          <button
            className="auth-link"
            type="button"
            onClick={onVoltar}
          >
            Entrar.
          </button>
        </p>
      </section>
    </main>
  );
}

// APLICAÇÃO PRINCIPAL
export default function App() {
  const [tela, setTela] = useState("login");
  const [currentScreen, setCurrentScreen] = useState("home");
  const [cart, setCart] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("Todos");
  const [user, setUser] = useState(null);

  function addToCart(book) {
    setCart((atual) => {
      if (atual.some((item) => item.id === book.id)) {
        return atual;
      }

      return [...atual, book];
    });

    setCurrentScreen("cart");
  }

  function sair() {
    setUser(null);
    setCurrentScreen("home");
    setCart([]);
    setTela("login");
  }

  if (tela === "login") {
    return (
      <Login
        onEntrar={(usuario) => {
          setUser(usuario);
          setTela("loja");
        }}
        onCadastro={() => setTela("cadastro")}
      />
    );
  }

  if (tela === "cadastro") {
    return (
      <Cadastro
        onVoltar={() => setTela("login")}
        onCadastrar={(usuario) => {
          setUser(usuario);
          setTela("loja");
        }}
      />
    );
  }

  return (
    <div className="desktop-container">
      <Header
        currentScreen={currentScreen}
        setCurrentScreen={setCurrentScreen}
        cartCount={cart.length}
        user={user}
        setUser={setUser}
      />

      <Main
        currentScreen={currentScreen}
        setCurrentScreen={setCurrentScreen}
        books={BOOKS_DATABASE}
        cart={cart}
        setCart={setCart}
        addToCart={addToCart}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedGenre={selectedGenre}
        setSelectedGenre={setSelectedGenre}
        user={user}
        setUser={setUser}
      />
     <Footer />
    </div>
  );
}
