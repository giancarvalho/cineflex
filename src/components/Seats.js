import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { getSeats, sendReservationRequest } from "./URLs";

function Seat({ seat, userInfo, setUserInfo }) {
  const [seatSelected, setSeatSelected] = useState(null);

  function selectSeat(id) {
    console.log(userInfo["ids"]);
    if (!seatSelected) {
      setUserInfo((userInfo) => ({
        ...userInfo,
        ids: [...userInfo["ids"], id],
      }));
      setSeatSelected("selected");
    } else {
      setUserInfo((userInfo) => ({
        ...userInfo,
        ids: [...userInfo["ids"].filter((seatId) => seatId !== id)],
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

export default function Seats({ userInfo, setUserInfo }) {
  const { id } = useParams();
  const [seatList, setSeatList] = useState([]);
  const history = useHistory();

  function assignName(e) {
    setUserInfo(() => ({
      ...userInfo,
      name: e.target.value,
    }));
  }

  function assignCPF(e) {
    setUserInfo(() => ({
      ...userInfo,
      cpf: e.target.value,
    }));
  }

  function makeReservation() {
    const promise = sendReservationRequest(userInfo);

    promise.then((response) => {
      alert("Deu certo!");
      history.push(`/success/${id}`);
    });

    promise.catch((response) => {
      alert("Deu errado!");
      debugger;
    });
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
              userInfo={userInfo}
              setUserInfo={setUserInfo}
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
        <div className="buyer-details">
          <div className="name">
            <label>Nome do comprador:</label>
            <input
              type="text"
              placeholder="Digite seu nome..."
              value={userInfo.name}
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
              value={userInfo.cpf}
              onChange={(e) => {
                assignCPF(e);
              }}
            />
          </div>
        </div>
        <button className="reserve-seats" onClick={makeReservation}>
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
