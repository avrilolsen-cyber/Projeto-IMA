import { useState } from "react";
import Header from "./components/Header/header";
import Main from "./components/Main/main";
import Footer from "./components/Footer/footer"
import Cadastro from "./components/Cadastro/cadastro";
import './index.css'


const BOOKSDATABASE = [
  // ROMANCE
  { id: 0, topic: "Romance", accent: "#E8A5B0", title: "Melhor do Que Nos Filmes", author: "Lynn Painter", price: "39,90", img: "https://images.dlivros.org/Lynn-Painter/melhor-filmes-lynn-painter_large.webp", synopsis: "Liz Buxbaum precisa da ajuda de seu vizinho insuportável para chamar a atenção de seu antigo crush. Mas ao simularem momentos de romance, descobre que o amor está mais perto do que imagina." },
  { id: 1, topic: "Romance", accent: "#C3A2C8", title: "Love Hypothesis", author: "Ali Hazelwood", price: "29,90", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyJkEnzuSsTGQEvTS0x6PbEN4XhRUqQ_0eUxE-Sx_jyw&s", synopsis: "Uma aluna de doutorado em biologia resolve inventar um namoro de mentira com um professor jovem e ranzinza." },
  { id: 4, topic: "Romance", accent: "#E8A5B0", title: "É Assim que Acaba", author: "Colleen Hoover", price: "44,90", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRnJ94ZaW0lZDAGBx1apf-mdkNXg90Gr2ZuuXF9P_pwQ&s", synopsis: "Um romance maduro e emocionante que discute as complexidades das relações humanas, escolhas difíceis e a força necessária para quebrar ciclos dolorosos." },
  { id: 5, topic: "Romance", accent: "#C3A2C8", title: "Vermelho, Branco e Sangue Azul", author: "Casey McQuiston", price: "38,00", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzejuPTmIqVdbbHvmxV1vqKgMfJqxs1tiin69iDaWz4w&s=10", synopsis: "O que acontece quando o filho da presidenta dos EUA se apaixona pelo príncipe herdeiro da Inglaterra? Uma disputa diplomática vira um romance secreto irresistível." },

  // FANTASIA
  { id: 2, topic: "Fantasia", accent: "#6d80a4ff", title: "O Nome do Vento", author: "Patrick Rothfuss", price: "49,90", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR091sWhLAC6IyyLIxErAnq8ovIYEJHTyBsvuI1Zy6iOQ&s=10", synopsis: "A história de Kvothe, um jovem prodígio que se torna o mago e músico mais notório que o mundo já viu." },
  { id: 6, topic: "Fantasia", accent: "#8FA3C9", title: "Corte de Espinhos e Rosas", author: "Sarah J. Maas", price: "47,90", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTzjMoTt-z_tt11zxUys9fy0vm8DgsEg-urlgT8nJV8g&s=10", synopsis: "Feyre é levada para uma terra mágica e traiçoeira após matar um feérico na floresta. Lá, ela descobre que seu captor esconde segredos perigosos e uma paixão avassaladora." },
  { id: 7, topic: "Fantasia", accent: "#5A73A3", title: "O Hobbit", author: "J.R.R. Tolkien", price: "42,00", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkXQnUzxh_Zz7d4MUz2CEKnSnGnV90FEE2e0cqjAxkxg&s=10", synopsis: "A clássica aventura de Bilbo Bolseiro, um hobbit pacato que é arrastado por um mago e treze anões em uma jornada épica para recuperar um tesouro guardado por um dragão." },
  { id: 7, topic: "Fantasia", accent: "#f52a99ff", title: "Animais Fantasticos", author: "J.K Rowling", price: "42,00", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvyBv1HpiUK0hB6AgY-n_jpQU9iORC1ISvG-eieyxP_g&s", synopsis: "A clássica aventura de Bilbo Bolseiro, um hobbit pacato que é arrastado por um mago e treze anões em uma jornada épica para recuperar um tesouro guardado por um dragão." },
  { id: 8, topic: "Fantasia", accent: "#8FA3C9", title: "Quarta Asa", author: "Rebecca Yarros", price: "69,90", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoqGSQy7V_xFCmmUl1DX7m3StEn64knU5cxNhdZbdQdA&s=10", synopsis: "Em um colégio militar de elite para cavaleiros de dragões, a única regra é clara: sobreviva ou morra. Um fenômeno recente repleto de ação, romance e traições." },

  // TERROR
  { id: 3, topic: "Terror", accent: "#A87C80", title: "O Iluminado", author: "Stephen King", price: "45,00", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7Yvo64YpQ-0PI_Xt-26ChF_SM29dyQkM0qbcHUfTsEw&s", synopsis: "Jack Torrance aceita o emprego de zelador no Hotel Overlook durante o inverno, mas o local guarda forças sinistras." },
  { id: 9, topic: "Terror", accent: "#4A3638", title: "Drácula", author: "Bram Stoker", price: "35,90", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo-lHaqW3WlIjC2lcO3o1jX9cxs-973YCjUlsn7upe2g&s", synopsis: "A obra-prima gótica que definiu o mito do vampiro moderno através de cartas e diários sobre a viagem do temível Conde da Transilvânia até a Inglaterra." },
  { id: 10, topic: "Terror", accent: "#A87C80", title: "O Vilarejo", author: "Raphael Montes", price: "29,90", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGvdfjKEO3g61vsQ3KdpAYQVSAYiK68ORqFQfJOoPU2w&s=10", synopsis: "Sete histórias macabras interligadas sobre os moradores de um vilarejo isolado que, assolados pela fome e pelo frio, sucumbem aos sete pecados capitais." },

  // FICÇÃO CIENTÍFICA
  { id: 11, topic: "Ficção Científica", accent: "#728F85", title: "Duna", author: "Frank Herbert", price: "55,00", img: "data:image/webp;base64,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", synopsis: "Uma grandiosa ópera espacial que acompanha o jovem Paul Atreides em um planeta desértico perigoso, onde a disputa pelo recurso mais valioso do universo gera guerras políticas e religiosas." },
  { id: 12, topic: "Ficção Científica", accent: "#4C635B", title: "Matéria Escura", author: "Blake Crouch", price: "39,90", img: "https://th.bing.com/th/id/OIP.Xn4UY_XQSRccJCGoSIQdDgHaEK?w=287&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3", synopsis: "Após ser sequestrado, um físico acorda em uma reality alternativa onde sua vida é completamente diferente. Um thriller científico perturbador sobre as escolhas que fazemos." },

  // DESENVOLVIMENTO PESSOAL
  { id: 13, topic: "Desenvolvimento Pessoal", accent: "#D1A36E", title: "Hábitos Atômicos", author: "James Clear", price: "46,50", img: "https://th.bing.com/th/id/OIP.eka9Z7GUbzcc-UuXm71YIwHaLY?w=132&h=188&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3", synopsis: "Um guia prático focado em ciência comportamental para mostrar como pequenas mudanças diárias e constantes geram resultados extraordinários a longo prazo." },
  { id: 14, topic: "Desenvolvimento Pessoal", accent: "#B5844A", title: "O Poder do Hábito", author: "Charles Duhigg", price: "41,90", img: "https://th.bing.com/th/id/OIP.I8Qhm4dr05dspGon2R-9pwHaKo?w=132&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3", synopsis: "Entenda a engrenagem psicológica por trás das nossas rotinas automáticas e descubra como transformar seus hábitos para alcançar o sucesso pessoal e profissional." },
  { id: 15, topic: "Desenvolvimento Pessoal", accent: "#D1A36E", title: "A Psicologia Financeira", author: "Morgan Housel", price: "37,90", img: "https://www.bing.com/images/search?view=detailV2&ccid=RW1xscE0&id=DBA3740CF6D47C7E089F9DB351354402CEE3E337&thid=OIP.RW1xscE0CoQ7S7xLoBlOJgHaHa&mediaurl=https%3a%2f%2fm.media-amazon.com%2fimages%2fI%2f818D0oqaBML._SL1500_.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.456d71b1c1340a843b4bbc4ba0194e26%3frik%3dN%252bPjzgJENVGznQ%26pid%3dImgRaw%26r%3d0&exph=1500&expw=1500&q=A+Psicologia+Financeira+livro&FORM=IRPRST&ck=72780D8BBD571182F456C0F3FAAC73FD&selectedIndex=0&itb=0", synopsis: "Casos reais e lições práticas provando que o sucesso com o dinheiro tem menos a ver com a sua inteligência matemática e muito mais com o seu comportamento emocional." }
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
