import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { getSeats, sendReservationRequest } from "../shared/APIRequests";
import Loading from "../shared/Loading";
import Seat from "./Seat";
import BuyerInput from "./BuyerInput";
import isReadytoReserve from "./readyToReserve";

export default function Seats({ orderInfo, setOrderInfo }) {
  const { id } = useParams();
  const [seatList, setSeatList] = useState([]);
  const history = useHistory();

  //sends to the api the reservation details
  function makeReservation() {
    if (!isReadytoReserve(orderInfo)) {
      return;
    }

    const promise = sendReservationRequest(orderInfo);

    promise.then((response) => {
      history.push(`/success/${id}`);
    });

    promise.catch((response) => {
      alert("Algo deu errado. Tente novamente mais tarde.");
    });
  }

  useEffect(() => {
    setOrderInfo({ ids: [], compradores: [] });
    let promise = getSeats(id);
    promise.then((response) => {
      setSeatList(...[response.data]);
    });
  }, [id, setOrderInfo]);

  if (seatList.length === 0) {
    return <Loading />;
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
        {orderInfo.compradores.length > 0 &&
          orderInfo.compradores.map((buyer, index) => (
            <BuyerInput
              buyer={buyer}
              orderInfo={orderInfo}
              setOrderInfo={setOrderInfo}
              key={index}
            />
          ))}

        <button
          className="reserve-seats standard"
          onClick={() => makeReservation()}
        >
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
