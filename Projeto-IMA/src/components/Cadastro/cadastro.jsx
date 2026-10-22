import { useState } from 'react';
import Header from './components/Header/header';
import Main from './components/Main/main';
import Footer from './components/Footer/footer';
import Cadastro from './components/Cadastro/cadastro';
import './index.css';

const BOOKS_DATABASE = [
  // ROMANCE
  { id: 0, topic: "Romance", accent: "#E8A5B0", title: "Melhor do Que Nos Filmes", author: "Lynn Painter", price: "39,90", img: "https://dlivros.org", synopsis: "Liz Buxbaum precisa da ajuda de seu vizinho insuportável para chamar a atenção de seu antigo crush. Mas ao simularem momentos de romance, descobre que o amor está mais perto do que imagina." },
  { id: 1, topic: "Romance", accent: "#C3A2C8", title: "Love Hypothesis", author: "Ali Hazelwood", price: "29,90", img: "https://gstatic.com", synopsis: "Uma aluna de doutorado em biologia resolve inventar um namoro de mentira com um professor jovem e ranzinza." },
  { id: 4, topic: "Romance", accent: "#E8A5B0", title: "É Assim que Acaba", author: "Colleen Hoover", price: "44,90", img: "https://gstatic.com", synopsis: "Um romance maduro e emocionante que discute as complexidades das relações humanas, escolhas difíceis e a força necessária para quebrar ciclos dolorosos." },
  { id: 5, topic: "Romance", accent: "#C3A2C8", title: "Vermelho, Branco e Sangue Azul", author: "Casey McQuiston", price: "38,00", img: "https://gstatic.com", synopsis: "O que acontece quando o filho da presidenta dos EUA se apaixona pelo príncipe herdeiro da Inglaterra? Uma disputa diplomática vira um romance secreto irresistível." },

  // FANTASIA
  { id: 2, topic: "Fantasia", accent: "#6d80a4ff", title: "O Nome do Vento", author: "Patrick Rothfuss", price: "49,90", img: "https://gstatic.com", synopsis: "A história de Kvothe, um jovem prodígio que se torna o mago e músico mais notório que o mundo já viu." },
  { id: 6, topic: "Fantasia", accent: "#8FA3C9", title: "Corte de Espinhos e Rosas", author: "Sarah J. Maas", price: "47,90", img: "https://gstatic.com", synopsis: "Feyre é levada para uma terra mágica e traiçoeira após matar um feérico na floresta. Lá, ela descobre que seu captor esconde segredos perigosos e uma paixão avassaladora." },
  { id: 7, topic: "Fantasia", accent: "#5A73A3", title: "O Hobbit", author: "J.R.R. Tolkien", price: "42,00", img: "https://gstatic.com", synopsis: "A clássica aventura de Bilbo Bolseiro, um hobbit pacato que é arrastado por um mago e treze anões em uma jornada épica para recuperar um tesouro guardado por um dragão." },
  { id: 7, topic: "Fantasia", accent: "#f52a99ff", title: "Animais Fantasticos", author: "J.K Rowling", price: "42,00", img: "https://gstatic.com", synopsis: "A clássica aventura de Bilbo Bolseiro, um hobbit pacato que é arrastado por um mago e treze anões em uma jornada épica para recuperar um tesouro guardado por um dragão." },
  { id: 8, topic: "Fantasia", accent: "#8FA3C9", title: "Quarta Asa", author: "Rebecca Yarros", price: "69,90", img: "https://gstatic.com", synopsis: "Em um colégio militar de elite para cavaleiros de dragões, a única regra é clara: sobreviva ou morra. Um fenômeno recente repleto de ação, romance e traições." },

  // TERROR
  { id: 3, topic: "Terror", accent: "#A87C80", title: "O Iluminado", author: "Stephen King", price: "45,00", img: "https://gstatic.com", synopsis: "Jack Torrance aceita o emprego de zelador no Hotel Overlook durante o inverno, mas o local guarda forças sinistras." },
  { id: 9, topic: "Terror", accent: "#4A3638", title: "Drácula", author: "Bram Stoker", price: "35,90", img: "https://gstatic.com", synopsis: "A obra-prima gótica que definiu o mito do vampiro moderno através de cartas e diários sobre a viagem do temível Conde da Transilvânia até a Inglaterra." },
  { id: 10, topic: "Terror", accent: "#A87C80", title: "O Vilarejo", author: "Raphael Montes", price: "29,90", img: "https://gstatic.com", synopsis: "Sete histórias macabras interligadas sobre os moradores de um vilarejo isolado que, assolados pela fome e pelo frio, sucumbem aos sete pecados capitais." },

  // FICÇÃO CIENTÍFICA
  { id: 11, topic: "Ficção Científica", accent: "#728F85", title: "Duna", author: "Frank Herbert", price: "55,00", img: "data:image/webp;base64,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" },
];

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('home');
  const [cartCount, setCartCount] = useState(0);
  const [user, setUser] = useState(null);

  const renderScreen = () => {
    switch (currentScreen) {
      case 'home':
        return <Main books={BOOKS_DATABASE} />;
      case 'search':
        return <div style={{ padding: '20px', textAlign: 'center' }}>Tela de Pesquisa (Em desenvolvimento)</div>;
      case 'cart':
        return <div style={{ padding: '20px', textAlign: 'center' }}>Tela do Carrinho (Em desenvolvimento)</div>;
      case 'login':
        return <div style={{ padding: '20px', textAlign: 'center' }}>Tela de Login (Em desenvolvimento)</div>;
      case 'cadastro':
        return <Cadastro setCurrentScreen={setCurrentScreen} setUser={setUser} />;
      default:
        return <Main books={BOOKS_DATABASE} />;
    }
  };

  return (
    <div className="app-container">
      <Header 
        currentScreen={currentScreen} 
        setCurrentScreen={setCurrentScreen} 
        cartCount={cartCount} 
        user={user} 
        setUser={setUser} 
      />
      
      <main className="content-area">
        {renderScreen()}
      </main>

      <Footer />
    </div>
  );
}
