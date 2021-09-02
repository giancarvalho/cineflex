import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getSessions } from "./URLs";

function ShowTimes({ timesList, id }) {
  return timesList.map((time) => (
    <Link to={`/sessions/${id}/seats/${id}`}>
      <button>{time.name}</button>
    </Link>
  ));
}

function Session({ day, id }) {
  return (
    <div className="session">
      <h2>
        <span>{day.weekday}</span> - <span>{day.date}</span>
      </h2>

      <ShowTimes timesList={day.showtimes} id={id} />
    </div>
  );
}

export default function Sessions() {
  const { id } = useParams();
  const [session, setSession] = useState([]);

  useEffect(() => {
    getSessions(id).then((response) => {
      setSession(...[response.data]);
    });
  }, []);

  if (session.length === 0) {
    return "Carregando sessao";
  }

  return (
    <>
      <div className="title">
        <h1>Selecione o horário</h1>
      </div>
      <div className="movie-sessions">
        {session.days.map((day, index) => (
          <Session day={day} id={id} key={index} />
        ))}
      </div>
      <div className="chosen-session">
        <div className="poster">
          <img src={session.posterURL} />
        </div>
        <div className="session-details">
          <p>{session.title}</p>
        </div>
      </div>
    </>
  );
}

const sessionData = {
  id: 1,
  title: "2067",
  posterURL: "https://image.tmdb.org/t/p/w500/7D430eqZj8y3oVkLFfsWXGRcpEG.jpg",
  overview:
    "A lowly utility worker is called to the future by a mysterious radio signal, he must leave his dying wife to embark on a journey that will force him to face his deepest fears in an attempt to change the fabric of reality and save humankind from its greatest environmental crisis yet.",
  releaseDate: "2020-10-01T00:00:00.000Z",
  days: [
    {
      id: 24062021,
      weekday: "Quinta-feira",
      date: "24/06/2021",
      showtimes: [
        {
          name: "15:00",
          id: 1,
        },
        {
          name: "19:00",
          id: 2,
        },
      ],
    },
    {
      id: 25062021,
      weekday: "Sexta-feira",
      date: "25/06/2021",
      showtimes: [
        {
          name: "15:00",
          id: 3,
        },
        {
          name: "19:00",
          id: 4,
        },
      ],
    },
    {
      id: 26062021,
      weekday: "Sábado",
      date: "26/06/2021",
      showtimes: [
        {
          name: "15:00",
          id: 5,
        },
        {
          name: "19:00",
          id: 6,
        },
      ],
    },
    {
      id: 27062021,
      weekday: "Domingo",
      date: "27/06/2021",
      showtimes: [
        {
          name: "15:00",
          id: 7,
        },
        {
          name: "19:00",
          id: 8,
        },
      ],
    },
    {
      id: 28062021,
      weekday: "Segunda-feira",
      date: "28/06/2021",
      showtimes: [
        {
          name: "15:00",
          id: 9,
        },
        {
          name: "19:00",
          id: 10,
        },
      ],
    },
    {
      id: 29062021,
      weekday: "Terça-feira",
      date: "29/06/2021",
      showtimes: [
        {
          name: "15:00",
          id: 11,
        },
        {
          name: "19:00",
          id: 12,
        },
      ],
    },
    {
      id: 30062021,
      weekday: "Quarta-feira",
      date: "30/06/2021",
      showtimes: [
        {
          name: "15:00",
          id: 13,
        },
        {
          name: "19:00",
          id: 14,
        },
      ],
    },
    {
      id: 1072021,
      weekday: "Quinta-feira",
      date: "01/07/2021",
      showtimes: [
        {
          name: "15:00",
          id: 15,
        },
        {
          name: "19:00",
          id: 16,
        },
      ],
    },
  ],
};
