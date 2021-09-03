import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSeats } from "./URLs";
const order = { ids: [], name: "", cpf: "" };

function Seat({ seat }) {
  const [seatSelected, setSeatSelected] = useState(null);

  function selectSeat(id) {
    const { ids } = order;
    if (!seatSelected) {
      ids.push(id);
      setSeatSelected("selected");
    } else {
      setSeatSelected(null);
      ids.splice(ids.indexOf(id), 1);
    }
  }
  return (
    <div
      className={seat.isAvailable ? `seat ${seatSelected}` : "seat occupied"}
      onClick={() => selectSeat(seat.id)}
    >
      {seat.id}
    </div>
  );
}

export default function Seats() {
  const { id } = useParams();
  const [seatList, setSeatList] = useState([]);

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
            <Seat key={index} seat={item} />
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
        <div className="buyer-details">
          <div className="name">
            <label>Nome do comprador:</label>
            <input placeholder="Digite seu nome..." />
          </div>
          <div className="cpf">
            <label>CPF do comprador: </label>
            <input placeholder="Digite seu CPF..." />
          </div>
        </div>
        <button className="reserve-seats">Reservar assento(s)</button>
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
