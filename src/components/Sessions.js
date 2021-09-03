import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getSessions } from "./APIRequests";

function ShowTimes({ timesList }) {
  return timesList.map((time, index) => (
    <Link to={`/sessions/seats/${time.id}`} key={index}>
      <button>{time.name}</button>
    </Link>
  ));
}

function Session({ day }) {
  return (
    <div className="session">
      <h2>
        <span>{day.weekday}</span> - <span>{day.date}</span>
      </h2>

      <ShowTimes timesList={day.showtimes} id={day.id} />
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
          <Session day={day} key={index} />
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
