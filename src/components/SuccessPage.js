export default function Success() {
  return (
    <>
      <div className="title">
        {" "}
        <h1 className="success">Pedido feito com sucesso!</h1>
      </div>
      <div className="order-details">
        <div className="details">
          <h2>Filme e sessão</h2>
          <p>Enola Holmes</p>
          <p>24/06/2021 15:00</p>
        </div>
        <div className="details">
          <h2>Ingressos</h2>
          <p>Assento 15</p>
          <p>Assento 16</p>
        </div>
        <div className="details">
          <h2>Comprador</h2>
          <p>Nome: João da Silva Sauro</p>
          <p>CPF: 123.465.789-10</p>
        </div>
      </div>
      <button>Voltar para a Home</button>
    </>
  );
}
