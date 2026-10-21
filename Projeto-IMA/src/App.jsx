import { useState } from 'react';
import Header from './components/Header/header';
import Main from './components/Main/main';
import Footer from './components/Footer/footer';
import './index.css';

const BOOKS_DATABASE = [
  // ROMANCE
  { id: 0, topic: "Romance", accent: "#E8A5B0", title: "Melhor do Que Nos Filmes", author: "Lynn Painter", price: "39,90", img: "https://images.dlivros.org/Lynn-Painter/melhor-filmes-lynn-painter_large.webp", synopsis: "Liz Buxbaum precisa da ajuda de seu vizinho insuportável para chamar a atenção de seu antigo crush. Mas ao simularem momentos de romance, descobre que o amor está mais perto do que imagina." },
  { id: 1, topic: "Romance", accent: "#C3A2C8", title: "Love Hypothesis", author: "Ali Hazelwood", price: "29,90", img: "https://openlibrary.org", synopsis: "Uma aluna de doutorado em biologia resolve inventar um namoro de mentira com um professor jovem e ranzinza." },
  { id: 4, topic: "Romance", accent: "#E8A5B0", title: "É Assim que Acaba", author: "Colleen Hoover", price: "44,90", img: "https://openlibrary.org", synopsis: "Um romance maduro e emocionante que discute as complexidades das relações humanas, escolhas difíceis e a força necessária para quebrar ciclos dolorosos." },
  { id: 5, topic: "Romance", accent: "#C3A2C8", title: "Vermelho, Branco e Sangue Azul", author: "Casey McQuiston", price: "38,00", img: "https://openlibrary.org", synopsis: "O que acontece quando o filho da presidenta dos EUA se apaixona pelo príncipe herdeiro da Inglaterra? Uma disputa diplomática vira um romance secreto irresistível." },

  // FANTASIA
  { id: 2, topic: "Fantasia", accent: "#8FA3C9", title: "O Nome do Vento", author: "Patrick Rothfuss", price: "49,90", img: "https://openlibrary.org", synopsis: "A história de Kvothe, um jovem prodígio que se torna o mago e músico mais notório que o mundo já viu." },
  { id: 6, topic: "Fantasia", accent: "#8FA3C9", title: "Corte de Espinhos e Rosas", author: "Sarah J. Maas", price: "47,90", img: "https://openlibrary.org", synopsis: "Feyre é levada para uma terra mágica e traiçoeira após matar um feérico na floresta. Lá, ela descobre que seu captor esconde segredos perigosos e uma paixão avassaladora." },
  { id: 7, topic: "Fantasia", accent: "#5A73A3", title: "O Hobbit", author: "J.R.R. Tolkien", price: "42,00", img: "https://openlibrary.org", synopsis: "A clássica aventura de Bilbo Bolseiro, um hobbit pacato que é arrastado por um mago e treze anões em uma jornada épica para recuperar um tesouro guardado por um dragão." },
  { id: 8, topic: "Fantasia", accent: "#8FA3C9", title: "Quarta Asa", author: "Rebecca Yarros", price: "69,90", img: "https://openlibrary.org", synopsis: "Em um colégio militar de elite para cavaleiros de dragões, a única regra é clara: sobreviva ou morra. Um fenômeno recente repleto de ação, romance e traições." },

  // TERROR
  { id: 3, topic: "Terror", accent: "#A87C80", title: "O Iluminado", author: "Stephen King", price: "45,00", img: "https://openlibrary.org", synopsis: "Jack Torrance aceita o emprego de zelador no Hotel Overlook durante o inverno, mas o local guarda forças sinistras." },
  { id: 9, topic: "Terror", accent: "#4A3638", title: "Drácula", author: "Bram Stoker", price: "35,90", img: "https://openlibrary.org", synopsis: "A obra-prima gótica que definiu o mito do vampiro moderno através de cartas e diários sobre a viagem do temível Conde da Transilvânia até a Inglaterra." },
  { id: 10, topic: "Terror", accent: "#A87C80", title: "O Vilarejo", author: "Raphael Montes", price: "29,90", img: "https://openlibrary.org", synopsis: "Sete histórias macabras interligadas sobre os moradores de um vilarejo isolado que, assolados pela fome e pelo frio, sucumbem aos sete pecados capitais." },

  // FICÇÃO CIENTÍFICA
  { id: 11, topic: "Ficção Científica", accent: "#728F85", title: "Duna", author: "Frank Herbert", price: "55,00", img: "https://openlibrary.org", synopsis: "Uma grandiosa ópera espacial que acompanha o jovem Paul Atreides em um planeta desértico perigoso, onde a disputa pelo recurso mais valioso do universo gera guerras políticas e religiosas." },
  { id: 12, topic: "Ficção Científica", accent: "#4C635B", title: "Matéria Escura", author: "Blake Crouch", price: "39,90", img: "https://openlibrary.org", synopsis: "Após ser sequestrado, um físico acorda em uma reality alternativa onde sua vida é completamente diferente. Um thriller científico perturbador sobre as escolhas que fazemos." },

  // DESENVOLVIMENTO PESSOAL
  { id: 13, topic: "Desenvolvimento Pessoal", accent: "#D1A36E", title: "Hábitos Atômicos", author: "James Clear", price: "46,50", img: "https://openlibrary.org", synopsis: "Um guia prático focado em ciência comportamental para mostrar como pequenas mudanças diárias e constantes geram resultados extraordinários a longo prazo." },
  { id: 14, topic: "Desenvolvimento Pessoal", accent: "#B5844A", title: "O Poder do Hábito", author: "Charles Duhigg", price: "41,90", img: "https://openlibrary.org", synopsis: "Entenda a engrenagem psicológica por trás das nossas rotinas automáticas e descubra como transformar seus hábitos para alcançar o sucesso pessoal e profissional." },
  { id: 15, topic: "Desenvolvimento Pessoal", accent: "#D1A36E", title: "A Psicologia Financeira", author: "Morgan Housel", price: "37,90", img: "https://openlibrary.org", synopsis: "Casos reais e lições práticas provando que o sucesso com o dinheiro tem menos a ver com a sua inteligência matemática e muito mais com o seu comportamento emocional." }
];

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('home');
  const [cart, setCart] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('Todos');
  const [user, setUser] = useState(null);

  const addToCart = (book) => {
    if (!cart.some(item => item.id === book.id)) {
      setCart([...cart, book]);
    }
    setCurrentScreen('cart');
  };

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
