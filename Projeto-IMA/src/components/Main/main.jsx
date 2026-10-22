import { useState } from 'react';


export default function Main({ 
  currentScreen, setCurrentScreen, books, cart, setCart, addToCart, 
  searchQuery, setSearchQuery, selectedGenre, setSelectedGenre 
}) {
  const [detailBook, setDetailBook] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState('');
  const [paymentData, setPaymentData] = useState({});
  const [showConfirm, setShowConfirm] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const filteredBooks = books.filter(book => {
    const matchesSearch = book.title.toLowerCase().includes(searchQuery.toLowerCase()) || book.author.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesGenre = selectedGenre === 'Todos' || book.topic === selectedGenre;
    return matchesSearch && matchesGenre;
  });

  const totalCart = cart.reduce((acc, item) => acc + parseFloat(item.price.replace(',', '.')), 0);

  const handleCheckout = () => {
    if (cart.length === 0) return alert('Seu carrinho está vazio.');
    if (!paymentMethod) return alert('Selecione uma forma de pagamento.');
    setShowConfirm(true);
  };

  const confirmPurchase = () => {
    setShowConfirm(false);
    setShowSuccess(true);
    setCart([]);
    setPaymentMethod('');
    setPaymentData({});
  };

  return (
    <main className="content-area">
      {/* TELA: HOME / VITRINE */}
      {currentScreen === 'home' && (
        <>
          <div className="controls-bar">
            <h2>Destaques Comerciais & Lançamentos</h2>
            <select value={selectedGenre} onChange={(e) => setSelectedGenre(e.target.value)} className="topic-select-btn" style={{ width: '250px' }}>
              <option value="Todos">Todos os Gêneros</option>
              <option value="Romance">Romance</option>
              <option value="Fantasia">Fantasia</option>
              <option value="Terror">Terror</option>
              <option value="Ficção Científica">Ficção Científica</option>
              <option value="Desenvolvimento Pessoal">Desenvolvimento Pessoal</option>
            </select>
          </div>
          <div className="book-grid">
            {filteredBooks.map(book => (
              <div key={book.id} className="book-card" style={{ '--book-accent': book.accent }} onClick={() => setDetailBook(book)}>
                <img src={book.img} alt={book.title} />
                <strong>{book.title}</strong>
                <p>{book.author}</p>
                <p className="price-tag">R\$ {book.price}</p>
              </div>
            ))}
          </div>
        </>
      )}

      {/* TELA: PESQUISAR */}
      {currentScreen === 'search' && (
        <div className="search-screen">
          <div className="search-container-desktop">
            <input 
              type="text" 
              placeholder="O que você quer ler hoje? Digite título ou autor..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input-field"
            />
          </div>
          <div className="book-grid">
            {filteredBooks.map(book => (
              <div key={book.id} className="book-card" style={{ '--book-accent': book.accent }} onClick={() => setDetailBook(book)}>
                <img src={book.img} alt={book.title} />
                <strong>{book.title}</strong>
                <p>{book.author}</p>
                <p className="price-tag">R\$ {book.price}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TELA: CARRINHO E COMPRAS */}
      {currentScreen === 'cart' && (
        <div className="cart-layout">
          <div className="cart-box">
            <p className="cart-box-title">Forma de Pagamento:</p>
            {['pix', 'credito', 'boleto'].map(method => (
              <div key={method} className={`payment-option ${paymentMethod === method ? 'active' : ''}`} onClick={() => setPaymentMethod(method)}>
                {method.toUpperCase()}
              </div>
            ))}
            
            {paymentMethod === 'pix' && (
              <div className="payment-details-form" style={{ display: 'block' }}>
                <input type="text" placeholder="CPF do Pagador" onChange={e => setPaymentData({...paymentData, cpf: e.target.value})} />
              </div>
            )}
            {paymentMethod === 'credito' && (
              <div className="payment-details-form" style={{ display: 'block' }}>
                <input type="text" placeholder="Número do Cartão" />
                <input type="text" placeholder="Nome Impresso" />
              </div>
            )}
            {paymentMethod === 'boleto' && (
              <div className="payment-details-form" style={{ display: 'block' }}>
                <input type="text" placeholder="Nome Completo" />
                <input type="text" placeholder="CPF para Emissão" />
              </div>
            )}
          </div>

          <div className="cart-box">
            <p className="cart-box-title">Resumo do Pedido:</p>
            {cart.map((item, index) => (
              <div key={index} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                <span>{item.title}</span>
                <strong>R\$ {item.price}</strong>
              </div>
            ))}
            <h3 style={{ margin: '20px 0', borderTop: '1px solid var(--border-color)', paddingTop: '10px' }}>
              Total: R\$ {totalCart.toFixed(2).replace('.', ',')}
            </h3>
            <button className="buy-action-btn" onClick={handleCheckout}>Finalizar Compra</button>
          </div>
        </div>
      )}

      {/* MODAL DETALHES DO PRODUTO */}
      {detailBook && (
        <div className="modal-overlay" style={{ display: 'flex' }}>
          <div className="modal-card">
            <div className="modal-book-detail">
              <img src={detailBook.img} alt={detailBook.title} />
              <div className="modal-book-info">
                <h3>{detailBook.title}</h3>
                <p className="author">{detailBook.author}</p>
                <p className="synopsis">{detailBook.synopsis}</p>
                <h2 style={{ color: 'var(--primary-color)', marginTop: '15px' }}>R\$ {detailBook.price}</h2>
              </div>
            </div>
            <button className="modal-btn btn-green" onClick={() => { addToCart(detailBook); setDetailBook(null); }}>
              Adicionar ao Carrinho (Comprar)
            </button>
            <button className="modal-btn btn-secondary" onClick={() => setDetailBook(null)}>Voltar para Loja</button>
          </div>
        </div>
      )}

      {/* MODAL DE CONFIRMAÇÃO */}
      {showConfirm && (
        <div className="modal-overlay" style={{ display: 'flex' }}>
          <div className="modal-card" style={{ textAlign: 'center' }}>
            <h3>Confirmar seu Pedido Comercial</h3>
            <p style={{ margin: '15px 0' }}>Valor Total: R\$ {totalCart.toFixed(2).replace('.', ',')}</p>
            <button className="modal-btn btn-green" onClick={confirmPurchase}>CONFIRMAR E PAGAR</button>
            <button className="modal-btn btn-red" onClick={() => setShowConfirm(false)}>CANCELAR</button>
          </div>
        </div>
      )}

      {/* MODAL DE SUCESSO */}
      {showSuccess && (
        <div className="modal-overlay" style={{ display: 'flex' }}>
          <div className="modal-card" style={{ textAlign: 'center' }}>
            <h3>Pagamento Aprovado! 🎉</h3>
            <p style={{ margin: '15px 0' }}>Seu pedido comercial foi processado. O código de rastreio foi enviado para seu e-mail.</p>
            <button className="modal-btn btn-green" onClick={() => { setShowSuccess(false); setCurrentScreen('home'); }}>Voltar para a Vitrine</button>
          </div>
        </div>
      )}
    </main>
  );
}
