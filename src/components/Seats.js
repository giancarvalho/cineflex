import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { getSeats, sendReservationRequest } from "./APIRequests";

function BuyerInput({ id, orderInfo, setOrderInfo, index }) {
  const [buyer, setBuyer] = useState({
    idAssento: id,
    nome: "",
    cpf: "",
  });

  function assignName(e) {
    setBuyer({ ...buyer, nome: e.target.value });

    updateOrderList();
  }

  function updateOrderList() {
    setOrderInfo(() => ({
      ...orderInfo,
      compradores: updateBuyerObject(),
    }));
  }

  function updateBuyerObject() {
    let updatedList = orderInfo.compradores.map((customer) => {
      if (customer.idAssento === buyer.idAssento) {
        return { ...buyer };
      } else {
        return customer;
      }
    });

    return [...updatedList];
  }

  function assignCPF(e) {
    setBuyer({ ...buyer, cpf: e.target.value });

    updateOrderList();
  }

  console.log(orderInfo);
  return (
    <div className="buyer-details">
      <div className="name">
        <label>Nome do cliente (assento {buyer.idAssento})</label>
        <input
          type="text"
          placeholder="Digite seu nome..."
          value={buyer.name}
          onChange={(e) => {
            assignName(e);
          }}
        />
      </div>
      <div className="cpf">
        <label>CPF do comprador: </label>
        <input
          type="number"
          placeholder="Digite seu CPF..."
          value={buyer.cpf}
          onChange={(e) => {
            assignCPF(e);
          }}
        />
      </div>
    </div>
  );
}

function Seat({ seat, orderInfo, setOrderInfo }) {
  const [seatSelected, setSeatSelected] = useState(null);

  function selectSeat(id) {
    if (!seatSelected) {
      setOrderInfo((orderInfo) => ({
        ids: [...orderInfo.ids, id],
        compradores: [
          ...orderInfo.compradores,
          { idAssento: id, nome: "", cpf: "" },
        ],
      }));
      setSeatSelected("selected");
    } else {
      setOrderInfo((orderInfo) => ({
        compradores: [
          orderInfo["compradores"].filter(
            (customer) => customer.idAssento !== id
          ),
        ],
        ids: [...orderInfo["ids"].filter((seatId) => seatId !== id)],
      }));
      setSeatSelected(null);
    }
  }

  function seatUnavailable() {
    alert("Assento não disponível");
  }

  return (
    <div
      className={seat.isAvailable ? `seat ${seatSelected}` : "seat occupied"}
      onClick={() => {
        seat.isAvailable ? selectSeat(seat.id) : seatUnavailable();
      }}
    >
      {seat.id}
    </div>
  );
}

export default function Seats({ orderInfo, setOrderInfo }) {
  const { id } = useParams();
  const [seatList, setSeatList] = useState([]);
  const history = useHistory();

  function isReadytoReserve() {
    return true;
  }

  function makeReservation() {
    if (!isReadytoReserve()) {
      return;
    }

    console.log(orderInfo);

    // const promise = sendReservationRequest(orderInfo);

    // promise.then((response) => {
    //   history.push(`/success/${id}`);
    // });

    // promise.catch((response) => {
    //   alert("Algo deu errado. Tente novamente mais tarde.");
    // });
  }

  useEffect(() => {
    let promise = getSeats(id);
    promise.then((response) => {
      setSeatList(...[response.data]);
    });
  }, []);

  if (seatList.length === 0) {
    return "carregando lista de assentos";
  }

  return (
    <>
      <div className="title">
        {" "}
        <h1>Selecione o(s) assentos(s)</h1>
      </div>
      <div className="choose-seats">
        <div className="seat-list">
          {seatList.seats.map((item, index) => (
            <Seat
              key={index}
              seat={item}
              orderInfo={orderInfo}
              setOrderInfo={setOrderInfo}
            />
          ))}
        </div>
        <div className="examples">
          <div>
            <div className="seat selected"></div>
            <p>Selecionado</p>
          </div>
          <div>
            <div className="seat"></div>
            <p>Disponivel</p>
          </div>
          <div>
            <div className="seat occupied"></div>
            <p>Indisponivel</p>
          </div>
        </div>
        {orderInfo.ids.length > 0 &&
          orderInfo.ids.map((id, index) => (
            <BuyerInput
              id={id}
              orderInfo={orderInfo}
              setOrderInfo={setOrderInfo}
              key={index}
            />
          ))}

        <button className="reserve-seats standard" onClick={makeReservation}>
          Reservar assento(s)
        </button>
        <div className="chosen-session">
          <div className="poster">
            <img src={seatList.movie.posterURL} />
          </div>
          <div className="session-details">
            <p>{seatList.movie.title}</p>
            <p>{`${seatList.day.weekday} - ${seatList.name}`}</p>
          </div>
        </div>
      </div>
    </>
  );
}
