import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSeats } from "./URLs";

function Seat({ seat }) {
  return (
    <div className={seat.isAvailable ? "seat" : "seat occupied"}>
      {seat.id - 1100}
    </div>
  );
}

export default function Seats() {
  const { id } = useParams();
  const [seatList, setSeatList] = useState([]);

  useEffect(() => {
    let promise = getSeats(id);
    promise.then((response) => {
      console.log(response);
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

const SESSION = {
  id: 1,
  name: "15:00",
  day: {
    id: 24062021,
    weekday: "Quinta-feira",
    date: "24/06/2021",
  },
  movie: {
    id: 1,
    title: "2067",
    posterURL:
      "https://image.tmdb.org/t/p/w500/7D430eqZj8y3oVkLFfsWXGRcpEG.jpg",
    overview:
      "A lowly utility worker is called to the future by a mysterious radio signal, he must leave his dying wife to embark on a journey that will force him to face his deepest fears in an attempt to change the fabric of reality and save humankind from its greatest environmental crisis yet.",
    releaseDate: "2020-10-01T00:00:00.000Z",
  },
  seats: [
    {
      id: 1,
      name: "1",
      isAvailable: false,
    },
    {
      id: 2,
      name: "2",
      isAvailable: true,
    },
    {
      id: 3,
      name: "3",
      isAvailable: true,
    },
    {
      id: 4,
      name: "4",
      isAvailable: true,
    },
    {
      id: 5,
      name: "5",
      isAvailable: true,
    },
    {
      id: 6,
      name: "6",
      isAvailable: true,
    },
    {
      id: 7,
      name: "7",
      isAvailable: true,
    },
    {
      id: 8,
      name: "8",
      isAvailable: true,
    },
    {
      id: 9,
      name: "9",
      isAvailable: true,
    },
    {
      id: 10,
      name: "10",
      isAvailable: true,
    },
    {
      id: 11,
      name: "11",
      isAvailable: true,
    },
    {
      id: 12,
      name: "12",
      isAvailable: true,
    },
    {
      id: 13,
      name: "13",
      isAvailable: false,
    },
    {
      id: 14,
      name: "14",
      isAvailable: false,
    },
    {
      id: 15,
      name: "15",
      isAvailable: true,
    },
    {
      id: 16,
      name: "16",
      isAvailable: true,
    },
    {
      id: 17,
      name: "17",
      isAvailable: true,
    },
    {
      id: 18,
      name: "18",
      isAvailable: true,
    },
    {
      id: 19,
      name: "19",
      isAvailable: true,
    },
    {
      id: 20,
      name: "20",
      isAvailable: true,
    },
    {
      id: 21,
      name: "21",
      isAvailable: true,
    },
    {
      id: 22,
      name: "22",
      isAvailable: true,
    },
    {
      id: 23,
      name: "23",
      isAvailable: true,
    },
    {
      id: 24,
      name: "24",
      isAvailable: true,
    },
    {
      id: 25,
      name: "25",
      isAvailable: true,
    },
    {
      id: 26,
      name: "26",
      isAvailable: true,
    },
    {
      id: 27,
      name: "27",
      isAvailable: true,
    },
    {
      id: 28,
      name: "28",
      isAvailable: true,
    },
    {
      id: 29,
      name: "29",
      isAvailable: true,
    },
    {
      id: 30,
      name: "30",
      isAvailable: true,
    },
    {
      id: 31,
      name: "31",
      isAvailable: true,
    },
    {
      id: 32,
      name: "32",
      isAvailable: true,
    },
    {
      id: 33,
      name: "33",
      isAvailable: true,
    },
    {
      id: 34,
      name: "34",
      isAvailable: true,
    },
    {
      id: 35,
      name: "35",
      isAvailable: true,
    },
    {
      id: 36,
      name: "36",
      isAvailable: true,
    },
    {
      id: 37,
      name: "37",
      isAvailable: true,
    },
    {
      id: 38,
      name: "38",
      isAvailable: true,
    },
    {
      id: 39,
      name: "39",
      isAvailable: true,
    },
    {
      id: 40,
      name: "40",
      isAvailable: true,
    },
    {
      id: 41,
      name: "41",
      isAvailable: true,
    },
    {
      id: 42,
      name: "42",
      isAvailable: true,
    },
    {
      id: 43,
      name: "43",
      isAvailable: true,
    },
    {
      id: 44,
      name: "44",
      isAvailable: true,
    },
    {
      id: 45,
      name: "45",
      isAvailable: true,
    },
    {
      id: 46,
      name: "46",
      isAvailable: true,
    },
    {
      id: 47,
      name: "47",
      isAvailable: true,
    },
    {
      id: 48,
      name: "48",
      isAvailable: true,
    },
    {
      id: 49,
      name: "49",
      isAvailable: true,
    },
    {
      id: 50,
      name: "50",
      isAvailable: true,
    },
  ],
};
