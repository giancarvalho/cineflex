import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getSeats } from "./APIRequests";

function Buyer({ customer }) {
  return (
    <div className="details">
      <h2>Comprador</h2>
      <p>Nome: {customer.nome}</p>
      <p>CPF: {customer.cpf}</p>
      <p>Assento: {customer.idAssento}</p>
    </div>
  );
}

export default function Success({ orderInfo, setOrderInfo }) {
  const [chosenSession, setChosenSession] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    let promise = getSeats(id);
    promise.then((response) => {
      setChosenSession(...[response.data]);
    });
  }, []);

  if (chosenSession.length === 0) {
    return "carregando detalhes do pedido";
  }

  return (
    <>
      <div className="title">
        {" "}
        <h1 className="success">Pedido feito com sucesso!</h1>
      </div>
      <div className="order-details">
        <div className="details">
          <h2>Filme e sessão</h2>
          <p>{chosenSession.movie.title}</p>
          <p>{`${chosenSession.day.weekday} ${chosenSession.name}`}</p>
        </div>
        <div className="details">
          <h2>Ingressos</h2>
          {orderInfo.ids.map((id, index) => (
            <p key={index}>Assento {id}</p>
          ))}
        </div>
        {orderInfo.compradores.map((customer, index) => (
          <Buyer customer={customer} key={index} />
        ))}
      </div>
      <Link to="/" onClick={() => setOrderInfo({ ids: [], compradores: [] })}>
        <button className="standard">Voltar para a Home</button>
      </Link>
    </>
  );
}
